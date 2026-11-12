import { Alert, Linking, Platform } from 'react-native';

export type DirectionsPlace = {
  name: string;
  latitude: number;
  longitude: number;
};

export type DirectionsLabels = {
  failed: string;
};

/**
 * Opens the phone's default maps app for turn-by-turn directions.
 * iOS uses system Maps; Android uses geo: so the preferred maps app opens.
 */
export async function openDefaultDirections(
  place: DirectionsPlace,
  labels: DirectionsLabels
) {
  const { latitude: lat, longitude: lng, name } = place;
  const label = encodeURIComponent(name);

  const primary =
    Platform.OS === 'ios'
      ? `maps://?daddr=${lat},${lng}&q=${label}`
      : `geo:${lat},${lng}?q=${lat},${lng}(${label})`;

  const fallback =
    Platform.OS === 'ios'
      ? `http://maps.apple.com/?daddr=${lat},${lng}&q=${label}`
      : `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  try {
    const canOpen = await Linking.canOpenURL(primary).catch(() => false);
    if (canOpen) {
      await Linking.openURL(primary);
      return;
    }
  } catch {
    // Fall through.
  }

  try {
    await Linking.openURL(fallback);
  } catch {
    Alert.alert(place.name, labels.failed);
  }
}
