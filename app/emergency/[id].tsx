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

/** Police-stop guide: step 4 (index 3) and step 6 (index 5) get TTS + cards link */
function policeStopSpeak(
  preferredLanguage: PreferredLanguage
): Record<number, { phraseEn: string }> {
  return {
    3: {
      phraseEn: policeCards.find((c) => c.id === 'pc2')!.phraseEn,
    },
    5: {
      phraseEn: interpreterPhraseEn(preferredLanguage),
    },
  };
}

function mentions911(text: string) {
  return /\b911\b/.test(text);
}

export default function EmergencyGuideScreen() {
  const { id: idParam } = useLocalSearchParams<{ id?: string | string[] }>();
  const id = Array.isArray(idParam) ? idParam[0] : idParam;
  const { language, preferredLanguage, t } = useLanguage();
  const router = useRouter();
  const guide = emergencyGuides.find((g) => g.id === id);
  const policeSpeak = policeStopSpeak(preferredLanguage);

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
  const isPoliceStop = guide.id === 'eg1';

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
        const speak = isPoliceStop ? policeSpeak[index] : undefined;
        const show911 = mentions911(step);
        return (
          <View key={index} style={styles.step}>
            <View style={styles.num}>
              <AppText color={colors.white} variant="subtitle">
                {index + 1}
              </AppText>
            </View>
            <View style={styles.stepBody}>
              <AppText style={{ flex: 1 }}>{step}</AppText>
              {show911 ? (
                <Pressable
                  onPress={() => Linking.openURL('tel:911')}
                  style={({ pressed }) => [styles.call911Chip, pressed && { opacity: 0.9 }]}
                >
                  <AppText variant="caption" color={colors.white} style={styles.call911Text}>
                    {t('call911')}
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
  call911Chip: {
    alignSelf: 'flex-start',
    backgroundColor: colors.danger,
    borderRadius: radius.full,
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
  },
  call911Text: {
    fontWeight: '800',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginTop: spacing.xs,
  },
});
