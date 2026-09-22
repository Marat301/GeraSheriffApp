import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { AppText } from '../../src/components/AppText';
import { Screen } from '../../src/components/Screen';
import { StackBackButton } from '../../src/components/StackBackButton';
import { useLanguage } from '../../src/context/LanguageContext';
import { getPoliceCardPhrases, policeCards } from '../../src/data/policeCards';
import { interpreterPhraseEn, pickLocalized } from '../../src/i18n/contentLocale';
import { colors, radius, spacing } from '../../src/theme/colors';
import { speakPhrase, stopSpeaking } from '../../src/utils/speak';

export default function PoliceCardsScreen() {
  const { language, preferredLanguage, t } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    return () => {
      void stopSpeaking();
    };
  }, []);

  const cards = policeCards.flatMap((card) => {
    const phrases = getPoliceCardPhrases(card);
    return phrases.map((phrase) => {
      const phraseEn =
        card.id === 'pc4' && phrase.id === 'primary'
          ? interpreterPhraseEn(preferredLanguage)
          : phrase.phraseEn;
      const titleKey =
        phrase.id === 'primary'
          ? (
              {
                pc1: 'attorney',
                pc2: 'remainSilent',
                pc3: 'noConsent',
                pc4: 'noEnglish',
              } as const
            )[card.id as 'pc1' | 'pc2' | 'pc3' | 'pc4']
          : undefined;
      return {
        key: `${card.id}-${phrase.id}`,
        color: card.color,
        title: titleKey
          ? t(titleKey)
          : pickLocalized(language, phrase.titleEn, phrase.titleRu),
        phraseEn,
      };
    });
  });

  return (
    <Screen>
      <Stack.Screen
        options={{
          title: t('policeCards'),
          headerLeft: () => <StackBackButton />,
        }}
      />

      <AppText muted style={styles.intro}>
        {t('tapToShow')}
      </AppText>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t('policeCardsOpenTranslator')}
        onPress={() => {
          void stopSpeaking();
          router.replace('/translator' as never);
        }}
        style={({ pressed }) => [styles.translatorCta, pressed && styles.translatorPressed]}
      >
        <View style={styles.translatorIcon}>
          <Ionicons name="language" size={22} color={colors.blueBright} />
        </View>
        <View style={styles.translatorText}>
          <AppText variant="caption" color={colors.textMuted}>
            {t('policeCardsTranslatorHint')}
          </AppText>
          <AppText variant="subtitle" color={colors.white} style={{ marginTop: 2 }}>
            {t('policeCardsOpenTranslator')}
          </AppText>
        </View>
        <Ionicons name="chevron-forward" size={20} color={colors.blueBright} />
      </Pressable>

      {cards.map((card) => (
        <Pressable
          key={card.key}
          accessibilityRole="button"
          accessibilityLabel={`Speak: ${card.phraseEn}`}
          onPress={() => void speakPhrase(card.phraseEn, { language: 'en-US' })}
          style={({ pressed }) => [
            styles.btn,
            { backgroundColor: card.color },
            pressed && styles.pressed,
          ]}
        >
          <View style={styles.cardBody}>
            <AppText variant="title" color={colors.white}>
              {card.title}
            </AppText>
            <AppText variant="caption" color="#E3F2FD" style={{ marginTop: 6 }}>
              {card.phraseEn}
            </AppText>
          </View>
          <MaterialCommunityIcons
            name="account-voice"
            size={28}
            color={colors.white}
            style={styles.speakIcon}
          />
        </Pressable>
      ))}

      <AppText variant="caption" style={styles.disclaimer}>
        {t('disclaimer')}
      </AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  intro: {
    marginBottom: spacing.sm,
  },
  translatorCta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.lg,
  },
  translatorPressed: {
    opacity: 0.9,
    borderColor: colors.blue,
    backgroundColor: colors.blueMuted,
  },
  translatorIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.blueGlow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  translatorText: {
    flex: 1,
  },
  btn: {
    borderRadius: radius.xl,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.md,
    minHeight: 110,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  pressed: {
    opacity: 0.88,
    transform: [{ scale: 0.985 }],
  },
  cardBody: {
    flex: 1,
    justifyContent: 'center',
  },
  speakIcon: {
    opacity: 0.9,
  },
  disclaimer: {
    marginTop: spacing.sm,
  },
});
