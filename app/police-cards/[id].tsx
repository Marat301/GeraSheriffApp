import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppText } from '../../src/components/AppText';
import { Button } from '../../src/components/Button';
import { Screen } from '../../src/components/Screen';
import { StackBackButton } from '../../src/components/StackBackButton';
import { useLanguage } from '../../src/context/LanguageContext';
import { getPoliceCardPhrases, policeCards } from '../../src/data/policeCards';
import { colors, radius, spacing } from '../../src/theme/colors';
import { speakPhrase, stopSpeaking } from '../../src/utils/speak';

/** Always fixed — independent of RU/EN app preference */
const SPEAK_ENGLISH_LABEL = 'Speak English';
const SPEAK_RUSSIAN_LABEL = 'Говорить по-русски';

export default function PoliceCardDetailScreen() {
  const { id: idParam } = useLocalSearchParams<{ id?: string | string[] }>();
  const id = Array.isArray(idParam) ? idParam[0] : idParam;
  const { t } = useLanguage();
  const card = policeCards.find((c) => c.id === id);
  const phrases = card ? getPoliceCardPhrases(card) : [];

  useEffect(() => {
    return () => {
      void stopSpeaking();
    };
  }, []);

  if (!card) {
    return (
      <Screen>
        <AppText>{t('emptySearch')}</AppText>
      </Screen>
    );
  }

  return (
    <Screen>
      <Stack.Screen
        options={{
          title: t('policeCards'),
          headerLeft: () => <StackBackButton />,
        }}
      />
      <View style={[styles.banner, { backgroundColor: card.color }]}>
        <AppText variant="hero" color={colors.white} style={{ textAlign: 'center' }}>
          {card.titleEn}
        </AppText>
        <AppText
          variant="title"
          color="#E3F2FD"
          style={{ textAlign: 'center', marginTop: spacing.sm }}
        >
          {card.titleRu}
        </AppText>
        {phrases.length > 1 ? (
          <AppText
            variant="caption"
            color="#BBDEFB"
            style={{ textAlign: 'center', marginTop: spacing.sm }}
          >
            + {phrases[1].titleEn}
          </AppText>
        ) : null}
      </View>

      {phrases.map((phrase) => (
        <View key={phrase.id} style={styles.block}>
          <AppText variant="subtitle" color={colors.blueBright}>
            {phrase.titleEn}
          </AppText>
          <AppText variant="caption" muted style={{ marginTop: 2 }}>
            {phrase.titleRu}
          </AppText>

          <AppText variant="label" style={{ marginTop: spacing.md }}>
            English
          </AppText>
          <AppText variant="subtitle" style={{ marginTop: spacing.sm }}>
            {phrase.phraseEn}
          </AppText>
          <Button
            title={SPEAK_ENGLISH_LABEL}
            onPress={() => void speakPhrase(phrase.phraseEn, { language: 'en-US' })}
            style={{ marginTop: spacing.md }}
          />

          <AppText variant="label" style={{ marginTop: spacing.lg }}>
            Русский
          </AppText>
          <AppText variant="subtitle" style={{ marginTop: spacing.sm }}>
            {phrase.phraseRu}
          </AppText>
          <Button
            title={SPEAK_RUSSIAN_LABEL}
            variant="outline"
            onPress={() => void speakPhrase(phrase.phraseRu, { language: 'ru-RU' })}
            style={{ marginTop: spacing.md }}
          />
        </View>
      ))}

      <Button
        title={t('stopSpeaking')}
        variant="secondary"
        onPress={() => void stopSpeaking()}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  banner: {
    borderRadius: radius.xl,
    padding: spacing.xl,
    marginBottom: spacing.lg,
  },
  block: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
});
