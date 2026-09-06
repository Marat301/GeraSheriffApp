import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import React, { useCallback, useState } from 'react';
import { ActivityIndicator, Image, Pressable, StyleSheet, View } from 'react-native';
import { AppText } from '../../src/components/AppText';
import { CategoryButton } from '../../src/components/CategoryButton';
import { Screen } from '../../src/components/Screen';
import { SearchBar } from '../../src/components/SearchBar';
import { useLanguage } from '../../src/context/LanguageContext';
import { CHANNEL_URL, FEATURED_VIDEO_ID, youtubeWatchUrl } from '../../src/data/videos';
import { fetchLatestVideo } from '../../src/services/youtubeFeed';
import { colors, radius, spacing } from '../../src/theme/colors';

export default function HomeScreen() {
  const { t } = useLanguage();
  const router = useRouter();
  const [featuredId, setFeaturedId] = useState(FEATURED_VIDEO_ID);
  const [featuredTitle, setFeaturedTitle] = useState('');
  const [loadingFeatured, setLoadingFeatured] = useState(true);
  const thumb = `https://img.youtube.com/vi/${featuredId}/hqdefault.jpg`;

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      (async () => {
        try {
          const latest = await fetchLatestVideo();
          if (!cancelled && latest) {
            setFeaturedId(latest.youtubeId);
            setFeaturedTitle(latest.title);
          }
        } catch {
          // keep current / fallback id
        } finally {
          if (!cancelled) setLoadingFeatured(false);
        }
      })();
      return () => {
        cancelled = true;
      };
    }, [])
  );

  return (
    <Screen>
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <AppText variant="label" color={colors.blueBright}>
            USA · FLORIDA
          </AppText>
          <View style={styles.brandRow}>
            <AppText variant="hero" style={styles.brandTitle}>
              {t('appName')}
            </AppText>
            <Image
              source={require('../../assets/gera-sheriff-logo.png')}
              style={styles.logo}
              accessibilityLabel="Gera Sheriff logo"
            />
          </View>
          <AppText muted>{t('tagline')}</AppText>
        </View>
      </View>

      <SearchBar
        value=""
        onChangeText={() => {}}
        placeholder={t('searchPlaceholder')}
        editable={false}
        onPress={() => router.push('/search')}
      />

      <AppText variant="label" style={styles.sectionLabel}>
        {t('categories')}
      </AppText>
      <View style={styles.grid}>
        <CategoryButton
          title={t('emergencyGuides')}
          icon="medkit"
          onPress={() => router.push('/(tabs)/emergency')}
          accent={colors.danger}
        />
        <CategoryButton
          title={t('emergencyLocations')}
          icon="location"
          onPress={() => router.push('/emergency-locations' as never)}
          accent={colors.danger}
        />
        <CategoryButton
          title={t('policeCards')}
          icon="chatbubbles"
          onPress={() => router.push('/police-cards')}
          accent={colors.blueBright}
        />
        <CategoryButton
          title={t('catalogue')}
          icon="library"
          onPress={() => router.push('/(tabs)/library')}
        />
        <CategoryButton
          title={t('caseRoadmap')}
          icon="git-commit"
          onPress={() => router.push('/case-roadmap' as never)}
        />
        <CategoryButton
          title={t('lawLibrary')}
          icon="scale"
          onPress={() => router.push('/law-library' as never)}
        />
        <CategoryButton
          title={t('glossary')}
          icon="book"
          onPress={() => router.push('/glossary')}
        />
        <CategoryButton
          title={t('articles')}
          icon="newspaper"
          onPress={() => router.push('/articles')}
        />
        <CategoryButton
          title={t('youtubeLibrary')}
          icon="logo-youtube"
          onPress={() => router.push('/(tabs)/library')}
        />
      </View>

      <AppText variant="label" style={styles.sectionLabel}>
        {t('featuredVideo')}
      </AppText>
      <Pressable
        onPress={() => WebBrowser.openBrowserAsync(youtubeWatchUrl(featuredId))}
        style={styles.featured}
      >
        <Image source={{ uri: thumb }} style={styles.featuredImage} />
        <LinearGradient colors={['transparent', colors.black]} style={styles.featuredOverlay}>
          {loadingFeatured ? (
            <ActivityIndicator color={colors.white} style={{ marginBottom: spacing.sm }} />
          ) : (
            <View style={styles.playBadge}>
              <Ionicons name="play" size={18} color={colors.white} />
            </View>
          )}
          <AppText variant="subtitle" numberOfLines={2}>
            {featuredTitle || t('channelLink')}
          </AppText>
          <AppText variant="caption" color={colors.blueBright}>
            {t('newest')}
          </AppText>
        </LinearGradient>
      </Pressable>
      <Pressable onPress={() => WebBrowser.openBrowserAsync(CHANNEL_URL)}>
        <AppText color={colors.blueBright} style={{ marginBottom: spacing.lg }}>
          youtube.com/@GeraSheriff →
        </AppText>
      </Pressable>

      <AppText variant="label" style={styles.sectionLabel}>
        {t('modulesComingSoon')}
      </AppText>
      {(
        [
          { key: 'aiAssistant', icon: 'sparkles' as const },
          { key: 'liveWorkshops', icon: 'videocam' as const },
        ] as const
      ).map((item) => (
        <View key={item.key} style={styles.soonCard}>
          <Ionicons name={item.icon} size={20} color={colors.textMuted} />
          <AppText muted style={{ flex: 1, marginLeft: spacing.sm }}>
            {t(item.key)}
          </AppText>
          <View style={styles.soonPill}>
            <AppText variant="caption" color={colors.blueBright}>
              {t('comingSoon')}
            </AppText>
          </View>
        </View>
      ))}

      <AppText variant="caption" style={styles.disclaimer}>
        {t('disclaimer')}
      </AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginVertical: 4,
  },
  brandTitle: {
    flexShrink: 1,
  },
  logo: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.blue,
    backgroundColor: colors.black,
  },
  sectionLabel: {
    marginBottom: spacing.sm,
    marginTop: spacing.sm,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featured: {
    height: 190,
    borderRadius: radius.lg,
    overflow: 'hidden',
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  featuredImage: {
    width: '100%',
    height: '100%',
  },
  featuredOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    padding: spacing.md,
  },
  playBadge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  soonCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  soonPill: {
    backgroundColor: colors.blueGlow,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: radius.full,
  },
  disclaimer: {
    marginTop: spacing.lg,
    textAlign: 'center',
  },
});
