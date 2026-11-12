import React, { useState } from 'react';
import {
  ActivityIndicator,
  Image,
  Linking,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PlanId, useSubscription } from '../context/SubscriptionContext';
import { useLanguage } from '../context/LanguageContext';
import { useMapsPreference } from '../context/MapsPreferenceContext';
import { colors, radius, spacing } from '../theme/colors';
import { AppText } from './AppText';

type Props = {
  children: React.ReactNode;
};

const TERMS_URL =
  'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/';
const PRIVACY_URL = 'https://marat301.github.io/gerasheriff-legal/privacy/';

/**
 * Full-app gate (no free tier). Shown after onboarding until
 * the user owns the `gera_sheriff_premium` entitlement.
 */
export function PaywallGate({ children }: Props) {
  const insets = useSafeAreaInsets();
  const { t, needsLanguageOnboarding } = useLanguage();
  const { needsMapsOnboarding } = useMapsPreference();
  const { ready, isPro, prices, purchasePlan, restore } = useSubscription();
  const [selected, setSelected] = useState<PlanId>('lifetime');
  const [busy, setBusy] = useState(false);

  if (!ready) {
    return (
      <View style={[styles.loading, { paddingTop: insets.top }]}>
        <ActivityIndicator color={colors.blue} size="large" />
      </View>
    );
  }

  if (isPro || needsLanguageOnboarding || needsMapsOnboarding) {
    return <>{children}</>;
  }

  const onContinue = async () => {
    if (busy) return;
    setBusy(true);
    try {
      await purchasePlan(selected);
    } finally {
      setBusy(false);
    }
  };

  const onRestore = async () => {
    if (busy) return;
    setBusy(true);
    try {
      await restore();
    } finally {
      setBusy(false);
    }
  };

  return (
    <View
      style={[
        styles.gate,
        { paddingTop: insets.top + 48, paddingBottom: insets.bottom + 24 },
      ]}
    >
      <View style={styles.header}>
        <Image
          source={require('../../assets/gera-sheriff-badge.png')}
          style={styles.logo}
          accessibilityLabel="Gera Sheriff badge"
        />
        <AppText variant="hero" style={styles.brand}>
          {t('appName')}
        </AppText>
        <AppText style={styles.subtitle}>{t('paywallSubtitle')}</AppText>
        <View style={styles.dividerTrack}>
          <View style={styles.dividerAccent} />
        </View>
      </View>

      <View style={styles.plans}>
        <PlanCard
          selected={selected === 'monthly'}
          icon="calendar-outline"
          title={t('paywallMonthly')}
          detail={`${prices.monthly} ${t('paywallPerMonth')}`}
          onPress={() => setSelected('monthly')}
        />
        <PlanCard
          selected={selected === 'lifetime'}
          icon="shield-checkmark-outline"
          title={t('paywallLifetime')}
          detail={`${prices.lifetime} ${t('paywallOneTime')}`}
          onPress={() => setSelected('lifetime')}
        />
      </View>

      <Pressable
        onPress={() => void onContinue()}
        disabled={busy}
        style={({ pressed }) => [
          styles.primary,
          pressed && styles.pressed,
          busy && styles.disabled,
        ]}
      >
        {busy ? (
          <ActivityIndicator color={colors.white} />
        ) : (
          <AppText style={styles.primaryLabel}>{t('paywallContinue')}</AppText>
        )}
      </Pressable>

      <Pressable
        onPress={() => void onRestore()}
        disabled={busy}
        style={({ pressed }) => [styles.restore, pressed && styles.pressed]}
      >
        <AppText color={colors.textSecondary}>{t('paywallRestore')}</AppText>
      </Pressable>

      <View style={styles.legal}>
        <AppText variant="caption" style={styles.legalLine}>
          {t('paywallRenewNote')}
        </AppText>
        <AppText variant="caption" style={styles.legalLine}>
          {t('paywallAgreePrefix')}{' '}
          <AppText
            variant="caption"
            color={colors.blue}
            onPress={() => void Linking.openURL(TERMS_URL)}
          >
            {t('paywallTerms')}
          </AppText>{' '}
          {t('paywallAnd')}{' '}
          <AppText
            variant="caption"
            color={colors.blue}
            onPress={() => void Linking.openURL(PRIVACY_URL)}
          >
            {t('paywallPrivacy')}
          </AppText>
          .
        </AppText>
      </View>
    </View>
  );
}

function PlanCard({
  selected,
  icon,
  title,
  detail,
  onPress,
}: {
  selected: boolean;
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  detail: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.planCard,
        selected && styles.planCardSelected,
        pressed && styles.pressed,
      ]}
    >
      <Ionicons
        name={icon}
        size={28}
        color={colors.white}
        style={styles.planIcon}
      />
      <View style={styles.planText}>
        <AppText style={styles.planTitle}>{title}</AppText>
        <AppText style={styles.planDetail}>{detail}</AppText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gate: {
    flex: 1,
    backgroundColor: colors.black,
    paddingHorizontal: spacing.lg,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  logo: {
    width: 112,
    height: 112,
    marginBottom: spacing.md,
  },
  brand: {
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  dividerTrack: {
    width: '100%',
    height: 1,
    backgroundColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dividerAccent: {
    width: 72,
    height: 2,
    backgroundColor: colors.white,
    borderRadius: 1,
  },
  plans: {
    gap: spacing.md,
    marginBottom: spacing.xl,
  },
  planCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.blackSoft,
    borderRadius: radius.lg,
    borderWidth: 1.5,
    borderColor: colors.border,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,
  },
  planCardSelected: {
    borderColor: colors.blue,
  },
  planIcon: {
    marginRight: spacing.md,
  },
  planText: {
    flex: 1,
  },
  planTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  planDetail: {
    color: colors.textSecondary,
    fontSize: 15,
  },
  primary: {
    backgroundColor: colors.blue,
    borderRadius: radius.md,
    paddingVertical: spacing.md + 2,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 52,
    marginBottom: spacing.md,
  },
  primaryLabel: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 17,
  },
  restore: {
    alignItems: 'center',
    paddingVertical: spacing.sm,
    marginBottom: spacing.lg,
  },
  legal: {
    marginTop: 'auto',
    paddingHorizontal: spacing.sm,
  },
  legalLine: {
    textAlign: 'center',
    color: colors.textMuted,
    lineHeight: 18,
    marginBottom: spacing.xs,
  },
  pressed: {
    opacity: 0.85,
  },
  disabled: {
    opacity: 0.7,
  },
});
