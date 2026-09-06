import { Ionicons } from '@expo/vector-icons';
import { Stack, useLocalSearchParams } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import React, { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, View } from 'react-native';
import { AppText } from '../../src/components/AppText';
import { Screen } from '../../src/components/Screen';
import { StackBackButton } from '../../src/components/StackBackButton';
import { VideoCard } from '../../src/components/VideoCard';
import { useLanguage } from '../../src/context/LanguageContext';
import { getPlaylist, youtubePlaylistUrl } from '../../src/data/playlists';
import { fetchPlaylistVideos, FeedVideo } from '../../src/services/youtubeFeed';
import { colors, radius, spacing } from '../../src/theme/colors';

export default function PlaylistScreen() {
  const { id } = useLocalSearchParams<{ id?: string | string[] }>();
  const playlistId = Array.isArray(id) ? id[0] : id;
  const { language, t } = useLanguage();
  const playlist = useMemo(
    () => (playlistId ? getPlaylist(playlistId) : undefined),
    [playlistId]
  );

  const [videos, setVideos] = useState<FeedVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const title = playlist
    ? `${playlist.emoji} ${language === 'ru' ? playlist.titleRu : playlist.titleEn}`
    : t('playlists');

  useEffect(() => {
    if (!playlist) return;
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const list = await fetchPlaylistVideos(playlist.youtubePlaylistId);
        if (!cancelled) setVideos(list);
      } catch {
        if (!cancelled) setError('load-failed');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [playlist?.youtubePlaylistId]);

  if (!playlist) {
    return (
      <Screen>
        <Stack.Screen
          options={{ title: t('playlists'), headerLeft: () => <StackBackButton /> }}
        />
        <AppText>{t('emptySearch')}</AppText>
      </Screen>
    );
  }

  return (
    <Screen>
      <Stack.Screen options={{ title, headerLeft: () => <StackBackButton /> }} />

      <Pressable
        onPress={() =>
          WebBrowser.openBrowserAsync(youtubePlaylistUrl(playlist.youtubePlaylistId))
        }
        style={styles.openYt}
      >
        <Ionicons name="logo-youtube" size={20} color={colors.danger} />
        <AppText style={{ flex: 1, marginLeft: spacing.sm }}>{t('openYouTube')}</AppText>
        <Ionicons name="open-outline" size={18} color={colors.blueBright} />
      </Pressable>

      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator color={colors.blueBright} />
          <AppText muted style={{ marginTop: spacing.sm }}>
            {t('playlistLoading')}
          </AppText>
        </View>
      ) : error ? (
        <View style={styles.center}>
          <AppText muted>{t('playlistLoadError')}</AppText>
          <Pressable
            onPress={() =>
              WebBrowser.openBrowserAsync(youtubePlaylistUrl(playlist.youtubePlaylistId))
            }
            style={{ marginTop: spacing.md }}
          >
            <AppText color={colors.blueBright}>{t('openYouTube')}</AppText>
          </Pressable>
        </View>
      ) : videos.length === 0 ? (
        <AppText muted>{t('emptySearch')}</AppText>
      ) : (
        videos.map((video) => (
          <VideoCard key={video.youtubeId} youtubeId={video.youtubeId} title={video.title} />
        ))
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  openYt: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  center: {
    paddingVertical: spacing.xl,
    alignItems: 'center',
  },
});
