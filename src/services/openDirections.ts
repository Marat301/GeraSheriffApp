import { ActionSheetIOS, Alert, Linking, Platform } from 'react-native';

export type DirectionsPlace = {
  name: string;
  latitude: number;
  longitude: number;
};

export type DirectionsLabels = {
  title: string;
  defaultMaps: string;
  googleMaps: string;
  waze: string;
  cancel: string;
  failed: string;
};

type NavApp = 'default' | 'google' | 'waze';

function urlsFor(app: NavApp, place: DirectionsPlace) {
  const { latitude: lat, longitude: lng, name } = place;
  const label = encodeURIComponent(name);

  switch (app) {
    case 'default':
      // iOS: system Maps; Android: geo: opens the phone's preferred maps app.
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

async function openApp(app: NavApp, place: DirectionsPlace, failedLabel: string) {
  const { primary, fallback } = urlsFor(app, place);

  try {
    const canOpen = await Linking.canOpenURL(primary).catch(() => false);
    if (canOpen) {
      await Linking.openURL(primary);
      return;
    }
  } catch {
    // Fall through to https / web scheme.
  }

  try {
    await Linking.openURL(fallback);
  } catch {
    Alert.alert(place.name, failedLabel);
  }
}

/**
 * Shows a chooser for the phone's default maps app, Google Maps, and Waze,
 * then opens the selected app (with an https fallback if the native scheme fails).
 */
export function promptOpenDirections(place: DirectionsPlace, labels: DirectionsLabels) {
  const choices: { id: NavApp; label: string }[] = [
    { id: 'default', label: labels.defaultMaps },
    { id: 'google', label: labels.googleMaps },
    { id: 'waze', label: labels.waze },
  ];

  if (Platform.OS === 'ios') {
    const optionLabels = [...choices.map((c) => c.label), labels.cancel];
    ActionSheetIOS.showActionSheetWithOptions(
      {
        title: labels.title,
        options: optionLabels,
        cancelButtonIndex: optionLabels.length - 1,
      },
      (buttonIndex) => {
        if (buttonIndex === optionLabels.length - 1) return;
        const choice = choices[buttonIndex];
        if (!choice) return;
        void openApp(choice.id, place, labels.failed);
      }
    );
    return;
  }

  Alert.alert(labels.title, undefined, [
    ...choices.map((choice) => ({
      text: choice.label,
      onPress: () => void openApp(choice.id, place, labels.failed),
    })),
    { text: labels.cancel, style: 'cancel' as const },
  ]);
}
