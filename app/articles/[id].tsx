import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { AppText } from '../../src/components/AppText';
import { Screen } from '../../src/components/Screen';
import { useLanguage } from '../../src/context/LanguageContext';
import { articles } from '../../src/data/articles';
import { spacing } from '../../src/theme/colors';

export default function ArticleDetailScreen() {
  const { id: idParam } = useLocalSearchParams<{ id?: string | string[] }>();
  const id = Array.isArray(idParam) ? idParam[0] : idParam;
  const { language, t } = useLanguage();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <Screen>
        <AppText>{t('emptySearch')}</AppText>
      </Screen>
    );
  }

  const title = language === 'ru' ? article.titleRu : article.titleEn;
  const body = language === 'ru' ? article.bodyRu : article.bodyEn;

  return (
    <Screen>
      <Stack.Screen options={{ title: t('articles') }} />
      <AppText variant="title" style={{ marginBottom: spacing.md }}>
        {title}
      </AppText>
      <AppText style={{ marginBottom: spacing.lg }}>{body}</AppText>
      <AppText variant="caption">{t('disclaimer')}</AppText>
    </Screen>
  );
}
