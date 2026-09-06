import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, View } from 'react-native';
import { AppText } from '../../src/components/AppText';
import { Screen } from '../../src/components/Screen';
import { VideoCard } from '../../src/components/VideoCard';
import { useLanguage } from '../../src/context/LanguageContext';
import { playlists, youtubePlaylistUrl } from '../../src/data/playlists';
import { books } from '../../src/data/books';
import { CHANNEL_URL, FEATURED_VIDEO_ID } from '../../src/data/videos';
import {
  fetchAllChannelVideos,
  fetchLatestVideo,
  FeedVideo,
} from '../../src/services/youtubeFeed';
import { colors, radius, spacing } from '../../src/theme/colors';

type Section = 'videos' | 'books';
type VideoTab = 'playlists' | 'all';

const CHANNEL_VIDEOS_URL = 'https://www.youtube.com/@GeraSheriff/videos';

export default function LibraryScreen() {
  const { language, t } = useLanguage();
  const router = useRouter();
  const [section, setSection] = useState<Section>('videos');
  const [videoTab, setVideoTab] = useState<VideoTab>('playlists');
  const [featured, setFeatured] = useState<FeedVideo | null>(null);
  const [loadingFeatured, setLoadingFeatured] = useState(true);
  const [allVideos, setAllVideos] = useState<FeedVideo[]>([]);
  const [loadingAll, setLoadingAll] = useState(false);
  const [allError, setAllError] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      (async () => {
        try {
          const latest = await fetchLatestVideo();
          if (!cancelled) {
            setFeatured(
              latest ?? {
                youtubeId: FEATURED_VIDEO_ID,
                title: 'Gera Sheriff',
                published: '',
              }
            );
          }
        } catch {
          if (!cancelled) {
            setFeatured({
              youtubeId: FEATURED_VIDEO_ID,
              title: 'Gera Sheriff',
              published: '',
            });
          }
        } finally {
          if (!cancelled) setLoadingFeatured(false);
        }
      })();
      return () => {
        cancelled = true;
      };
    }, [])
  );
  useEffect(() => {
    if (section !== 'videos' || videoTab !== 'all' || allLoaded) return;
    let cancelled = false;
    (async () => {
      setLoadingAll(true);
      setAllError(false);
      try {
        const list = await fetchAllChannelVideos(50);
        if (!cancelled) {
          setAllVideos(list);
          setAllLoaded(true);
        }
      } catch {
        if (!cancelled) setAllError(true);
      } finally {
        if (!cancelled) setLoadingAll(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [section, videoTab, allLoaded]);

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
            {t('featuredVideo')}
          </AppText>
          {loadingFeatured ? (
            <View style={styles.loadingBox}>
              <ActivityIndicator color={colors.blueBright} />
            </View>
          ) : featured ? (
            <VideoCard
              youtubeId={featured.youtubeId}
              title={featured.title}
              badge={t('newest')}
            />
          ) : null}

          <View style={styles.subSegment}>
            <Pressable
              onPress={() => setVideoTab('playlists')}
              style={[styles.subBtn, videoTab === 'playlists' && styles.subActive]}
            >
              <AppText
                variant="caption"
                color={videoTab === 'playlists' ? colors.white : colors.textSecondary}
                style={styles.subText}
              >
                {t('playlists')}
              </AppText>
            </Pressable>
            <Pressable
              onPress={() => setVideoTab('all')}
              style={[styles.subBtn, videoTab === 'all' && styles.subActive]}
            >
              <AppText
                variant="caption"
                color={videoTab === 'all' ? colors.white : colors.textSecondary}
                style={styles.subText}
              >
                {t('allVideos')}
              </AppText>
            </Pressable>
          </View>

          {videoTab === 'playlists' ? (
            playlists.map((playlist) => {
              const title = language === 'ru' ? playlist.titleRu : playlist.titleEn;
              return (
                <Pressable
                  key={playlist.id}
                  onPress={() =>
                    router.push({
                      pathname: '/playlists/[id]',
                      params: { id: playlist.id },
                    })
                  }
                  onLongPress={() =>
                    WebBrowser.openBrowserAsync(
                      youtubePlaylistUrl(playlist.youtubePlaylistId)
                    )
                  }
                  style={({ pressed }) => [styles.playlistCard, pressed && { opacity: 0.88 }]}
                >
                  <View style={styles.emojiWrap}>
                    <AppText style={styles.emoji}>{playlist.emoji}</AppText>
                  </View>
                  <View style={{ flex: 1 }}>
                    <AppText variant="subtitle" numberOfLines={2}>
                      {title}
                    </AppText>
                    <AppText variant="caption" color={colors.blueBright}>
                      {t('openPlaylist')}
                    </AppText>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color={colors.blueBright} />
                </Pressable>
              );
            })
          ) : loadingAll ? (
            <View style={styles.loadingBox}>
              <ActivityIndicator color={colors.blueBright} />
              <AppText muted style={{ marginTop: spacing.sm }}>
                {t('videosLoading')}
              </AppText>
            </View>
          ) : allError ? (
            <View style={styles.loadingBox}>
              <AppText muted style={{ textAlign: 'center' }}>
                {t('videosLoadError')}
              </AppText>
              <Pressable
                onPress={() => WebBrowser.openBrowserAsync(CHANNEL_VIDEOS_URL)}
                style={{ marginTop: spacing.md }}
              >
                <AppText color={colors.blueBright}>{t('seeAllOnYouTube')}</AppText>
              </Pressable>
            </View>
          ) : (
            <>
              {allVideos.map((video, index) => (
                <VideoCard
                  key={video.youtubeId}
                  youtubeId={video.youtubeId}
                  title={video.title}
                  badge={index === 0 ? t('newest') : undefined}
                />
              ))}
              <Pressable
                onPress={() => WebBrowser.openBrowserAsync(CHANNEL_VIDEOS_URL)}
                style={styles.seeAllBtn}
              >
                <AppText color={colors.blueBright}>{t('seeAllOnYouTube')} →</AppText>
              </Pressable>
            </>
          )}
        </>
      ) : (
        <>
          {books.map((book) => {
            const title = language === 'ru' ? book.titleRu : book.titleEn;
            const description =
              language === 'ru' ? book.descriptionRu : book.descriptionEn;
            return (
              <View key={book.id} style={styles.bookCard}>
                <AppText variant="label" color={colors.blueBright}>
                  Gera Sheriff
                </AppText>
                <AppText variant="title" style={{ marginTop: spacing.xs }}>
                  {title}
                </AppText>
                <AppText muted style={{ marginTop: spacing.xs }}>
                  {book.author}
                </AppText>
                <AppText muted style={{ marginTop: spacing.sm }}>
                  {description}
                </AppText>
                <AppText variant="label" style={{ marginTop: spacing.md, marginBottom: spacing.sm }}>
                  {t('buyBook')}
                </AppText>
                {book.stores.map((store) => (
                  <Pressable
                    key={store.id}
                    onPress={() => WebBrowser.openBrowserAsync(store.url)}
                    style={({ pressed }) => [
                      styles.storeBtn,
                      pressed && { opacity: 0.85 },
                    ]}
                  >
                    <Ionicons name="book-outline" size={18} color={colors.blueBright} />
                    <AppText style={{ flex: 1, marginLeft: spacing.sm }}>
                      {language === 'ru' ? store.labelRu : store.labelEn}
                    </AppText>
                    <Ionicons name="open-outline" size={18} color={colors.blueBright} />
                  </Pressable>
                ))}
              </View>
            );
          })}
        </>
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
  subSegment: {
    flexDirection: 'row',
    backgroundColor: colors.blackSoft,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 3,
    marginBottom: spacing.md,
    marginTop: spacing.sm,
  },
  subBtn: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: radius.full,
  },
  subActive: {
    backgroundColor: colors.blueMuted,
  },
  subText: {
    fontWeight: '700',
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
  loadingBox: {
    minHeight: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
    paddingHorizontal: spacing.md,
  },
  playlistCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  emojiWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.blueGlow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 22,
  },
  seeAllBtn: {
    alignItems: 'center',
    paddingVertical: spacing.md,
    marginBottom: spacing.lg,
  },
  bookCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  storeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.blackSoft,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
});
