import React from 'react';
import { Modal, Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLanguage } from '../context/LanguageContext';
import { LANGUAGE_DISPLAY_LABEL } from '../i18n/languages';
import { colors, radius, spacing } from '../theme/colors';
import { Language } from '../types';
import { AppText } from './AppText';

/** Native name first, English in parentheses */
const OPTIONS: { id: Language; label: string }[] = (
  ['en', 'ru', 'es', 'pt', 'ht'] as Language[]
).map((id) => ({ id, label: LANGUAGE_DISPLAY_LABEL[id] }));

export function LanguageOnboardingModal() {
  const { needsLanguageOnboarding, completeLanguageOnboarding, t } = useLanguage();
  const insets = useSafeAreaInsets();

  return (
    <Modal
      visible={needsLanguageOnboarding}
      animationType="fade"
      transparent
      onRequestClose={() => {
        // Require an explicit choice — no dismiss without selecting
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
            {t('languageOnboardingTitle')}
          </AppText>

          <View style={styles.list}>
            {OPTIONS.map((opt) => (
              <Pressable
                key={opt.id}
                onPress={() => void completeLanguageOnboarding(opt.id)}
                style={({ pressed }) => [styles.option, pressed && styles.optionPressed]}
                accessibilityRole="button"
                accessibilityLabel={opt.label}
              >
                <AppText variant="subtitle" style={styles.optionLabel}>
                  {opt.label}
                </AppText>
              </Pressable>
            ))}
          </View>

          <AppText muted style={styles.hint}>
            {t('languageOnboardingHint')}
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
