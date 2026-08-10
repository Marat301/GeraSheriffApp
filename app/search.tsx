import { Stack, useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { AppText } from '../src/components/AppText';
import { Screen } from '../src/components/Screen';
import { SearchBar } from '../src/components/SearchBar';
import { useLanguage } from '../src/context/LanguageContext';
import { articles } from '../src/data/articles';
import { emergencyGuides } from '../src/data/emergency';
import { glossaryTerms } from '../src/data/glossary';
import { videos } from '../src/data/videos';
import { colors, radius, spacing } from '../src/theme/colors';

export default function SearchScreen() {
  const { language, t } = useLanguage();
  const router = useRouter();
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const items: { id: string; title: string; type: string; href: string }[] = [];

    videos.forEach((v) => {
      const title = language === 'ru' ? v.titleRu : v.titleEn;
      if (title.toLowerCase().includes(q)) {
        items.push({
          id: `video-${v.id}`,
          title,
          type: t('videos'),
          href: `/videos/${v.category}`,
        });
      }
    });

    articles.forEach((a) => {
      const title = language === 'ru' ? a.titleRu : a.titleEn;
      if (title.toLowerCase().includes(q)) {
        items.push({
          id: `article-${a.id}`,
          title,
          type: t('articles'),
          href: `/articles/${a.id}`,
        });
      }
    });

    emergencyGuides.forEach((g) => {
      const title = language === 'ru' ? g.titleRu : g.titleEn;
      if (title.toLowerCase().includes(q)) {
        items.push({
          id: `eg-${g.id}`,
          title,
          type: t('emergencyGuides'),
          href: `/emergency/${g.id}`,
        });
      }
    });

    glossaryTerms.forEach((term) => {
      const title = language === 'ru' ? term.termRu : term.termEn;
      const def = language === 'ru' ? term.definitionRu : term.definitionEn;
      if (title.toLowerCase().includes(q) || def.toLowerCase().includes(q)) {
        items.push({
          id: `gloss-${term.id}`,
          title,
          type: t('glossary'),
          href: '/glossary',
        });
      }
    });

    return items;
  }, [query, language, t]);

  return (
    <Screen>
      <Stack.Screen options={{ title: t('search') }} />
      <SearchBar
        value={query}
        onChangeText={setQuery}
        placeholder={t('searchPlaceholder')}
      />
      {query && results.length === 0 ? (
        <AppText muted>{t('emptySearch')}</AppText>
      ) : null}
      {results.map((item) => (
        <Pressable
          key={item.id}
          onPress={() => router.push(item.href as never)}
          style={styles.row}
        >
          <View style={{ flex: 1 }}>
            <AppText variant="caption">{item.type}</AppText>
            <AppText variant="subtitle">{item.title}</AppText>
          </View>
        </Pressable>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
});
