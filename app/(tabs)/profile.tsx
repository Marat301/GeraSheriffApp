import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { AppText } from '../../src/components/AppText';
import { Screen } from '../../src/components/Screen';
import { useLanguage } from '../../src/context/LanguageContext';
import {
  PREFERRED_LANGUAGE_LABEL_KEY,
  PREFERRED_LANGUAGES,
} from '../../src/i18n/languages';
import { colors, radius, spacing } from '../../src/theme/colors';
import { PreferredLanguage } from '../../src/types';

export default function SettingsScreen() {
  const { t, preferredLanguage, setPreferredLanguage } = useLanguage();

  const onSelectPreferred = async (lang: PreferredLanguage) => {
    await setPreferredLanguage(lang);
  };

  return (
    <Screen>
      <AppText variant="hero">{t('profileTitle')}</AppText>

      <View style={styles.section}>
        <AppText variant="label" style={{ marginBottom: spacing.xs }}>
          {t('language')}
        </AppText>
        <AppText muted style={{ marginBottom: spacing.md }}>
          {t('languagePairHint')}
        </AppText>
        {PREFERRED_LANGUAGES.map((lang) => {
          const active = preferredLanguage === lang;
          return (
            <Pressable
              key={lang}
              onPress={() => void onSelectPreferred(lang)}
              style={[styles.langChip, active && styles.langActive]}
            >
              <AppText color={active ? colors.white : colors.textSecondary}>
                {t(PREFERRED_LANGUAGE_LABEL_KEY[lang])}
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
