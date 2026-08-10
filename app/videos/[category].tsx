import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { AppText } from '../../src/components/AppText';
import { Screen } from '../../src/components/Screen';
import { VideoCard } from '../../src/components/VideoCard';
import { useLanguage } from '../../src/context/LanguageContext';
import { videosByCategory } from '../../src/data/videos';
import { TranslationKey } from '../../src/i18n/translations';
import { VideoCategory } from '../../src/types';
import { spacing } from '../../src/theme/colors';

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
  const { category } = useLocalSearchParams<{ category: string }>();
  const { t } = useLanguage();
  const cat = category as VideoCategory;
  const list = videosByCategory(cat);
  const title = labels[cat] ? t(labels[cat]) : t('videos');

  return (
    <Screen>
      <Stack.Screen options={{ title }} />
      <AppText variant="title" style={{ marginBottom: spacing.md }}>
        {title}
      </AppText>
      {list.length === 0 ? <AppText muted>{t('emptySearch')}</AppText> : null}
      {list.map((v) => (
        <VideoCard key={v.id} video={v} />
      ))}
      <AppText variant="caption">
        youtube.com/@GeraSheriff — {t('openYouTube')}
      </AppText>
    </Screen>
  );
}
