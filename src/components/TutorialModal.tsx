import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLanguage } from '../context/LanguageContext';
import { TranslationKey } from '../i18n/translations';
import { colors, radius, spacing } from '../theme/colors';
import { AppText } from './AppText';

type Slide = {
  icon: keyof typeof Ionicons.glyphMap;
  /** Use the same label keys as the real screens / home tiles */
  titleKey: TranslationKey;
  bodyKey: TranslationKey;
};

const SLIDES: Slide[] = [
  { icon: 'home', titleKey: 'home', bodyKey: 'tutorialHomeBody' },
  { icon: 'library', titleKey: 'catalogue', bodyKey: 'tutorialLibraryBody' },
  { icon: 'warning', titleKey: 'emergency', bodyKey: 'tutorialEmergencyBody' },
  { icon: 'chatbubbles', titleKey: 'policeCards', bodyKey: 'tutorialPoliceBody' },
  { icon: 'book', titleKey: 'glossary', bodyKey: 'tutorialGlossaryBody' },
  { icon: 'scale', titleKey: 'lawLibrary', bodyKey: 'tutorialLawLibraryBody' },
  { icon: 'git-commit', titleKey: 'caseRoadmap', bodyKey: 'tutorialCaseRoadmapBody' },
  { icon: 'settings-outline', titleKey: 'profile', bodyKey: 'tutorialProfileBody' },
];

type Props = {
  visible: boolean;
  onClose: () => void;
};

export function TutorialModal({ visible, onClose }: Props) {
  const { t } = useLanguage();
  const insets = useSafeAreaInsets();
  const [index, setIndex] = useState(0);
  const [pageWidth, setPageWidth] = useState(
    Math.max(0, Dimensions.get('window').width - spacing.md * 2)
  );
  const listRef = useRef<FlatList<Slide>>(null);

  const onViewableItemsChanged = useRef(
    (info: { viewableItems: Array<{ index?: number | null }> }) => {
      const idx = info.viewableItems[0]?.index;
      if (typeof idx === 'number') setIndex(idx);
    }
  ).current;

  const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 60 }).current;

  useEffect(() => {
    if (!visible) return;
    setIndex(0);
    requestAnimationFrame(() => {
      listRef.current?.scrollToOffset({ offset: 0, animated: false });
    });
  }, [visible]);

  const lastIndex = SLIDES.length - 1;
  const swipeHint =
    index <= 0
      ? t('tutorialSwipeNext')
      : index >= lastIndex
        ? t('tutorialSwipeBack')
        : t('tutorialSwipeBoth');

  return (
    <Modal visible={visible} animationType="fade" transparent onRequestClose={onClose}>
      <View style={[styles.backdrop, { paddingTop: insets.top + 8, paddingBottom: insets.bottom + 16 }]}>
        <View style={styles.sheet}>
          <View style={styles.topBar}>
            <Pressable onPress={onClose} style={styles.closeBtn} hitSlop={12}>
              <Ionicons name="close" size={22} color={colors.white} />
            </Pressable>
            <AppText variant="label" color={colors.blueBright} style={styles.topLabel}>
              {t('tutorial')}
            </AppText>
            <View style={{ width: 36 }} />
          </View>

          <FlatList
            ref={listRef}
            data={SLIDES}
            keyExtractor={(item) => item.bodyKey}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onViewableItemsChanged={onViewableItemsChanged as never}
            viewabilityConfig={viewabilityConfig}
            extraData={pageWidth}
            onLayout={(e) => {
              const w = Math.round(e.nativeEvent.layout.width);
              if (w > 0 && w !== pageWidth) setPageWidth(w);
            }}
            getItemLayout={(_, i) => ({
              length: pageWidth,
              offset: pageWidth * i,
              index: i,
            })}
            renderItem={({ item }) => (
              <View style={[styles.page, { width: pageWidth }]}>
                <View style={styles.pageInner}>
                  <View style={styles.iconCircle}>
                    <Ionicons name={item.icon} size={32} color={colors.blueBright} />
                  </View>
                  <AppText variant="title" style={styles.pageTitle}>
                    {t(item.titleKey)}
                  </AppText>
                  <AppText muted style={styles.pageBody}>
                    {t(item.bodyKey)}
                  </AppText>
                </View>
              </View>
            )}
          />

          <View style={styles.dots}>
            {SLIDES.map((_, i) => (
              <View key={i} style={[styles.dot, i === index && styles.dotActive]} />
            ))}
          </View>

          <AppText variant="caption" style={styles.hint}>
            {swipeHint}
          </AppText>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: colors.overlay,
    justifyContent: 'center',
    paddingHorizontal: spacing.md,
  },
  sheet: {
    backgroundColor: colors.blackSoft,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
    maxHeight: '85%',
    paddingBottom: spacing.md,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
  },
  topLabel: {
    textAlign: 'center',
    flex: 1,
  },
  closeBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  page: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 280,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
  },
  pageInner: {
    width: '100%',
    maxWidth: 320,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.blueGlow,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: colors.blueMuted,
  },
  pageTitle: {
    textAlign: 'center',
    width: '100%',
    marginBottom: spacing.md,
  },
  pageBody: {
    textAlign: 'center',
    width: '100%',
    lineHeight: 22,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    marginTop: spacing.sm,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.border,
  },
  dotActive: {
    backgroundColor: colors.blueBright,
    width: 18,
  },
  hint: {
    textAlign: 'center',
    width: '100%',
    marginTop: spacing.sm,
    paddingHorizontal: spacing.md,
  },
});
