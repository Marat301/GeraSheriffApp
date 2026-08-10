import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { AppText } from '../../src/components/AppText';
import { CategoryButton } from '../../src/components/CategoryButton';
import { Screen } from '../../src/components/Screen';
import { VideoCard } from '../../src/components/VideoCard';
import { useLanguage } from '../../src/context/LanguageContext';
import { CHANNEL_URL, videoCategories, videos } from '../../src/data/videos';
import { TranslationKey } from '../../src/i18n/translations';
import { colors, radius, spacing } from '../../src/theme/colors';
import { VideoCategory } from '../../src/types';

type Section = 'videos' | 'books';

const categoryMeta: Record<
  VideoCategory,
  { label: TranslationKey; icon: keyof typeof Ionicons.glyphMap }
> = {
  police: { label: 'police', icon: 'shield' },
  law: { label: 'law', icon: 'document-text' },
  immigration: { label: 'immigration', icon: 'globe' },
  traffic: { label: 'traffic', icon: 'car' },
  firearms: { label: 'firearms', icon: 'flash' },
  selfDefense: { label: 'selfDefense', icon: 'fitness' },
  news: { label: 'news', icon: 'newspaper' },
};

export default function LibraryScreen() {
  const { t } = useLanguage();
  const router = useRouter();
  const [section, setSection] = useState<Section>('videos');
  const featured = videos.slice(0, 3);

  return (
    <Screen>
      <AppText variant="hero">{t('catalogue')}</AppText>
      <AppText muted style={{ marginBottom: spacing.md }}>
        {section === 'videos' ? '@GeraSheriff' : t('digitalLibrary')}
      </AppText>

      <View style={styles.segment}>
        <Pressable
          onPress={() => setSection('videos')}
          style={[styles.segmentBtn, section === 'videos' && styles.segmentActive]}
        >
          <AppText color={section === 'videos' ? colors.white : colors.textSecondary}>
            {t('videos')}
          </AppText>
        </Pressable>
        <Pressable
          onPress={() => setSection('books')}
          style={[styles.segmentBtn, section === 'books' && styles.segmentActive]}
        >
          <AppText color={section === 'books' ? colors.white : colors.textSecondary}>
            {t('books')}
          </AppText>
        </Pressable>
      </View>

      {section === 'videos' ? (
        <>
          <Pressable
            onPress={() => WebBrowser.openBrowserAsync(CHANNEL_URL)}
            style={styles.channelBtn}
          >
            <Ionicons name="logo-youtube" size={22} color={colors.danger} />
            <AppText style={{ marginLeft: spacing.sm, flex: 1 }}>{t('channelLink')}</AppText>
            <Ionicons name="open-outline" size={18} color={colors.blueBright} />
          </Pressable>

          <AppText variant="label" style={styles.label}>
            {t('categories')}
          </AppText>
          <View style={styles.grid}>
            {videoCategories.map((cat) => (
              <CategoryButton
                key={cat}
                title={t(categoryMeta[cat].label)}
                icon={categoryMeta[cat].icon}
                onPress={() => router.push(`/videos/${cat}`)}
              />
            ))}
          </View>

          <AppText variant="label" style={styles.label}>
            {t('featuredVideo')}
          </AppText>
          {featured.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </>
      ) : (
        <View style={styles.placeholder}>
          <Ionicons name="book" size={36} color={colors.blueBright} />
          <AppText variant="subtitle" style={{ marginTop: spacing.md, textAlign: 'center' }}>
            {t('addGeraSheriffBook')}
          </AppText>
          <AppText muted style={{ marginTop: spacing.sm, textAlign: 'center' }}>
            Gera Sheriff
          </AppText>
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  segment: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 4,
    marginBottom: spacing.md,
  },
  segmentBtn: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: radius.full,
  },
  segmentActive: {
    backgroundColor: colors.blue,
  },
  channelBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  label: { marginBottom: spacing.sm, marginTop: spacing.sm },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  placeholder: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    borderStyle: 'dashed',
    padding: spacing.xl,
    alignItems: 'center',
    minHeight: 200,
    justifyContent: 'center',
  },
});
