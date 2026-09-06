import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { youtubeWatchUrl } from '../data/videos';
import { colors, radius, spacing } from '../theme/colors';
import { AppText } from './AppText';

type Props = {
  youtubeId: string;
  title: string;
  badge?: string;
};

export function VideoCard({ youtubeId, title, badge }: Props) {
  const { t } = useLanguage();
  const thumb = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      onPress={() => WebBrowser.openBrowserAsync(youtubeWatchUrl(youtubeId))}
    >
      <View style={styles.thumbWrap}>
        <Image source={{ uri: thumb }} style={styles.thumb} />
        <View style={styles.play}>
          <Ionicons name="play" size={20} color={colors.white} />
        </View>
        {badge ? (
          <View style={styles.badge}>
            <AppText variant="caption" color={colors.white} style={styles.badgeText}>
              {badge}
            </AppText>
          </View>
        ) : null}
      </View>
      <View style={styles.meta}>
        <AppText variant="subtitle" numberOfLines={3}>
          {title}
        </AppText>
        <AppText variant="caption">{t('watch')}</AppText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    overflow: 'hidden',
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  pressed: {
    opacity: 0.9,
  },
  thumbWrap: {
    height: 170,
    backgroundColor: colors.blackSoft,
  },
  thumb: {
    width: '100%',
    height: '100%',
  },
  play: {
    position: 'absolute',
    alignSelf: 'center',
    top: '40%',
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    left: '50%',
    marginLeft: -24,
  },
  badge: {
    position: 'absolute',
    top: spacing.sm,
    left: spacing.sm,
    backgroundColor: colors.danger,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: radius.full,
  },
  badgeText: {
    fontWeight: '800',
    letterSpacing: 0.4,
  },
  meta: {
    padding: spacing.md,
    gap: 4,
  },
});
