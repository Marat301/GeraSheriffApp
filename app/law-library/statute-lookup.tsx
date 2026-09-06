import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AppText } from '../../src/components/AppText';
import { Screen } from '../../src/components/Screen';
import { StackBackButton } from '../../src/components/StackBackButton';
import { useLanguage } from '../../src/context/LanguageContext';
import {
  findStatuteByCode,
  listStatuteCodes,
  normalizeStatuteCode,
  suggestStatutes,
} from '../../src/data/criminalStatutes';
import { colors, radius, spacing } from '../../src/theme/colors';

const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'back'] as const;

export default function StatuteLookupScreen() {
  const { language, t } = useLanguage();
  const router = useRouter();
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const suggestions = useMemo(() => suggestStatutes(value), [value]);
  const examples = useMemo(() => listStatuteCodes().slice(0, 6), []);

  const append = (key: string) => {
    setError('');
    setValue((prev) => {
      if (key === '.') {
        if (prev.includes('.')) return prev;
        if (!prev) return prev;
        return `${prev}.`;
      }
      if (prev.replace('.', '').length >= 8) return prev;
      return `${prev}${key}`;
    });
  };

  const backspace = () => {
    setError('');
    setValue((prev) => prev.slice(0, -1));
  };

  const lookup = (raw?: string) => {
    const code = normalizeStatuteCode(raw ?? value);
    if (!code) {
      setError(t('statuteEnterCode'));
      return;
    }
    const hit = findStatuteByCode(code);
    if (!hit) {
      setError(t('statuteNotFound'));
      return;
    }
    setError('');
    router.push({
      pathname: '/law-library/statute/[code]',
      params: { code: hit.code },
    });
  };

  return (
    <Screen>
      <Stack.Screen
        options={{
          title: t('statuteLookup'),
          headerLeft: () => <StackBackButton />,
        }}
      />

      <AppText muted style={{ marginBottom: spacing.md }}>
        {t('statuteLookupIntro')}
      </AppText>

      <View style={styles.display}>
        <AppText variant="caption" color={colors.blueBright}>
          {t('statuteCodeLabel')}
        </AppText>
        <AppText variant="hero" style={styles.displayValue}>
          {value || '—'}
        </AppText>
      </View>

      {error ? (
        <AppText color={colors.danger} style={{ marginBottom: spacing.sm }}>
          {error}
        </AppText>
      ) : null}

      <View style={styles.pad}>
        {KEYS.map((key) => {
          if (key === 'back') {
            return (
              <View key={key} style={styles.keyWrap}>
                <Pressable
                  onPress={backspace}
                  onLongPress={() => {
                    setError('');
                    setValue('');
                  }}
                  style={({ pressed }) => [
                    styles.key,
                    styles.keyAction,
                    pressed && styles.keyPressed,
                  ]}
                >
                  <Ionicons name="backspace-outline" size={26} color={colors.white} />
                </Pressable>
              </View>
            );
          }
          return (
            <View key={key} style={styles.keyWrap}>
              <Pressable
                onPress={() => append(key)}
                style={({ pressed }) => [
                  styles.key,
                  key === '.' && styles.keyAction,
                  pressed && styles.keyPressed,
                ]}
              >
                <Text style={styles.keyLabel}>{key}</Text>
              </Pressable>
            </View>
          );
        })}
      </View>

      <Pressable
        onPress={() => lookup()}
        style={({ pressed }) => [styles.lookupBtn, pressed && { opacity: 0.9 }]}
      >
        <Ionicons name="search" size={20} color={colors.white} />
        <AppText variant="subtitle" color={colors.white}>
          {t('statuteLookupAction')}
        </AppText>
      </Pressable>

      {suggestions.length > 0 ? (
        <View style={styles.section}>
          <AppText variant="label" style={{ marginBottom: spacing.sm }}>
            {t('statuteSuggestions')}
          </AppText>
          {suggestions.map((s) => {
            const title = language === 'ru' ? s.titleRu : s.titleEn;
            return (
              <Pressable
                key={s.code}
                onPress={() => {
                  setValue(s.code);
                  lookup(s.code);
                }}
                style={({ pressed }) => [styles.chipRow, pressed && { opacity: 0.9 }]}
              >
                <AppText variant="subtitle" color={colors.blueBright}>
                  {s.code}
                </AppText>
                <AppText muted style={{ flex: 1 }} numberOfLines={1}>
                  {title}
                </AppText>
                <Ionicons name="chevron-forward" size={16} color={colors.textMuted} />
              </Pressable>
            );
          })}
        </View>
      ) : (
        <View style={styles.section}>
          <AppText variant="label" style={{ marginBottom: spacing.sm }}>
            {t('statuteExamples')}
          </AppText>
          <View style={styles.exampleWrap}>
            {examples.map((code) => (
              <Pressable
                key={code}
                onPress={() => {
                  setValue(code);
                  lookup(code);
                }}
                style={({ pressed }) => [styles.exampleChip, pressed && { opacity: 0.85 }]}
              >
                <AppText variant="caption" color={colors.blueBright}>
                  {code}
                </AppText>
              </Pressable>
            ))}
          </View>
        </View>
      )}

      <AppText variant="caption" style={{ marginTop: spacing.md, marginBottom: spacing.lg }}>
        {t('disclaimer')}
      </AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  display: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    marginBottom: spacing.md,
    alignItems: 'center',
  },
  displayValue: {
    marginTop: spacing.xs,
    letterSpacing: 1,
  },
  pad: {
    width: '75%',
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: spacing.sm,
    marginBottom: spacing.md,
  },
  keyWrap: {
    width: '31.5%',
    aspectRatio: 1.25,
  },
  key: {
    flex: 1,
    backgroundColor: colors.surfaceElevated,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyLabel: {
    color: colors.textPrimary,
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 26,
    includeFontPadding: false,
    textAlign: 'center',
  },
  keyAction: {
    backgroundColor: colors.blueMuted,
  },
  keyPressed: {
    opacity: 0.75,
  },
  lookupBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    backgroundColor: colors.blue,
    borderRadius: radius.lg,
    paddingVertical: spacing.md,
    marginBottom: spacing.lg,
  },
  section: {
    marginBottom: spacing.md,
  },
  chipRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  exampleWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  exampleChip: {
    backgroundColor: colors.surface,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.blue,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
});
