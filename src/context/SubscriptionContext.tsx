import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Alert } from 'react-native';
import Purchases, {
  CustomerInfo,
  PURCHASES_ERROR_CODE,
  PurchasesError,
  PurchasesPackage,
} from 'react-native-purchases';
import {
  configureRevenueCat,
  isRevenueCatConfigured,
  RC_ENTITLEMENT_ID,
  RC_PRODUCT_IDS,
  shouldBypassPurchases,
} from '../services/revenueCat';

export type PlanId = 'monthly' | 'lifetime';

type SubscriptionContextValue = {
  ready: boolean;
  isPro: boolean;
  bypass: boolean;
  prices: Record<PlanId, string>;
  refresh: () => Promise<void>;
  purchasePlan: (plan: PlanId) => Promise<boolean>;
  restore: () => Promise<boolean>;
};

const FALLBACK_PRICES: Record<PlanId, string> = {
  monthly: '$7.99',
  lifetime: '$49.99',
};

const SubscriptionContext = createContext<SubscriptionContextValue | null>(null);

function hasPremium(info: CustomerInfo | null): boolean {
  if (!info) return false;
  return typeof info.entitlements.active[RC_ENTITLEMENT_ID] !== 'undefined';
}

function errorMessage(err: unknown): string {
  if (err && typeof err === 'object' && 'message' in err) {
    return String((err as PurchasesError).message);
  }
  return String(err);
}

function productIdForPlan(plan: PlanId): string {
  return plan === 'monthly' ? RC_PRODUCT_IDS.monthly : RC_PRODUCT_IDS.lifetime;
}

async function findPackage(plan: PlanId): Promise<PurchasesPackage | null> {
  const offerings = await Purchases.getOfferings();
  const current = offerings.current;
  if (!current) return null;
  const productId = productIdForPlan(plan);
  return (
    current.availablePackages.find((pkg) => pkg.product.identifier === productId) ?? null
  );
}

export function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  const bypass = shouldBypassPurchases();
  const [ready, setReady] = useState(bypass);
  const [isPro, setIsPro] = useState(bypass);
  const [prices, setPrices] = useState<Record<PlanId, string>>(FALLBACK_PRICES);

  const refresh = useCallback(async () => {
    if (bypass || !isRevenueCatConfigured()) {
      setIsPro(bypass);
      setReady(true);
      return;
    }
    try {
      const info = await Purchases.getCustomerInfo();
      setIsPro(hasPremium(info));
    } catch {
      // Keep prior isPro on transient errors
    } finally {
      setReady(true);
    }
  }, [bypass]);

  const loadPrices = useCallback(async () => {
    if (bypass || !isRevenueCatConfigured()) return;
    try {
      const offerings = await Purchases.getOfferings();
      const packages = offerings.current?.availablePackages ?? [];
      const next = { ...FALLBACK_PRICES };
      for (const pkg of packages) {
        if (pkg.product.identifier === RC_PRODUCT_IDS.monthly) {
          next.monthly = pkg.product.priceString;
        }
        if (pkg.product.identifier === RC_PRODUCT_IDS.lifetime) {
          next.lifetime = pkg.product.priceString;
        }
      }
      setPrices(next);
    } catch {
      // Keep fallback prices
    }
  }, [bypass]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const ok = await configureRevenueCat();
      if (cancelled) return;
      if (!ok) {
        setIsPro(true); // no keys → don't lock local/dev builds
        setReady(true);
        return;
      }
      await Promise.all([refresh(), loadPrices()]);
      Purchases.addCustomerInfoUpdateListener((info) => {
        if (!cancelled) setIsPro(hasPremium(info));
      });
    })();
    return () => {
      cancelled = true;
    };
  }, [refresh, loadPrices]);

  const purchasePlan = useCallback(
    async (plan: PlanId) => {
      if (bypass) {
        setIsPro(true);
        return true;
      }
      try {
        const pkg = await findPackage(plan);
        if (!pkg) {
          Alert.alert(
            'Purchase unavailable',
            'Could not load this plan from the store. Try again in a moment.'
          );
          return false;
        }
        const { customerInfo } = await Purchases.purchasePackage(pkg);
        const ok = hasPremium(customerInfo);
        setIsPro(ok);
        return ok;
      } catch (err) {
        const code = (err as PurchasesError)?.code;
        if (code === PURCHASES_ERROR_CODE.PURCHASE_CANCELLED_ERROR) {
          return false;
        }
        Alert.alert('Purchase unavailable', errorMessage(err));
        return false;
      }
    },
    [bypass]
  );

  const restore = useCallback(async () => {
    if (bypass) {
      setIsPro(true);
      return true;
    }
    try {
      const info = await Purchases.restorePurchases();
      const ok = hasPremium(info);
      setIsPro(ok);
      if (!ok) {
        Alert.alert(
          'No purchases found',
          'We could not find an active subscription or lifetime purchase for this Apple/Google account.'
        );
      }
      return ok;
    } catch (err) {
      const code = (err as PurchasesError)?.code;
      if (code === PURCHASES_ERROR_CODE.PURCHASE_CANCELLED_ERROR) {
        return false;
      }
      Alert.alert('Restore failed', errorMessage(err));
      return false;
    }
  }, [bypass]);

  const value = useMemo(
    () => ({
      ready,
      isPro,
      bypass,
      prices,
      refresh,
      purchasePlan,
      restore,
    }),
    [ready, isPro, bypass, prices, refresh, purchasePlan, restore]
  );

  return (
    <SubscriptionContext.Provider value={value}>{children}</SubscriptionContext.Provider>
  );
}

export function useSubscription(): SubscriptionContextValue {
  const ctx = useContext(SubscriptionContext);
  if (!ctx) {
    throw new Error('useSubscription must be used within SubscriptionProvider');
  }
  return ctx;
}

export function useSubscriptionOptional(): SubscriptionContextValue | null {
  return useContext(SubscriptionContext);
}
