import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Linking,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { AppText } from '../../src/components/AppText';
import { LanguageToggle } from '../../src/components/LanguageToggle';
import { StackBackButton } from '../../src/components/StackBackButton';
import { useLanguage } from '../../src/context/LanguageContext';
import {
  FALLBACK_COORDS,
  getLocationCategory,
  LocationCategoryId,
} from '../../src/data/emergencyLocations';
import {
  fetchNearbyPlaces,
  formatDistance,
  NearbyPlace,
  toTelUrl,
} from '../../src/services/nearbyPlaces';
import { colors, radius, spacing } from '../../src/theme/colors';

function buildMapHtml(
  latitude: number,
  longitude: number,
  places: NearbyPlace[],
  selectedId: string | null,
  showUser: boolean
): string {
  const markers = places.map((p) => ({
    id: p.id,
    lat: p.latitude,
    lng: p.longitude,
    name: p.name,
    selected: p.id === selectedId,
  }));

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <style>
    html, body, #map { margin:0; padding:0; height:100%; width:100%; background:#0A0A0F; }
    .leaflet-control-attribution { font-size: 10px; }
    .leaflet-div-icon { background: transparent; border: none; }
  </style>
</head>
<body>
  <div id="map"></div>
  <script>
    const places = ${JSON.stringify(markers)};
    const map = L.map('map', { zoomControl: true }).setView([${latitude}, ${longitude}], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap'
    }).addTo(map);

    function userIconHtml() {
      return '<div style="width:36px;height:36px;display:flex;align-items:center;justify-content:center;">'
        + '<svg width="34" height="34" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">'
        + '<circle cx="17" cy="17" r="16" fill="#2E7D32" stroke="#81C784" stroke-width="2"/>'
        + '<circle cx="17" cy="12" r="5" fill="#E8F5E9"/>'
        + '<path d="M8 27c0-5 4-8 9-8s9 3 9 8" fill="#E8F5E9"/>'
        + '</svg></div>';
    }

    function pinIconHtml(color) {
      return '<div style="position:relative;width:28px;height:42px;">'
        + '<svg width="28" height="42" viewBox="0 0 28 42" xmlns="http://www.w3.org/2000/svg">'
        + '<ellipse cx="14" cy="38" rx="8" ry="3.5" fill="rgba(0,0,0,0.35)"/>'
        + '<path d="M14 1C7.4 1 2 6.4 2 13c0 8.5 12 24 12 24s12-15.5 12-24C26 6.4 20.6 1 14 1z" fill="' + color + '" stroke="#fff" stroke-width="1.5"/>'
        + '<circle cx="14" cy="13" r="4.5" fill="#fff"/>'
        + '</svg></div>';
    }

    const youIcon = L.divIcon({
      className: '',
      html: userIconHtml(),
      iconSize: [36, 36],
      iconAnchor: [18, 18],
    });

    L.marker([${latitude}, ${longitude}], { icon: youIcon, zIndexOffset: 1000 })
      .addTo(map)
      .bindPopup(${showUser ? "'You'" : "'Approx.'"});

    const bounds = L.latLngBounds([[${latitude}, ${longitude}]]);
    places.forEach((p) => {
      const color = p.selected ? '#E53935' : '#1E5EFF';
      const icon = L.divIcon({
        className: '',
        html: pinIconHtml(color),
        iconSize: [28, 42],
        iconAnchor: [14, 38],
        popupAnchor: [0, -34],
      });
      const marker = L.marker([p.lat, p.lng], { icon }).addTo(map);
      marker.bindPopup(p.name);
      marker.on('click', () => {
        window.ReactNativeWebView && window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'select', id: p.id }));
      });
      bounds.extend([p.lat, p.lng]);
    });
    if (places.length) map.fitBounds(bounds.pad(0.2));
  </script>
</body>
</html>`;
}

export default function EmergencyLocationCategoryScreen() {
  const params = useLocalSearchParams<{ category?: string | string[] }>();
  const { language, t } = useLanguage();
  const webRef = useRef<WebView>(null);
  const errorMessageRef = useRef(t('locationsLoadError'));
  errorMessageRef.current = t('locationsLoadError');

  const categoryId = useMemo(() => {
    const raw = params.category;
    const value = Array.isArray(raw) ? raw[0] : raw;
    if (!value || value === 'index') return undefined;
    return value;
  }, [params.category]);

  const category = useMemo(
    () => (categoryId ? getLocationCategory(categoryId) : undefined),
    [categoryId]
  );

  const [coords, setCoords] = useState({
    latitude: FALLBACK_COORDS.latitude,
    longitude: FALLBACK_COORDS.longitude,
  });
  const [usingFallback, setUsingFallback] = useState(false);
  const [places, setPlaces] = useState<NearbyPlace[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mapEpoch, setMapEpoch] = useState(0);

  const title = category
    ? `${category.emoji} ${language === 'ru' ? category.nameRu : category.nameEn}`
    : t('emergencyLocations');

  const hotline = useMemo(() => {
    const id = category?.id as LocationCategoryId | undefined;
    if (id === 'poisonControl') {
      return { label: t('hotlinePoison'), tel: '18002221222' };
    }
    if (id === 'domesticViolence') {
      return { label: t('hotlineDomesticViolence'), tel: '18007997233' };
    }
    return null;
  }, [category?.id, t]);

  const closestId = places[0]?.id ?? null;

  const load = useCallback(async () => {
    if (!category) return;
    setLoading(true);
    setError(null);

    let latitude = FALLBACK_COORDS.latitude;
    let longitude = FALLBACK_COORDS.longitude;
    let fallback = true;

    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const position = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Balanced,
        });
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        fallback = false;
      }
    } catch {
      fallback = true;
    }

    setCoords({ latitude, longitude });
    setUsingFallback(fallback);

    try {
      const results = await fetchNearbyPlaces(category, latitude, longitude);
      setPlaces(results);
      if (results[0]) setSelectedId(results[0].id);
      setMapEpoch((n) => n + 1);
    } catch {
      setPlaces([]);
      setError(errorMessageRef.current);
    } finally {
      setLoading(false);
    }
  }, [category]);

  // Only refetch when the category changes — not when language toggles
  useEffect(() => {
    load();
  }, [load]);

  const openDirections = (place: NearbyPlace) => {
    const label = encodeURIComponent(place.name);
    const url =
      Platform.OS === 'ios'
        ? `http://maps.apple.com/?daddr=${place.latitude},${place.longitude}&q=${label}`
        : `geo:${place.latitude},${place.longitude}?q=${place.latitude},${place.longitude}(${label})`;
    Linking.openURL(url).catch(() => {
      Linking.openURL(
        `https://www.google.com/maps/dir/?api=1&destination=${place.latitude},${place.longitude}`
      );
    });
  };

  const callPlace = (place: NearbyPlace) => {
    if (!place.phone) return;
    Linking.openURL(toTelUrl(place.phone)).catch(() => {
      Alert.alert(place.name, t('locationsCallFailed'));
    });
  };

  const focusPlace = (place: NearbyPlace) => {
    setSelectedId(place.id);
    webRef.current?.injectJavaScript(`
      (function() {
        if (typeof map !== 'undefined') {
          map.panTo([${place.latitude}, ${place.longitude}], { animate: true });
        }
        true;
      })();
    `);
  };

  const mapHtml = useMemo(
    () =>
      buildMapHtml(
        coords.latitude,
        coords.longitude,
        places,
        selectedId,
        !usingFallback
      ),
    // Remount map only when search results / position change (mapEpoch), not on language
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mapEpoch]
  );

  if (!category) {
    return (
      <View style={styles.centered}>
        <Stack.Screen
          options={{
            title: t('emergencyLocations'),
            headerLeft: () => <StackBackButton />,
          }}
        />
        <AppText>{t('emptySearch')}</AppText>
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <Stack.Screen
        options={{
          title,
          headerLeft: () => <StackBackButton />,
        }}
      />
      <View style={styles.toggleWrap} pointerEvents="box-none">
        <LanguageToggle />
      </View>

      <WebView
        key={mapEpoch}
        ref={webRef}
        originWhitelist={['*']}
        source={{ html: mapHtml }}
        style={styles.map}
        javaScriptEnabled
        domStorageEnabled
        onMessage={(event) => {
          try {
            const data = JSON.parse(event.nativeEvent.data) as {
              type?: string;
              id?: string;
            };
            if (data.type === 'select' && data.id) {
              setSelectedId(data.id);
            }
          } catch {
            // ignore
          }
        }}
      />

      <View style={styles.panel}>
        {usingFallback && (
          <AppText variant="caption" color={colors.blueBright} style={styles.banner}>
            {t('locationsUsingFallback')}
          </AppText>
        )}

        <View style={styles.panelHeader}>
          <AppText variant="subtitle" style={{ flex: 1 }}>
            {title}
          </AppText>
          <Pressable onPress={load} hitSlop={8} style={styles.refreshBtn}>
            <Ionicons name="refresh" size={18} color={colors.blueBright} />
          </Pressable>
        </View>

        <Pressable
          onPress={() => Linking.openURL('tel:911')}
          style={({ pressed }) => [styles.urgent911, pressed && { opacity: 0.9 }]}
        >
          <Ionicons name="warning" size={18} color={colors.white} />
          <AppText color={colors.white} style={styles.urgentText}>
            {t('locationsUrgent911')}
          </AppText>
        </Pressable>

        {hotline && (
          <Pressable
            onPress={() => Linking.openURL(`tel:${hotline.tel}`)}
            style={styles.hotline}
          >
            <Ionicons name="call" size={18} color={colors.white} />
            <AppText color={colors.white} style={{ flex: 1 }}>
              {hotline.label}
            </AppText>
          </Pressable>
        )}

        {loading ? (
          <View style={styles.centeredPanel}>
            <ActivityIndicator color={colors.blueBright} />
            <AppText muted style={{ marginTop: spacing.sm }}>
              {t('locationsLoading')}
            </AppText>
          </View>
        ) : error ? (
          <View style={styles.centeredPanel}>
            <AppText muted>{error}</AppText>
            <Pressable onPress={load} style={styles.retry}>
              <AppText color={colors.blueBright}>{t('locationsRetry')}</AppText>
            </Pressable>
          </View>
        ) : places.length === 0 ? (
          <AppText muted style={{ padding: spacing.md }}>
            {t('locationsEmpty')}
          </AppText>
        ) : (
          <ScrollView contentContainerStyle={styles.list}>
            {places.map((place) => {
              const selected = place.id === selectedId;
              const isClosest = place.id === closestId;
              return (
                <Pressable
                  key={place.id}
                  onPress={() => focusPlace(place)}
                  style={[styles.placeCard, selected && styles.placeCardSelected]}
                >
                  <View style={styles.placeTop}>
                    <View style={{ flex: 1 }}>
                      <AppText variant="subtitle">{place.name}</AppText>
                      <View style={styles.distanceRow}>
                        <AppText variant="caption" color={colors.blueBright}>
                          {formatDistance(place.distanceMeters, language)}
                        </AppText>
                        {isClosest ? (
                          <AppText
                            variant="caption"
                            color={colors.danger}
                            style={styles.closest}
                          >
                            {t('closest')}
                          </AppText>
                        ) : null}
                      </View>
                      {!!place.address && (
                        <AppText muted style={{ marginTop: 2 }} numberOfLines={2}>
                          {place.address}
                        </AppText>
                      )}
                    </View>
                    <Pressable
                      onPress={() => openDirections(place)}
                      style={styles.navBtn}
                      accessibilityLabel={t('locationsDirections')}
                    >
                      <Ionicons name="navigate" size={22} color={colors.white} />
                    </Pressable>
                  </View>
                  {place.phone ? (
                    <Pressable
                      onPress={() => callPlace(place)}
                      style={styles.callRow}
                      accessibilityLabel={t('callOffice')}
                    >
                      <Ionicons name="call-outline" size={16} color={colors.blueBright} />
                      <AppText variant="caption" color={colors.blueBright} style={{ flex: 1 }}>
                        {t('callOffice')}: {place.phone}
                      </AppText>
                    </Pressable>
                  ) : null}
                </Pressable>
              );
            })}
          </ScrollView>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.black,
  },
  toggleWrap: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.md,
    zIndex: 20,
  },
  map: {
    height: '42%',
    width: '100%',
    backgroundColor: colors.blackSoft,
  },
  panel: {
    flex: 1,
    backgroundColor: colors.blackSoft,
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
    marginTop: -spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  banner: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.sm,
  },
  panelHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  refreshBtn: {
    padding: spacing.xs,
  },
  hotline: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginHorizontal: spacing.md,
    marginBottom: spacing.sm,
    backgroundColor: colors.danger,
    borderRadius: radius.md,
    padding: spacing.sm,
  },
  list: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.xl,
  },
  placeCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  placeCardSelected: {
    borderColor: colors.blueBright,
    backgroundColor: colors.blueMuted,
  },
  placeTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  distanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginTop: 2,
  },
  closest: {
    fontWeight: '800',
    letterSpacing: 0.4,
  },
  callRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginTop: spacing.sm,
    paddingTop: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  navBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  urgent911: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginHorizontal: spacing.md,
    marginBottom: spacing.sm,
    backgroundColor: colors.danger,
    borderRadius: radius.md,
    padding: spacing.sm,
  },
  urgentText: {
    flex: 1,
    fontWeight: '700',
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
    backgroundColor: colors.black,
  },
  centeredPanel: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
  },
  retry: {
    marginTop: spacing.sm,
  },
});
