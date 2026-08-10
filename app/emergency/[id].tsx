import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import * as Speech from 'expo-speech';
import { AppText } from '../../src/components/AppText';
import { Screen } from '../../src/components/Screen';
import { SpeakCircleButton } from '../../src/components/SpeakCircleButton';
import { useLanguage } from '../../src/context/LanguageContext';
import { emergencyGuides } from '../../src/data/emergency';
import { policeCards } from '../../src/data/policeCards';
import { colors, radius, spacing } from '../../src/theme/colors';

/** Police-stop guide: step 4 (index 3) and step 6 (index 5) get TTS + cards link */
const POLICE_STOP_SPEAK: Record<number, { phraseEn: string; cardId: string }> = {
  3: {
    phraseEn: policeCards.find((c) => c.id === 'pc2')!.phraseEn,
    cardId: 'pc2',
  },
  5: {
    phraseEn: policeCards.find((c) => c.id === 'pc4')!.phraseEn,
    cardId: 'pc4',
  },
};

export default function EmergencyGuideScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { language, t } = useLanguage();
  const router = useRouter();
  const guide = emergencyGuides.find((g) => g.id === id);

  useEffect(() => {
    return () => {
      Speech.stop();
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
  const steps = language === 'ru' ? guide.stepsRu : guide.stepsEn;
  const isPoliceStop = guide.id === 'eg1';

  return (
    <Screen>
      <Stack.Screen options={{ title: t('emergencyGuides') }} />
      <AppText variant="title" style={{ marginBottom: spacing.md }}>
        {title}
      </AppText>
      <AppText variant="label" style={{ marginBottom: spacing.sm }}>
        {t('steps')}
      </AppText>
      {steps.map((step, index) => {
        const speak = isPoliceStop ? POLICE_STOP_SPEAK[index] : undefined;
        return (
          <View key={index} style={styles.step}>
            <View style={styles.num}>
              <AppText color={colors.white} variant="subtitle">
                {index + 1}
              </AppText>
            </View>
            <View style={styles.stepBody}>
              <AppText style={{ flex: 1 }}>{step}</AppText>
              {speak ? (
                <View style={styles.actions}>
                  <SpeakCircleButton
                    phrase={speak.phraseEn}
                    language="en-US"
                    onLongPress={() => router.push(`/police-cards/${speak.cardId}`)}
                  />
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
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginTop: spacing.xs,
  },
});
