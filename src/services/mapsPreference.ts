import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

export type PreferredMapsApp = 'default' | 'apple' | 'google' | 'waze';

const PREFERRED_KEY = '@gera_preferred_maps_v1';
const ONBOARDING_KEY = '@gera_maps_onboarding_v1';

export function availableMapsApps(): PreferredMapsApp[] {
  if (Platform.OS === 'ios') {
    return ['apple', 'google', 'waze'];
  }
  return ['default', 'google', 'waze'];
}

export function defaultMapsApp(): PreferredMapsApp {
  return Platform.OS === 'ios' ? 'apple' : 'default';
}

export function isPreferredMapsApp(value: string | null | undefined): value is PreferredMapsApp {
  return value === 'default' || value === 'apple' || value === 'google' || value === 'waze';
}

export async function readPreferredMapsApp(): Promise<PreferredMapsApp | null> {
  try {
    const stored = await AsyncStorage.getItem(PREFERRED_KEY);
    return isPreferredMapsApp(stored) ? stored : null;
  } catch {
    return null;
  }
}

export async function writePreferredMapsApp(app: PreferredMapsApp): Promise<void> {
  await AsyncStorage.setItem(PREFERRED_KEY, app);
}

export async function readMapsOnboardingDone(): Promise<boolean> {
  try {
    return (await AsyncStorage.getItem(ONBOARDING_KEY)) === '1';
  } catch {
    return false;
  }
}

export async function writeMapsOnboardingDone(): Promise<void> {
  await AsyncStorage.setItem(ONBOARDING_KEY, '1');
}
