import React from 'react';
import { Modal, Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLanguage } from '../context/LanguageContext';
import { useMapsPreference } from '../context/MapsPreferenceContext';
import { PreferredMapsApp } from '../services/mapsPreference';
import { colors, radius, spacing } from '../theme/colors';
import { AppText } from './AppText';
import { TranslationKey } from '../i18n/translations';

const LABEL_KEY: Record<PreferredMapsApp, TranslationKey> = {
  default: 'mapsAppDefault',
  apple: 'mapsAppApple',
  google: 'mapsAppGoogle',
  waze: 'mapsAppWaze',
};

export function MapsOnboardingModal() {
  const { t } = useLanguage();
  const { needsMapsOnboarding, availableApps, completeMapsOnboarding } = useMapsPreference();
  const insets = useSafeAreaInsets();

  return (
    <Modal
      visible={needsMapsOnboarding}
      animationType="fade"
      transparent
      onRequestClose={() => {
        // Require an explicit choice
      }}
    >
      <View
        style={[
          styles.backdrop,
          { paddingTop: insets.top + 24, paddingBottom: insets.bottom + 24 },
        ]}
      >
        <View style={styles.sheet}>
          <AppText variant="title" style={styles.title}>
            {t('mapsOnboardingTitle')}
          </AppText>

          <View style={styles.list}>
            {availableApps.map((app) => (
              <Pressable
                key={app}
                onPress={() => void completeMapsOnboarding(app)}
                style={({ pressed }) => [styles.option, pressed && styles.optionPressed]}
                accessibilityRole="button"
                accessibilityLabel={t(LABEL_KEY[app])}
              >
                <AppText variant="subtitle" style={styles.optionLabel}>
                  {t(LABEL_KEY[app])}
                </AppText>
              </Pressable>
            ))}
          </View>

          <AppText muted style={styles.hint}>
            {t('mapsOnboardingHint')}
          </AppText>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.78)',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
  },
  sheet: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
  },
  title: {
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  list: {
    gap: spacing.sm,
  },
  option: {
    backgroundColor: colors.blackSoft,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: spacing.md + 2,
    paddingHorizontal: spacing.md,
    alignItems: 'center',
  },
  optionPressed: {
    borderColor: colors.blue,
    backgroundColor: colors.blueMuted,
  },
  optionLabel: {
    textAlign: 'center',
  },
  hint: {
    textAlign: 'center',
    marginTop: spacing.lg,
    fontSize: 13,
    lineHeight: 19,
  },
});
