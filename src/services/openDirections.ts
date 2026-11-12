import { Alert, Linking, Platform } from 'react-native';
import { PreferredMapsApp } from './mapsPreference';

export type DirectionsPlace = {
  name: string;
  latitude: number;
  longitude: number;
};

export type DirectionsLabels = {
  failed: string;
};

function urlsFor(app: PreferredMapsApp, place: DirectionsPlace) {
  const { latitude: lat, longitude: lng, name } = place;
  const label = encodeURIComponent(name);

  switch (app) {
    case 'apple':
      return {
        primary: `maps://?daddr=${lat},${lng}&q=${label}`,
        fallback: `http://maps.apple.com/?daddr=${lat},${lng}&q=${label}`,
      };
    case 'default':
      return {
        primary:
          Platform.OS === 'ios'
            ? `maps://?daddr=${lat},${lng}&q=${label}`
            : `geo:${lat},${lng}?q=${lat},${lng}(${label})`,
        fallback:
          Platform.OS === 'ios'
            ? `http://maps.apple.com/?daddr=${lat},${lng}&q=${label}`
            : `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
      };
    case 'google':
      return {
        primary:
          Platform.OS === 'ios'
            ? `comgooglemaps://?daddr=${lat},${lng}&directionsmode=driving`
            : `google.navigation:q=${lat},${lng}`,
        fallback: `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
      };
    case 'waze':
      return {
        primary: `waze://?ll=${lat},${lng}&navigate=yes`,
        fallback: `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`,
      };
  }
}

/**
 * Opens directions in the user's preferred maps app (native scheme, then https fallback).
 */
export async function openPreferredDirections(
  place: DirectionsPlace,
  app: PreferredMapsApp,
  labels: DirectionsLabels
) {
  const { primary, fallback } = urlsFor(app, place);

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
