import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppText } from '../../../src/components/AppText';
import { Screen } from '../../../src/components/Screen';
import { StackBackButton } from '../../../src/components/StackBackButton';
import { useLanguage } from '../../../src/context/LanguageContext';
import { findStatuteByCode } from '../../../src/data/criminalStatutes';
import { localizeInterpreterMentions } from '../../../src/i18n/contentLocale';
import { colors, radius, spacing } from '../../../src/theme/colors';

function Section({
  label,
  body,
}: {
  label: string;
  body: string;
}) {
  return (
    <View style={styles.section}>
      <AppText variant="label" color={colors.blueBright} style={{ marginBottom: spacing.sm }}>
        {label}
      </AppText>
      <AppText style={styles.body}>{body}</AppText>
    </View>
  );
}

export default function StatuteDetailScreen() {
  const { code: codeParam } = useLocalSearchParams<{ code: string }>();
  const code = Array.isArray(codeParam) ? codeParam[0] : codeParam;
  const { language, preferredLanguage, t } = useLanguage();
  const statute = findStatuteByCode(code ?? '');

  if (!statute) {
    return (
      <Screen>
        <Stack.Screen
          options={{
            title: t('statuteLookup'),
            headerLeft: () => <StackBackButton />,
          }}
        />
        <AppText>{t('statuteNotFound')}</AppText>
      </Screen>
    );
  }

  const title = language === 'ru' ? statute.titleRu : statute.titleEn;
  const level = language === 'ru' ? statute.levelRu : statute.levelEn;
  const localize = (text: string) => localizeInterpreterMentions(text, preferredLanguage);

  return (
    <Screen>
      <Stack.Screen
        options={{
          title: `§ ${statute.code}`,
          headerLeft: () => <StackBackButton />,
        }}
      />

      <View style={styles.header}>
        <AppText variant="caption" color={colors.blueBright}>
          Florida Statutes
        </AppText>
        <AppText variant="hero" style={{ marginTop: spacing.xs }}>
          {statute.code}
        </AppText>
        <AppText variant="title" style={{ marginTop: spacing.sm }}>
          {title}
        </AppText>
        <AppText muted style={{ marginTop: spacing.sm }}>
          {level}
        </AppText>
      </View>

      <Section
        label={t('statuteExplanation')}
        body={localize(language === 'ru' ? statute.explanationRu : statute.explanationEn)}
      />
      <Section
        label={t('statutePenalties')}
        body={localize(language === 'ru' ? statute.penaltiesRu : statute.penaltiesEn)}
      />
      <Section
        label={t('statuteProcess')}
        body={localize(language === 'ru' ? statute.processRu : statute.processEn)}
      />
      <Section
        label={t('statuteObservations')}
        body={localize(language === 'ru' ? statute.observationsRu : statute.observationsEn)}
      />

      <AppText variant="caption" style={{ marginTop: spacing.md, marginBottom: spacing.lg }}>
        {t('disclaimer')}
      </AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  section: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  body: {
    lineHeight: 24,
  },
});
