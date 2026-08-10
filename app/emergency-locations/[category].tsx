import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ActivityIndicator,
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
    name: p.name.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, ' '),
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

    ${
      showUser
        ? `L.circleMarker([${latitude}, ${longitude}], {
      radius: 8, color: '#3B7BFF', fillColor: '#1E5EFF', fillOpacity: 0.9, weight: 2
    }).addTo(map).bindPopup('You');`
        : `L.circleMarker([${latitude}, ${longitude}], {
      radius: 7, color: '#9AA3B5', fillColor: '#6B7385', fillOpacity: 0.8, weight: 2
    }).addTo(map).bindPopup('Approx.');`
    }

    const bounds = L.latLngBounds([[${latitude}, ${longitude}]]);
    places.forEach((p) => {
      const color = p.selected ? '#E53935' : '#1E5EFF';
      const marker = L.circleMarker([p.lat, p.lng], {
        radius: p.selected ? 10 : 7,
        color,
        fillColor: color,
        fillOpacity: 0.95,
        weight: 2
      }).addTo(map);
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
  const [mapKey, setMapKey] = useState(0);

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
      setMapKey((k) => k + 1);
    } catch {
      setPlaces([]);
      setError(t('locationsLoadError'));
    } finally {
      setLoading(false);
    }
  }, [category, t]);

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

  const focusPlace = (place: NearbyPlace) => {
    setSelectedId(place.id);
    setMapKey((k) => k + 1);
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
    [coords, places, selectedId, usingFallback]
  );

  if (!category) {
    return (
      <View style={styles.centered}>
        <Stack.Screen options={{ title: t('emergencyLocations') }} />
        <AppText>{t('emptySearch')}</AppText>
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <Stack.Screen options={{ title }} />
      <View style={styles.toggleWrap} pointerEvents="box-none">
        <LanguageToggle />
      </View>

      <WebView
        key={mapKey}
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
              return (
                <Pressable
                  key={place.id}
                  onPress={() => focusPlace(place)}
                  style={[styles.placeCard, selected && styles.placeCardSelected]}
                >
                  <View style={{ flex: 1 }}>
                    <AppText variant="subtitle">{place.name}</AppText>
                    <AppText variant="caption" color={colors.blueBright}>
                      {formatDistance(place.distanceMeters, language)}
                    </AppText>
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
                    <Ionicons name="navigate" size={18} color={colors.white} />
                  </Pressable>
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
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
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
  navBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
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
