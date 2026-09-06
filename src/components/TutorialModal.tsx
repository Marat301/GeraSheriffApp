import { Ionicons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  View,
  ViewToken,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLanguage } from '../context/LanguageContext';
import { TranslationKey } from '../i18n/translations';
import { colors, radius, spacing } from '../theme/colors';
import { AppText } from './AppText';

type Slide = {
  icon: keyof typeof Ionicons.glyphMap;
  titleKey: TranslationKey;
  bodyKey: TranslationKey;
};

const SLIDES: Slide[] = [
  { icon: 'home', titleKey: 'tutorialHomeTitle', bodyKey: 'tutorialHomeBody' },
  { icon: 'library', titleKey: 'tutorialLibraryTitle', bodyKey: 'tutorialLibraryBody' },
  { icon: 'warning', titleKey: 'tutorialEmergencyTitle', bodyKey: 'tutorialEmergencyBody' },
  { icon: 'chatbubbles', titleKey: 'tutorialPoliceTitle', bodyKey: 'tutorialPoliceBody' },
  { icon: 'newspaper', titleKey: 'tutorialArticlesTitle', bodyKey: 'tutorialArticlesBody' },
  { icon: 'book', titleKey: 'tutorialGlossaryTitle', bodyKey: 'tutorialGlossaryBody' },
  { icon: 'scale', titleKey: 'tutorialLawLibraryTitle', bodyKey: 'tutorialLawLibraryBody' },
  { icon: 'git-commit', titleKey: 'tutorialCaseRoadmapTitle', bodyKey: 'tutorialCaseRoadmapBody' },
  { icon: 'settings-outline', titleKey: 'tutorialProfileTitle', bodyKey: 'tutorialProfileBody' },
];

type Props = {
  visible: boolean;
  onClose: () => void;
};

export function TutorialModal({ visible, onClose }: Props) {
  const { t } = useLanguage();
  const insets = useSafeAreaInsets();
  const [index, setIndex] = useState(0);
  const [pageWidth, setPageWidth] = useState(Dimensions.get('window').width - 48);

  const onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems[0]?.index != null) setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 60 }).current;

  return (
    <Modal visible={visible} animationType="fade" transparent onRequestClose={onClose}>
      <View style={[styles.backdrop, { paddingTop: insets.top + 8, paddingBottom: insets.bottom + 16 }]}>
        <View
          style={styles.sheet}
          onLayout={(e) => {
            const w = e.nativeEvent.layout.width;
            if (w > 0) setPageWidth(w);
          }}
        >
          <View style={styles.topBar}>
            <Pressable onPress={onClose} style={styles.closeBtn} hitSlop={12}>
              <Ionicons name="close" size={22} color={colors.white} />
            </Pressable>
            <AppText variant="label" color={colors.blueBright}>
              {t('tutorial')}
            </AppText>
            <View style={{ width: 36 }} />
          </View>

          <FlatList
            data={SLIDES}
            keyExtractor={(item) => item.titleKey}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
            renderItem={({ item }) => (
              <View style={[styles.page, { width: pageWidth }]}>
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
            )}
          />

          <View style={styles.dots}>
            {SLIDES.map((_, i) => (
              <View key={i} style={[styles.dot, i === index && styles.dotActive]} />
            ))}
          </View>

          <AppText variant="caption" style={styles.hint}>
            {t('tutorialSwipe')}
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
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    alignItems: 'center',
    minHeight: 260,
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
    marginBottom: spacing.md,
  },
  pageBody: {
    textAlign: 'center',
    lineHeight: 22,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
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
    marginTop: spacing.sm,
  },
});
