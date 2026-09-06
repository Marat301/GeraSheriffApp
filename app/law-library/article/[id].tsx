import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppText } from '../../../src/components/AppText';
import { Screen } from '../../../src/components/Screen';
import { StackBackButton } from '../../../src/components/StackBackButton';
import { useLanguage } from '../../../src/context/LanguageContext';
import { getLawLibraryArticle, getLawLibraryCategory } from '../../../src/data/lawLibrary';
import { colors, radius, spacing } from '../../../src/theme/colors';

export default function LawLibraryArticleScreen() {
  const { id: idParam } = useLocalSearchParams<{ id: string }>();
  const id = Array.isArray(idParam) ? idParam[0] : idParam;
  const { language, t } = useLanguage();
  const article = getLawLibraryArticle(id ?? '');
  const category = article ? getLawLibraryCategory(article.categoryId) : undefined;

  if (!article) {
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

  const title = language === 'ru' ? article.titleRu : article.titleEn;
  const body = language === 'ru' ? article.bodyRu : article.bodyEn;
  const categoryTitle = category
    ? language === 'ru'
      ? category.titleRu
      : category.titleEn
    : t('lawLibrary');

  return (
    <Screen>
      <Stack.Screen
        options={{
          title: categoryTitle,
          headerLeft: () => <StackBackButton />,
        }}
      />
      <View style={styles.card}>
        <AppText variant="caption" color={colors.blueBright} style={{ marginBottom: spacing.sm }}>
          {categoryTitle}
        </AppText>
        <AppText variant="title" style={{ marginBottom: spacing.md }}>
          {title}
        </AppText>
        <AppText style={styles.body}>{body}</AppText>
      </View>
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
    padding: spacing.lg,
  },
  body: {
    lineHeight: 24,
  },
});
