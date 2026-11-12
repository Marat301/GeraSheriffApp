import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { AppText } from '../../src/components/AppText';
import { Screen } from '../../src/components/Screen';
import { useLanguage } from '../../src/context/LanguageContext';
import { useMapsPreference } from '../../src/context/MapsPreferenceContext';
import { useSubscription } from '../../src/context/SubscriptionContext';
import {
  LANGUAGE_DISPLAY_LABEL,
  PREFERRED_LANGUAGE_DISPLAY_LABEL,
  PREFERRED_LANGUAGES,
} from '../../src/i18n/languages';
import { TranslationKey } from '../../src/i18n/translations';
import { PreferredMapsApp } from '../../src/services/mapsPreference';
import { colors, radius, spacing } from '../../src/theme/colors';
import { PreferredLanguage } from '../../src/types';

const MAPS_LABEL_KEY: Record<PreferredMapsApp, TranslationKey> = {
  default: 'mapsAppDefault',
  apple: 'mapsAppApple',
  google: 'mapsAppGoogle',
  waze: 'mapsAppWaze',
};

export default function SettingsScreen() {
  const {
    t,
    preferredLanguage,
    englishOnly,
    setPreferredLanguage,
    setEnglishOnly,
  } = useLanguage();
  const { preferredMapsApp, availableApps, setPreferredMapsApp } = useMapsPreference();
  const { isPro, bypass, restore } = useSubscription();

  const onSelectPreferred = async (lang: PreferredLanguage) => {
    await setPreferredLanguage(lang);
  };

  return (
    <Screen>
      <AppText variant="hero">{t('profileTitle')}</AppText>

      <View style={styles.section}>
        <AppText variant="label" style={{ marginBottom: spacing.xs }}>
          {t('subscription')}
        </AppText>
        <AppText muted style={{ marginBottom: spacing.md }}>
          {bypass
            ? 'Dev mode (no RevenueCat API key)'
            : isPro
              ? t('subscriptionActive')
              : t('subscriptionInactive')}
        </AppText>
        <Pressable onPress={() => void restore()} style={styles.langChip}>
          <AppText color={colors.textSecondary}>{t('paywallRestore')}</AppText>
        </Pressable>
      </View>

      <View style={styles.section}>
        <AppText variant="label" style={{ marginBottom: spacing.xs }}>
          {t('language')}
        </AppText>
        <AppText muted style={{ marginBottom: spacing.md }}>
          {englishOnly ? t('languageEnglishOnlyHint') : t('languagePairHint')}
        </AppText>

        <Pressable
          onPress={() => void setEnglishOnly()}
          style={[styles.langChip, englishOnly && styles.langActive]}
        >
          <AppText color={englishOnly ? colors.white : colors.textSecondary}>
            {LANGUAGE_DISPLAY_LABEL.en}
          </AppText>
        </Pressable>

        {PREFERRED_LANGUAGES.map((lang) => {
          const active = !englishOnly && preferredLanguage === lang;
          return (
            <Pressable
              key={lang}
              onPress={() => void onSelectPreferred(lang)}
              style={[styles.langChip, active && styles.langActive]}
            >
              <AppText color={active ? colors.white : colors.textSecondary}>
                {PREFERRED_LANGUAGE_DISPLAY_LABEL[lang]}
              </AppText>
            </Pressable>
          );
        })}
      </View>

      <View style={styles.section}>
        <AppText variant="label" style={{ marginBottom: spacing.xs }}>
          {t('mapsPreference')}
        </AppText>
        <AppText muted style={{ marginBottom: spacing.md }}>
          {t('mapsPreferenceHint')}
        </AppText>
        {availableApps.map((app) => {
          const active = preferredMapsApp === app;
          return (
            <Pressable
              key={app}
              onPress={() => void setPreferredMapsApp(app)}
              style={[styles.langChip, active && styles.langActive]}
            >
              <AppText color={active ? colors.white : colors.textSecondary}>
                {t(MAPS_LABEL_KEY[app])}
              </AppText>
            </Pressable>
          );
        })}
      </View>

      <AppText variant="caption" style={styles.version}>
        {t('version')}
      </AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: spacing.lg,
  },
  langChip: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  langActive: {
    borderColor: colors.blue,
    backgroundColor: colors.blueMuted,
  },
  version: {
    textAlign: 'center',
    marginTop: spacing.lg,
  },
});
