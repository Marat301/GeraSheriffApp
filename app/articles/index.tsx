import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { AppText } from '../../src/components/AppText';
import { Screen } from '../../src/components/Screen';
import { useLanguage } from '../../src/context/LanguageContext';
import { articles } from '../../src/data/articles';
import { colors, radius, spacing } from '../../src/theme/colors';

export default function ArticlesScreen() {
  const { language, t } = useLanguage();
  const router = useRouter();

  return (
    <Screen>
      <Stack.Screen options={{ title: t('articles') }} />
      {articles.map((article) => {
        const title = language === 'ru' ? article.titleRu : article.titleEn;
        const summary = language === 'ru' ? article.summaryRu : article.summaryEn;
        return (
          <Pressable
            key={article.id}
            onPress={() => router.push(`/articles/${article.id}`)}
            style={styles.card}
          >
            <AppText variant="subtitle">{title}</AppText>
            <AppText muted style={{ marginTop: spacing.xs }}>
              {summary}
            </AppText>
            <AppText color={colors.blueBright} style={{ marginTop: spacing.sm }}>
              {t('readMore')} →
            </AppText>
          </Pressable>
        );
      })}
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
    marginBottom: spacing.md,
  },
});
