import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AppText } from '../../src/components/AppText';
import { Screen } from '../../src/components/Screen';
import { VideoCard } from '../../src/components/VideoCard';
import { useLanguage } from '../../src/context/LanguageContext';
import {
  bookCategory,
  bookCoverSource,
  bookDescription,
  bookPreviewSource,
  books,
  bookStoreLabel,
  bookTitle,
  getBookPreviewPages,
} from '../../src/data/books';
import { BookItem } from '../../src/types';
import {
  playlistTitle,
  playlists,
  youtubePlaylistUrl,
} from '../../src/data/playlists';
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
  const insets = useSafeAreaInsets();
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const [section, setSection] = useState<Section>('videos');
  const [videoTab, setVideoTab] = useState<VideoTab>('playlists');
  const [featured, setFeatured] = useState<FeedVideo | null>(null);
  const [loadingFeatured, setLoadingFeatured] = useState(true);
  const [allVideos, setAllVideos] = useState<FeedVideo[]>([]);
  const [loadingAll, setLoadingAll] = useState(false);
  const [allError, setAllError] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);
  const [previewBook, setPreviewBook] = useState<BookItem | null>(null);
  const [previewPage, setPreviewPage] = useState(0);
  const [previewWidth, setPreviewWidth] = useState(Math.max(0, windowWidth - spacing.md * 2));
  const previewListRef = useRef<FlatList<string | number>>(null);
  const onPreviewPagesChanged = useRef(
    (info: { viewableItems: Array<{ index?: number | null }> }) => {
      const idx = info.viewableItems[0]?.index;
      if (typeof idx === 'number') setPreviewPage(idx);
    }
  ).current;
  const previewViewability = useRef({ viewAreaCoveragePercentThreshold: 60 }).current;

  useEffect(() => {
    if (!previewBook) return;
    setPreviewPage(0);
    requestAnimationFrame(() => {
      previewListRef.current?.scrollToOffset({ offset: 0, animated: false });
    });
  }, [previewBook]);

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
              const title = playlistTitle(playlist, language);
              return (
                <Pressable
                  key={playlist.id}
                  onPress={() =>
                    void WebBrowser.openBrowserAsync(
                      youtubePlaylistUrl(playlist.youtubePlaylistId)
                    )
                  }
                  style={({ pressed }) => [styles.playlistCard, pressed && { opacity: 0.88 }]}
                  accessibilityRole="link"
                  accessibilityLabel={`${title}. ${t('openYouTube')}`}
                >
                  <View style={styles.emojiWrap}>
                    <AppText style={styles.emoji}>{playlist.emoji}</AppText>
                  </View>
                  <View style={{ flex: 1 }}>
                    <AppText variant="subtitle" numberOfLines={2}>
                      {title}
                    </AppText>
                    <AppText variant="caption" color={colors.blueBright}>
                      {t('openYouTube')}
                    </AppText>
                  </View>
                  <Ionicons name="logo-youtube" size={20} color={colors.danger} />
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
          <AppText muted style={{ marginBottom: spacing.md }}>
            {t('bookPreviewHint')}
          </AppText>
          {books.map((book) => {
            const title = bookTitle(book, language);
            const description = bookDescription(book, language);
            const category = bookCategory(book, language);
            const hasPreview = getBookPreviewPages(book).length > 0;
            return (
              <View key={book.id} style={styles.bookCard}>
                <Pressable
                  disabled={!hasPreview}
                  onPress={() => setPreviewBook(book)}
                  style={({ pressed }) => [
                    styles.coverWrap,
                    pressed && hasPreview && { opacity: 0.9 },
                  ]}
                  accessibilityRole={hasPreview ? 'button' : undefined}
                  accessibilityLabel={
                    hasPreview ? `${title}. ${t('bookPreview')}` : title
                  }
                >
                  <Image
                    source={bookCoverSource(book)}
                    style={styles.cover}
                    resizeMode="cover"
                  />
                  {hasPreview ? (
                    <View style={styles.previewBadge}>
                      <Ionicons name="book-outline" size={14} color={colors.white} />
                      <AppText variant="caption" color={colors.white}>
                        {t('bookPreview')}
                      </AppText>
                    </View>
                  ) : null}
                </Pressable>
                <AppText variant="caption" color={colors.textMuted} style={styles.bookCategory}>
                  {category.toUpperCase()}
                </AppText>
                <AppText variant="title" style={{ marginTop: spacing.xs }}>
                  {title}
                </AppText>
                <AppText muted style={{ marginTop: spacing.xs }}>
                  {description}
                </AppText>
                <View style={styles.storeList}>
                  {book.stores.map((store) => {
                    const ready = Boolean(store.url);
                    const isAmazon = store.id === 'amazon';
                    return (
                      <Pressable
                        key={store.id}
                        disabled={!ready}
                        onPress={() => {
                          if (store.url) void WebBrowser.openBrowserAsync(store.url);
                        }}
                        style={({ pressed }) => [
                          styles.storeBtn,
                          isAmazon ? styles.storeBtnPrimary : styles.storeBtnSecondary,
                          !ready && styles.storeBtnDisabled,
                          pressed && ready && { opacity: 0.88 },
                        ]}
                      >
                        <View style={styles.storeBtnText}>
                          <AppText
                            style={{ flex: 1 }}
                            color={isAmazon ? colors.white : colors.textPrimary}
                          >
                            {bookStoreLabel(store, language)}
                          </AppText>
                          {!ready ? (
                            <AppText variant="caption" color={colors.textMuted}>
                              {t('comingSoon')}
                            </AppText>
                          ) : null}
                        </View>
                        <Ionicons
                          name="open-outline"
                          size={18}
                          color={
                            !ready
                              ? colors.textMuted
                              : isAmazon
                                ? colors.white
                                : colors.blueBright
                          }
                        />
                      </Pressable>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </>
      )}

      <Modal
        visible={previewBook != null}
        animationType="fade"
        transparent
        statusBarTranslucent
        onRequestClose={() => setPreviewBook(null)}
      >
        <View style={styles.previewOverlay}>
          <Pressable
            onPress={() => setPreviewBook(null)}
            hitSlop={16}
            style={[styles.previewClose, { top: insets.top + 10 }]}
            accessibilityRole="button"
            accessibilityLabel={t('close')}
          >
            <Ionicons name="close" size={24} color={colors.white} />
          </Pressable>

          <FlatList
            ref={previewListRef}
            style={styles.previewPager}
            data={previewBook ? getBookPreviewPages(previewBook) : []}
            keyExtractor={(_, index) => `${previewBook?.id ?? 'book'}-page-${index}`}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onViewableItemsChanged={onPreviewPagesChanged as never}
            viewabilityConfig={previewViewability}
            extraData={`${previewWidth}-${windowHeight}`}
            onLayout={(e) => {
              const w = Math.round(e.nativeEvent.layout.width);
              if (w > 0 && w !== previewWidth) setPreviewWidth(w);
            }}
            getItemLayout={(_, index) => ({
              length: previewWidth || windowWidth,
              offset: (previewWidth || windowWidth) * index,
              index,
            })}
            renderItem={({ item, index }) => {
              const slideW = previewWidth || windowWidth;
              const maxW = slideW - 16;
              const maxH = windowHeight - insets.top - insets.bottom - 56;
              const isCover = index === 0;
              const aspect = isCover ? 1.5 : 1.42;
              let pageWidth = maxW;
              let pageHeight = pageWidth * aspect;
              if (pageHeight > maxH) {
                pageHeight = maxH;
                pageWidth = pageHeight / aspect;
              }
              return (
                <View style={[styles.previewSlide, { width: slideW, height: windowHeight }]}>
                  <Image
                    source={bookPreviewSource(item)}
                    style={[
                      isCover ? styles.previewCoverImage : styles.previewPageImage,
                      { width: pageWidth, height: pageHeight },
                    ]}
                    resizeMode="contain"
                  />
                </View>
              );
            }}
          />

          {previewBook && getBookPreviewPages(previewBook).length > 1 ? (
            <View style={[styles.previewFooter, { bottom: insets.bottom + 14 }]}>
              <View style={styles.previewDots}>
                {getBookPreviewPages(previewBook).map((_, i) => (
                  <View
                    key={`dot-${i}`}
                    style={[styles.previewDot, i === previewPage && styles.previewDotActive]}
                  />
                ))}
              </View>
              <AppText variant="caption" style={styles.previewHint}>
                {previewPage <= 0
                  ? t('tutorialSwipeNext')
                  : previewPage >= getBookPreviewPages(previewBook).length - 1
                    ? t('tutorialSwipeBack')
                    : t('tutorialSwipeBoth')}
              </AppText>
            </View>
          ) : null}
        </View>
      </Modal>
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
  coverWrap: {
    alignSelf: 'center',
    width: 160,
    height: 220,
    borderRadius: radius.md,
    overflow: 'hidden',
    backgroundColor: colors.blackSoft,
    marginBottom: spacing.md,
  },
  cover: {
    width: '100%',
    height: '100%',
  },
  previewBadge: {
    position: 'absolute',
    left: 8,
    right: 8,
    bottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    backgroundColor: 'rgba(0,0,0,0.72)',
    borderRadius: radius.sm,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  previewOverlay: {
    flex: 1,
    backgroundColor: '#000',
  },
  previewClose: {
    position: 'absolute',
    right: 16,
    zIndex: 2,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.14)',
  },
  previewPager: {
    flex: 1,
  },
  previewSlide: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewCoverImage: {
    borderRadius: 4,
  },
  previewPageImage: {
    backgroundColor: colors.white,
    borderRadius: 2,
  },
  previewFooter: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    gap: 8,
  },
  previewDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  previewDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.35)',
  },
  previewDotActive: {
    backgroundColor: colors.white,
    width: 18,
  },
  previewHint: {
    textAlign: 'center',
    color: 'rgba(255,255,255,0.65)',
  },
  bookCategory: {
    letterSpacing: 0.6,
    fontWeight: '700',
  },
  storeList: {
    marginTop: spacing.md,
    gap: spacing.sm,
  },
  storeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    borderRadius: radius.md,
    borderWidth: 1,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
  },
  storeBtnPrimary: {
    backgroundColor: colors.blackSoft,
    borderColor: colors.border,
  },
  storeBtnSecondary: {
    backgroundColor: colors.surfaceElevated,
    borderColor: colors.border,
  },
  storeBtnDisabled: {
    opacity: 0.55,
  },
  storeBtnText: {
    flex: 1,
    gap: 2,
  },
});
