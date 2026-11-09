import { Platform } from 'react-native';
import Purchases, { LOG_LEVEL } from 'react-native-purchases';

/**
 * Product IDs in App Store Connect + Google Play, attached to the
 * `gera_sheriff_premium` entitlement. Purchases use a custom in-app paywall
 * (no RevenueCat dashboard Paywalls template required).
 */
export const RC_PRODUCT_IDS = {
  monthly: 'gerasheriff_premium_monthly',
  lifetime: 'gerasheriff_premium_lifetime',
} as const;

/** RevenueCat entitlement identifier (must match dashboard) */
export const RC_ENTITLEMENT_ID = 'gera_sheriff_premium';

const iosKey = process.env.EXPO_PUBLIC_REVENUECAT_IOS_API_KEY?.trim() ?? '';
const androidKey = process.env.EXPO_PUBLIC_REVENUECAT_ANDROID_API_KEY?.trim() ?? '';

export function getRevenueCatApiKey(): string {
  if (Platform.OS === 'ios') return iosKey;
  if (Platform.OS === 'android') return androidKey;
  return '';
}

/**
 * Unlock without RC only in local/dev when keys are missing (Expo Go).
 * Production builds without keys stay locked on the paywall.
 */
export function shouldBypassPurchases(): boolean {
  return __DEV__ && !getRevenueCatApiKey();
}

let configured = false;

export async function configureRevenueCat(): Promise<boolean> {
  const apiKey = getRevenueCatApiKey();
  if (!apiKey) {
    configured = false;
    return false;
  }
  if (configured) return true;

  if (__DEV__) {
    Purchases.setLogLevel(LOG_LEVEL.DEBUG);
  }

  Purchases.configure({ apiKey });
  configured = true;
  return true;
}

export function isRevenueCatConfigured(): boolean {
  return configured;
}
