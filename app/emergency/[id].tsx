import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Linking, Pressable, StyleSheet, View } from 'react-native';
import { AppText } from '../../src/components/AppText';
import { Button } from '../../src/components/Button';
import { Screen } from '../../src/components/Screen';
import { SpeakCircleButton } from '../../src/components/SpeakCircleButton';
import { StackBackButton } from '../../src/components/StackBackButton';
import { useLanguage } from '../../src/context/LanguageContext';
import { emergencyGuides } from '../../src/data/emergency';
import { policeCards } from '../../src/data/policeCards';
import { interpreterPhraseEn, localizeInterpreterMentions } from '../../src/i18n/contentLocale';
import { colors, radius, spacing } from '../../src/theme/colors';
import { PreferredLanguage } from '../../src/types';
import { stopSpeaking } from '../../src/utils/speak';

type SpeakMap = Record<number, { phraseEn: string }>;

/** Police stop: steps 4 (silent), 5 (no search), 6 (interpreter) */
function policeStopSpeak(preferredLanguage: PreferredLanguage): SpeakMap {
  return {
    3: { phraseEn: policeCards.find((c) => c.id === 'pc2')!.phraseEn },
    4: { phraseEn: policeCards.find((c) => c.id === 'pc3')!.phraseEn },
    5: { phraseEn: interpreterPhraseEn(preferredLanguage) },
  };
}

/** Detention: steps 3 (lawyer), 5 (no search), 6 (interpreter) */
function policeDetentionSpeak(preferredLanguage: PreferredLanguage): SpeakMap {
  return {
    2: { phraseEn: policeCards.find((c) => c.id === 'pc1')!.phraseEn },
    4: { phraseEn: policeCards.find((c) => c.id === 'pc3')!.phraseEn },
    5: { phraseEn: interpreterPhraseEn(preferredLanguage) },
  };
}

function speakMapForGuide(
  guideId: string,
  preferredLanguage: PreferredLanguage
): SpeakMap {
  if (guideId === 'eg1') return policeStopSpeak(preferredLanguage);
  if (guideId === 'eg11') return policeDetentionSpeak(preferredLanguage);
  return {};
}

/** Step index → dialable number shown under that step */
type StepCallMap = Record<number, { label: string; tel: string }>;

function stepCallMapForGuide(guideId: string): StepCallMap {
  // Missing Child — step 7: NCMEC 1-800-THE-LOST
  if (guideId === 'eg5') {
    return { 6: { label: 'Call 1-800-THE-LOST', tel: '18008435678' } };
  }
  return {};
}

export default function EmergencyGuideScreen() {
  const { id: idParam } = useLocalSearchParams<{ id?: string | string[] }>();
  const id = Array.isArray(idParam) ? idParam[0] : idParam;
  const { language, preferredLanguage, t } = useLanguage();
  const router = useRouter();
  const guide = emergencyGuides.find((g) => g.id === id);
  const speakByStep = guide ? speakMapForGuide(guide.id, preferredLanguage) : {};
  const callByStep = guide ? stepCallMapForGuide(guide.id) : {};

  useEffect(() => {
    return () => {
      void stopSpeaking();
    };
  }, []);

  if (!guide) {
    return (
      <Screen>
        <AppText>{t('emptySearch')}</AppText>
      </Screen>
    );
  }

  const title = language === 'ru' ? guide.titleRu : guide.titleEn;
  const steps = (language === 'ru' ? guide.stepsRu : guide.stepsEn).map((step) =>
    localizeInterpreterMentions(step, preferredLanguage)
  );

  return (
    <Screen>
      <Stack.Screen
        options={{
          title: t('emergencyGuides'),
          headerLeft: () => <StackBackButton />,
        }}
      />
      <AppText variant="title" style={{ marginBottom: spacing.md }}>
        {title}
      </AppText>

      <Button
        title={t('call911')}
        variant="danger"
        onPress={() => Linking.openURL('tel:911')}
        style={{ marginBottom: spacing.md }}
      />

      <AppText variant="label" style={{ marginBottom: spacing.sm }}>
        {t('steps')}
      </AppText>
      {steps.map((step, index) => {
        const speak = speakByStep[index];
        const call = callByStep[index];
        return (
          <View key={index} style={styles.step}>
            <View style={styles.num}>
              <AppText color={colors.white} variant="subtitle">
                {index + 1}
              </AppText>
            </View>
            <View style={styles.stepBody}>
              <AppText style={{ flex: 1 }}>{step}</AppText>
              {call ? (
                <Pressable
                  onPress={() => Linking.openURL(`tel:${call.tel}`)}
                  style={({ pressed }) => [styles.callChip, pressed && { opacity: 0.9 }]}
                  accessibilityRole="button"
                  accessibilityLabel={call.label}
                >
                  <AppText variant="caption" color={colors.white} style={styles.callChipText}>
                    {call.label}
                  </AppText>
                </Pressable>
              ) : null}
              {speak ? (
                <View style={styles.actions}>
                  <SpeakCircleButton phrase={speak.phraseEn} language="en-US" />
                  <Pressable onPress={() => router.push('/police-cards')}>
                    <AppText variant="caption" color={colors.blueBright}>
                      {t('openPoliceCards')} →
                    </AppText>
                  </Pressable>
                </View>
              ) : null}
            </View>
          </View>
        );
      })}
      <AppText variant="caption" style={{ marginTop: spacing.lg }}>
        {t('disclaimer')}
      </AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  step: {
    flexDirection: 'row',
    gap: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.sm,
    alignItems: 'flex-start',
  },
  num: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepBody: {
    flex: 1,
    gap: spacing.sm,
  },
  callChip: {
    alignSelf: 'flex-start',
    backgroundColor: colors.danger,
    borderRadius: radius.full,
    paddingHorizontal: spacing.md,
    paddingVertical: 8,
  },
  callChipText: {
    fontWeight: '800',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginTop: spacing.xs,
  },
});
