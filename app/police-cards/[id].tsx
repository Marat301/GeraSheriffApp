import { Stack, useLocalSearchParams } from 'expo-router';
import * as Speech from 'expo-speech';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppText } from '../../src/components/AppText';
import { Button } from '../../src/components/Button';
import { Screen } from '../../src/components/Screen';
import { useLanguage } from '../../src/context/LanguageContext';
import { policeCards } from '../../src/data/policeCards';
import { colors, radius, spacing } from '../../src/theme/colors';

/** Always fixed — independent of RU/EN app preference */
const SPEAK_ENGLISH_LABEL = 'Speak English';
const SPEAK_RUSSIAN_LABEL = 'Говорить по-русски';

export default function PoliceCardDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t } = useLanguage();
  const card = policeCards.find((c) => c.id === id);

  useEffect(() => {
    return () => {
      Speech.stop();
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
      <Stack.Screen options={{ title: t('policeCards') }} />
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
      </View>

      <View style={styles.block}>
        <AppText variant="label">English</AppText>
        <AppText variant="subtitle" style={{ marginTop: spacing.sm }}>
          {card.phraseEn}
        </AppText>
        <Button
          title={SPEAK_ENGLISH_LABEL}
          onPress={() => Speech.speak(card.phraseEn, { language: 'en-US' })}
          style={{ marginTop: spacing.md }}
        />
      </View>

      <View style={styles.block}>
        <AppText variant="label">Русский</AppText>
        <AppText variant="subtitle" style={{ marginTop: spacing.sm }}>
          {card.phraseRu}
        </AppText>
        <Button
          title={SPEAK_RUSSIAN_LABEL}
          variant="outline"
          onPress={() => Speech.speak(card.phraseRu, { language: 'ru-RU' })}
          style={{ marginTop: spacing.md }}
        />
      </View>

      <Button
        title={t('stopSpeaking')}
        variant="secondary"
        onPress={() => Speech.stop()}
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
