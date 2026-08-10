import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { AppText } from '../../src/components/AppText';
import { Screen } from '../../src/components/Screen';
import { useLanguage } from '../../src/context/LanguageContext';
import { policeCards } from '../../src/data/policeCards';
import { colors, radius, spacing } from '../../src/theme/colors';

export default function PoliceCardsScreen() {
  const { language, t } = useLanguage();
  const router = useRouter();

  return (
    <Screen>
      <Stack.Screen
        options={{
          title: t('policeCards'),
          headerBackTitle: '',
          headerBackButtonDisplayMode: 'minimal',
        }}
      />
      <AppText muted style={{ marginBottom: spacing.md }}>
        {t('tapToShow')}
      </AppText>
      {policeCards.map((card) => {
        const title = language === 'ru' ? card.titleRu : card.titleEn;
        return (
          <Pressable
            key={card.id}
            onPress={() => router.push(`/police-cards/${card.id}`)}
            style={({ pressed }) => [
              styles.btn,
              { backgroundColor: card.color },
              pressed && { opacity: 0.9 },
            ]}
          >
            <AppText variant="title" color={colors.white} style={{ textAlign: 'center' }}>
              {title}
            </AppText>
            <AppText
              variant="caption"
              color="#E3F2FD"
              style={{ textAlign: 'center', marginTop: 4 }}
            >
              {language === 'ru' ? card.titleEn : card.titleRu}
            </AppText>
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
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.md,
    minHeight: 110,
    justifyContent: 'center',
  },
});
