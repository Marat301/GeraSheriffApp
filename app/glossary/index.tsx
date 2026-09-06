import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppText } from '../../src/components/AppText';
import { Screen } from '../../src/components/Screen';
import { SearchBar } from '../../src/components/SearchBar';
import { StackBackButton } from '../../src/components/StackBackButton';
import { useLanguage } from '../../src/context/LanguageContext';
import { glossaryTerms } from '../../src/data/glossary';
import { colors, radius, spacing } from '../../src/theme/colors';

export default function GlossaryScreen() {
  const { language, t } = useLanguage();
  const { term: termParam } = useLocalSearchParams<{ term?: string }>();
  const focusedId = Array.isArray(termParam) ? termParam[0] : termParam;
  const [query, setQuery] = useState('');
  const [highlightId, setHighlightId] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!focusedId) return;
    const match = glossaryTerms.find((item) => item.id === focusedId);
    if (!match) return;
    setHighlightId(focusedId);
    setQuery(language === 'ru' ? match.termRu : match.termEn);
  }, [focusedId, language]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return glossaryTerms;
    return glossaryTerms.filter((term) => {
      const en = `${term.termEn} ${term.definitionEn}`.toLowerCase();
      const ru = `${term.termRu} ${term.definitionRu}`.toLowerCase();
      return en.includes(q) || ru.includes(q) || term.id.includes(q);
    });
  }, [query]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          title: t('glossary'),
          headerLeft: () => <StackBackButton />,
        }}
      />
      <AppText muted style={{ marginBottom: spacing.sm }}>
        {t('glossaryIntro')}
      </AppText>
      <SearchBar
        value={query}
        onChangeText={(text) => {
          setQuery(text);
          setHighlightId(undefined);
        }}
        placeholder={t('glossarySearchPlaceholder')}
      />
      <AppText variant="caption" style={{ marginBottom: spacing.sm }}>
        {filtered.length} {t('glossaryTermsCount')}
      </AppText>
      {filtered.length === 0 ? (
        <AppText muted>{t('emptySearch')}</AppText>
      ) : (
        filtered.map((term) => {
          const name = language === 'ru' ? term.termRu : term.termEn;
          const alt = language === 'ru' ? term.termEn : term.termRu;
          const definition = language === 'ru' ? term.definitionRu : term.definitionEn;
          const highlighted = highlightId === term.id;
          return (
            <View key={term.id} style={[styles.card, highlighted && styles.cardHighlight]}>
              <AppText variant="subtitle">{name}</AppText>
              <AppText variant="caption" color={colors.blueBright} style={{ marginTop: 2 }}>
                {alt}
              </AppText>
              <AppText muted style={{ marginTop: spacing.sm }}>
                {definition}
              </AppText>
            </View>
          );
        })
      )}
      <AppText variant="caption" style={{ marginTop: spacing.md, marginBottom: spacing.lg }}>
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
  cardHighlight: {
    borderColor: colors.blue,
    borderWidth: 2,
    backgroundColor: colors.surfaceElevated,
  },
});
