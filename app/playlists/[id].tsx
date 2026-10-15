import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import React, { useEffect, useMemo } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { AppText } from '../../src/components/AppText';
import { Screen } from '../../src/components/Screen';
import { StackBackButton } from '../../src/components/StackBackButton';
import { useLanguage } from '../../src/context/LanguageContext';
import { getPlaylist, youtubePlaylistUrl } from '../../src/data/playlists';
import { colors, spacing } from '../../src/theme/colors';

/**
 * Playlist Atom feeds are often unavailable (404). Open the playlist on YouTube
 * instead of trying to render an in-app video list.
 */
export default function PlaylistScreen() {
  const { id } = useLocalSearchParams<{ id?: string | string[] }>();
  const playlistId = Array.isArray(id) ? id[0] : id;
  const { t } = useLanguage();
  const router = useRouter();
  const playlist = useMemo(
    () => (playlistId ? getPlaylist(playlistId) : undefined),
    [playlistId]
  );

  useEffect(() => {
    if (!playlist) return;
    let cancelled = false;
    void (async () => {
      await WebBrowser.openBrowserAsync(youtubePlaylistUrl(playlist.youtubePlaylistId));
      if (!cancelled) {
        if (router.canGoBack()) router.back();
        else router.replace('/(tabs)/library');
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [playlist, router]);

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
      <Stack.Screen
        options={{ title: t('playlists'), headerLeft: () => <StackBackButton /> }}
      />
      <View style={{ paddingVertical: spacing.xl, alignItems: 'center' }}>
        <ActivityIndicator color={colors.blueBright} />
        <AppText muted style={{ marginTop: spacing.sm }}>
          {t('openYouTube')}
        </AppText>
      </View>
    </Screen>
  );
}
