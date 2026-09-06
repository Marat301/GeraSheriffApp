import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { AppText } from '../../src/components/AppText';
import { Screen } from '../../src/components/Screen';
import { SearchBar } from '../../src/components/SearchBar';
import { StackBackButton } from '../../src/components/StackBackButton';
import { useLanguage } from '../../src/context/LanguageContext';
import {
  getLawLibraryArticlesForCategory,
  getLawLibraryCategory,
} from '../../src/data/lawLibrary';
import { colors, radius, spacing } from '../../src/theme/colors';

export default function LawLibraryCategoryScreen() {
  const { category: categoryParam } = useLocalSearchParams<{ category: string }>();
  const categoryId = Array.isArray(categoryParam) ? categoryParam[0] : categoryParam;
  const { language, t } = useLanguage();
  const router = useRouter();
  const [query, setQuery] = useState('');

  const category = getLawLibraryCategory(categoryId ?? '');
  const articles = useMemo(() => {
    const list = getLawLibraryArticlesForCategory(categoryId ?? '');
    const q = query.trim().toLowerCase();
    if (!q) return list;
    return list.filter((a) => {
      const en = `${a.titleEn} ${a.summaryEn} ${a.bodyEn}`.toLowerCase();
      const ru = `${a.titleRu} ${a.summaryRu} ${a.bodyRu}`.toLowerCase();
      return en.includes(q) || ru.includes(q);
    });
  }, [categoryId, query]);

  if (!category) {
    return (
      <Screen>
        <Stack.Screen
          options={{
            title: t('lawLibrary'),
            headerLeft: () => <StackBackButton />,
          }}
        />
        <AppText>{t('emptySearch')}</AppText>
      </Screen>
    );
  }

  const title = language === 'ru' ? category.titleRu : category.titleEn;

  return (
    <Screen>
      <Stack.Screen
        options={{
          title,
          headerLeft: () => <StackBackButton />,
        }}
      />
      <AppText muted style={{ marginBottom: spacing.sm }}>
        {language === 'ru' ? category.summaryRu : category.summaryEn}
      </AppText>
      <SearchBar
        value={query}
        onChangeText={setQuery}
        placeholder={t('lawLibrarySearchPlaceholder')}
      />
      {articles.length === 0 ? (
        <AppText muted>{t('emptySearch')}</AppText>
      ) : (
        articles.map((article) => {
          const articleTitle = language === 'ru' ? article.titleRu : article.titleEn;
          const summary = language === 'ru' ? article.summaryRu : article.summaryEn;
          return (
            <Pressable
              key={article.id}
              onPress={() => router.push(`/law-library/article/${article.id}` as never)}
              style={({ pressed }) => [styles.card, pressed && { opacity: 0.9 }]}
            >
              <AppText variant="subtitle">{articleTitle}</AppText>
              <AppText muted style={{ marginTop: spacing.xs }}>
                {summary}
              </AppText>
              <AppText color={colors.blueBright} style={{ marginTop: spacing.sm }}>
                {t('readMore')} →
              </AppText>
            </Pressable>
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
});
