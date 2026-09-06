import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { AppText } from '../../src/components/AppText';
import { Screen } from '../../src/components/Screen';
import { StackBackButton } from '../../src/components/StackBackButton';
import { useLanguage } from '../../src/context/LanguageContext';
import {
  caseRoadmapSteps,
  CLERK_OF_COURTS_URL,
  MY_FL_COURT_ACCESS_URL,
} from '../../src/data/caseRoadmap';
import { glossaryTerms } from '../../src/data/glossary';
import { colors, radius, spacing } from '../../src/theme/colors';

export default function CaseRoadmapScreen() {
  const { language, t } = useLanguage();
  const router = useRouter();

  return (
    <Screen>
      <Stack.Screen
        options={{
          title: t('caseRoadmap'),
          headerLeft: () => <StackBackButton />,
        }}
      />

      <AppText muted style={{ marginBottom: spacing.md }}>
        {t('caseRoadmapIntro')}
      </AppText>

      <Pressable
        onPress={() =>
          router.push({
            pathname: '/emergency-locations/[category]',
            params: { category: 'clerkOfCourts' },
          } as never)
        }
        style={({ pressed }) => [styles.linkCard, pressed && { opacity: 0.9 }]}
      >
        <View style={styles.linkIcon}>
          <Ionicons name="business" size={22} color={colors.white} />
        </View>
        <View style={{ flex: 1 }}>
          <AppText variant="subtitle">{t('clerkOfCourts')}</AppText>
          <AppText muted style={{ marginTop: 2 }}>
            {t('clerkOfCourtsNearby')}
          </AppText>
        </View>
        <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
      </Pressable>

      <Pressable
        onPress={() => WebBrowser.openBrowserAsync(CLERK_OF_COURTS_URL)}
        style={({ pressed }) => [styles.linkCardAlt, pressed && { opacity: 0.9 }]}
      >
        <Ionicons name="open-outline" size={20} color={colors.blueBright} />
        <AppText color={colors.blueBright} style={{ flex: 1, marginLeft: spacing.sm }}>
          {t('clerkOfCourtsWebsite')}
        </AppText>
        <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
      </Pressable>

      <Pressable
        onPress={() => WebBrowser.openBrowserAsync(MY_FL_COURT_ACCESS_URL)}
        style={({ pressed }) => [styles.linkCardAlt, pressed && { opacity: 0.9 }]}
      >
        <Ionicons name="search" size={20} color={colors.blueBright} />
        <AppText color={colors.blueBright} style={{ flex: 1, marginLeft: spacing.sm }}>
          {t('myFlCourtAccess')}
        </AppText>
        <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
      </Pressable>

      <AppText variant="label" style={{ marginTop: spacing.lg, marginBottom: spacing.xs }}>
        {t('caseRoadmapFlow')}
      </AppText>
      <AppText muted style={{ marginBottom: spacing.md }}>
        {t('caseRoadmapTapHint')}
      </AppText>

      <View style={styles.flow}>
        {caseRoadmapSteps.map((step, index) => {
          const label = language === 'ru' ? step.labelRu : step.labelEn;
          const glossary = glossaryTerms.find((g) => g.id === step.glossaryId);
          const definition = glossary
            ? language === 'ru'
              ? glossary.definitionRu
              : glossary.definitionEn
            : '';
          const isLast = index === caseRoadmapSteps.length - 1;
          return (
            <View key={step.id} style={styles.stepBlock}>
              <Pressable
                onPress={() =>
                  router.push({
                    pathname: '/glossary',
                    params: { term: step.glossaryId },
                  } as never)
                }
                style={({ pressed }) => [styles.stepBox, pressed && { opacity: 0.9 }]}
              >
                <View style={styles.stepNum}>
                  <AppText style={styles.stepNumText}>{index + 1}</AppText>
                </View>
                <View style={styles.stepText}>
                  <AppText variant="subtitle">{label}</AppText>
                  {definition ? (
                    <AppText muted style={styles.stepSubtext}>
                      {definition}
                    </AppText>
                  ) : null}
                </View>
              </Pressable>
              {!isLast ? (
                <View style={styles.arrowWrap}>
                  <View style={styles.arrowStem} />
                  <View style={styles.arrowHead}>
                    <Ionicons name="caret-down" size={18} color={colors.white} />
                  </View>
                </View>
              ) : null}
            </View>
          );
        })}
      </View>

      <AppText variant="caption" style={{ marginTop: spacing.lg, marginBottom: spacing.lg }}>
        {t('disclaimer')}
      </AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  linkCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.blue,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  linkCardAlt: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  linkIcon: {
    width: 42,
    height: 42,
    borderRadius: radius.sm,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flow: {
    alignItems: 'center',
  },
  stepBlock: {
    width: '100%',
    alignItems: 'center',
  },
  stepBox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 2,
    borderColor: colors.blue,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
  },
  stepNum: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNumText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '800',
    lineHeight: 24,
    includeFontPadding: false,
  },
  stepText: {
    flex: 1,
    gap: spacing.xs,
    paddingTop: 6,
  },
  stepSubtext: {
    fontSize: 13,
    lineHeight: 19,
    color: colors.textMuted,
  },
  arrowWrap: {
    alignItems: 'center',
    paddingVertical: 2,
  },
  arrowStem: {
    width: 3,
    height: 18,
    backgroundColor: colors.blueBright,
    borderRadius: 2,
  },
  arrowHead: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -2,
  },
});
