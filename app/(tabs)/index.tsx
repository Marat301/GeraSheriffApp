import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { AppText } from '../../src/components/AppText';
import { CategoryButton } from '../../src/components/CategoryButton';
import { Screen } from '../../src/components/Screen';
import { useLanguage } from '../../src/context/LanguageContext';
import { colors, spacing } from '../../src/theme/colors';

export default function HomeScreen() {
  const { t } = useLanguage();
  const router = useRouter();

  return (
    <Screen showTutorial>
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <AppText variant="label" color={colors.blueBright}>
            {t('regionLabel')}
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

      <AppText variant="label" style={styles.sectionLabel}>
        {t('homeNow')}
      </AppText>
      <CategoryButton
        wide
        title={t('emergency')}
        icon="warning"
        onPress={() => router.push('/(tabs)/emergency')}
        accent={colors.danger}
      />
      <CategoryButton
        wide
        title={t('emergencyLocations')}
        icon="location"
        onPress={() => router.push('/emergency-locations' as never)}
        accent={colors.danger}
      />
      <CategoryButton
        wide
        title={t('policeCards')}
        icon="chatbubbles"
        onPress={() => router.push('/police-cards')}
        accent={colors.blueBright}
      />
      <CategoryButton
        wide
        title={t('translator')}
        icon="language"
        onPress={() => router.push('/translator' as never)}
        accent={colors.blueBright}
      />

      <AppText variant="label" style={styles.sectionLabel}>
        {t('homeLearn')}
      </AppText>
      <View style={styles.grid}>
        <CategoryButton
          title={t('youtubeLibrary')}
          icon="logo-youtube"
          onPress={() => router.push('/(tabs)/library')}
        />
        <CategoryButton
          title={t('consultations')}
          icon="mail"
          onPress={() => router.push('/consultations' as never)}
        />
        <CategoryButton
          title={t('officialLinks')}
          icon="link"
          onPress={() => router.push('/official-links' as never)}
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
      </View>

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
  disclaimer: {
    marginTop: spacing.lg,
    textAlign: 'center',
  },
});
