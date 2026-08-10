import { Stack } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppText } from '../../src/components/AppText';
import { Screen } from '../../src/components/Screen';
import { SearchBar } from '../../src/components/SearchBar';
import { useLanguage } from '../../src/context/LanguageContext';
import { glossaryTerms } from '../../src/data/glossary';
import { colors, radius, spacing } from '../../src/theme/colors';

export default function GlossaryScreen() {
  const { language, t } = useLanguage();
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return glossaryTerms;
    return glossaryTerms.filter((term) => {
      const en = `${term.termEn} ${term.definitionEn}`.toLowerCase();
      const ru = `${term.termRu} ${term.definitionRu}`.toLowerCase();
      return en.includes(q) || ru.includes(q);
    });
  }, [query]);

  return (
    <Screen>
      <Stack.Screen options={{ title: t('glossary') }} />
      <SearchBar
        value={query}
        onChangeText={setQuery}
        placeholder={t('searchPlaceholder')}
      />
      {filtered.map((term) => {
        const name = language === 'ru' ? term.termRu : term.termEn;
        const alt = language === 'ru' ? term.termEn : term.termRu;
        const definition = language === 'ru' ? term.definitionRu : term.definitionEn;
        return (
          <View key={term.id} style={styles.card}>
            <AppText variant="subtitle">{name}</AppText>
            <AppText variant="caption" style={{ marginTop: 2 }}>
              {alt}
            </AppText>
            <AppText muted style={{ marginTop: spacing.sm }}>
              {definition}
            </AppText>
          </View>
        );
      })}
      <AppText variant="caption" style={{ marginTop: spacing.md }}>
        {t('disclaimer')}
      </AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
});
