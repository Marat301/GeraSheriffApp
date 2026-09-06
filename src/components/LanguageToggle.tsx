import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { LANGUAGE_TOGGLE_CODE } from '../i18n/languages';
import { colors, radius, spacing } from '../theme/colors';

export function LanguageToggle() {
  const { language, preferredLanguage, setLanguage } = useLanguage();
  const pairCode = LANGUAGE_TOGGLE_CODE[preferredLanguage];

  return (
    <View style={styles.wrap}>
      <Pressable
        onPress={() => setLanguage(preferredLanguage)}
        style={[styles.chip, language === preferredLanguage && styles.active]}
      >
        <Text style={[styles.text, language === preferredLanguage && styles.activeText]}>
          {pairCode}
        </Text>
      </Pressable>
      <Pressable
        onPress={() => setLanguage('en')}
        style={[styles.chip, language === 'en' && styles.active]}
      >
        <Text style={[styles.text, language === 'en' && styles.activeText]}>EN</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: radius.full,
    padding: 3,
    borderWidth: 1,
    borderColor: colors.border,
  },
  chip: {
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
    borderRadius: radius.full,
  },
  active: {
    backgroundColor: colors.blue,
  },
  text: {
    color: colors.textSecondary,
    fontWeight: '700',
    fontSize: 13,
  },
  activeText: {
    color: colors.white,
  },
});
