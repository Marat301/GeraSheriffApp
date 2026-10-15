import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppText } from '../../src/components/AppText';
import { Screen } from '../../src/components/Screen';
import { SearchBar } from '../../src/components/SearchBar';
import { StackBackButton } from '../../src/components/StackBackButton';
import { useLanguage } from '../../src/context/LanguageContext';
import {
  glossaryDefinition,
  glossarySearchText,
  glossaryTermLabel,
  glossaryTerms,
} from '../../src/data/glossary';
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
    setQuery(glossaryTermLabel(match, language));
  }, [focusedId, language]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return glossaryTerms;
    return glossaryTerms.filter((term) => glossarySearchText(term, language).includes(q));
  }, [query, language]);

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
          const name = glossaryTermLabel(term, language);
          const definition = glossaryDefinition(term, language);
          const highlighted = highlightId === term.id;
          return (
            <View key={term.id} style={[styles.card, highlighted && styles.cardHighlight]}>
              <AppText variant="subtitle">{name}</AppText>
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
