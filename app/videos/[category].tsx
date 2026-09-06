import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { AppText } from '../../src/components/AppText';
import { Screen } from '../../src/components/Screen';
import { StackBackButton } from '../../src/components/StackBackButton';
import { VideoCard } from '../../src/components/VideoCard';
import { useLanguage } from '../../src/context/LanguageContext';
import { videosByCategory } from '../../src/data/videos';
import { TranslationKey } from '../../src/i18n/translations';
import { spacing } from '../../src/theme/colors';
import { VideoCategory } from '../../src/types';

const labels: Record<VideoCategory, TranslationKey> = {
  police: 'police',
  law: 'law',
  immigration: 'immigration',
  traffic: 'traffic',
  firearms: 'firearms',
  selfDefense: 'selfDefense',
  news: 'news',
};

export default function VideoCategoryScreen() {
  const { category: categoryParam } = useLocalSearchParams<{
    category?: string | string[];
  }>();
  const category = Array.isArray(categoryParam) ? categoryParam[0] : categoryParam;
  const { language, t } = useLanguage();
  const cat = category as VideoCategory;
  const list = videosByCategory(cat);
  const title = labels[cat] ? t(labels[cat]) : t('videos');

  return (
    <Screen>
      <Stack.Screen options={{ title, headerLeft: () => <StackBackButton /> }} />
      <AppText variant="title" style={{ marginBottom: spacing.md }}>
        {title}
      </AppText>
      {list.length === 0 ? <AppText muted>{t('emptySearch')}</AppText> : null}
      {list.map((v) => (
        <VideoCard
          key={v.id}
          youtubeId={v.youtubeId}
          title={language === 'ru' ? v.titleRu : v.titleEn}
        />
      ))}
      <AppText variant="caption">
        youtube.com/@GeraSheriff — {t('openYouTube')}
      </AppText>
    </Screen>
  );
}
