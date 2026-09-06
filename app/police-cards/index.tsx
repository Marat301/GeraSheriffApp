import { Stack, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { AppText } from '../../src/components/AppText';
import { Screen } from '../../src/components/Screen';
import { SpeakCircleButton } from '../../src/components/SpeakCircleButton';
import { StackBackButton } from '../../src/components/StackBackButton';
import { useLanguage } from '../../src/context/LanguageContext';
import { getPoliceCardPhrases, policeCards } from '../../src/data/policeCards';
import { colors, radius, spacing } from '../../src/theme/colors';
import { stopSpeaking } from '../../src/utils/speak';

export default function PoliceCardsScreen() {
  const { language, t } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    return () => {
      void stopSpeaking();
    };
  }, []);

  return (
    <Screen>
      <Stack.Screen
        options={{
          title: t('policeCards'),
          headerLeft: () => <StackBackButton />,
        }}
      />
      <AppText muted style={{ marginBottom: spacing.md }}>
        {t('tapToShow')}
      </AppText>
      {policeCards.map((card) => {
        const phrases = getPoliceCardPhrases(card);
        const isMerged = phrases.length > 1;
        return (
          <Pressable
            key={card.id}
            onPress={() =>
              router.push({
                pathname: '/police-cards/[id]',
                params: { id: card.id },
              })
            }
            style={({ pressed }) => [
              styles.btn,
              { backgroundColor: card.color },
              pressed && { opacity: 0.9 },
            ]}
          >
            <View style={styles.cardBody}>
              {isMerged ? (
                phrases.map((phrase, index) => (
                  <View
                    key={phrase.id}
                    style={[styles.mergedRow, index > 0 && styles.mergedRowDivider]}
                  >
                    <View style={{ flex: 1 }}>
                      <AppText variant="subtitle" color={colors.white}>
                        {language === 'ru' ? phrase.titleRu : phrase.titleEn}
                      </AppText>
                      <AppText variant="caption" color="#E3F2FD" style={{ marginTop: 2 }}>
                        {language === 'ru' ? phrase.titleEn : phrase.titleRu}
                      </AppText>
                    </View>
                    <SpeakCircleButton
                      phrase={phrase.phraseEn}
                      language="en-US"
                      size={48}
                      style={styles.speakBtn}
                    />
                  </View>
                ))
              ) : (
                <>
                  <AppText variant="title" color={colors.white}>
                    {language === 'ru' ? card.titleRu : card.titleEn}
                  </AppText>
                  <AppText variant="caption" color="#E3F2FD" style={{ marginTop: 4 }}>
                    {language === 'ru' ? card.titleEn : card.titleRu}
                  </AppText>
                </>
              )}
            </View>
            {!isMerged ? (
              <SpeakCircleButton
                phrase={card.phraseEn}
                language="en-US"
                size={52}
                style={styles.speakBtn}
              />
            ) : null}
          </Pressable>
        );
      })}
      <View style={{ height: spacing.md }} />
      <AppText variant="caption">{t('disclaimer')}</AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
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
  cardBody: {
    flex: 1,
    justifyContent: 'center',
  },
  mergedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  mergedRowDivider: {
    marginTop: spacing.md,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.28)',
  },
  speakBtn: {
    backgroundColor: 'rgba(0,0,0,0.28)',
    borderColor: 'rgba(255,255,255,0.55)',
  },
});
