import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { AppText } from '../../src/components/AppText';
import { Screen } from '../../src/components/Screen';
import { useLanguage } from '../../src/context/LanguageContext';
import { locationCategories } from '../../src/data/emergencyLocations';
import { colors, radius, spacing } from '../../src/theme/colors';

export default function EmergencyLocationsScreen() {
  const { language, t } = useLanguage();
  const router = useRouter();

  return (
    <Screen>
      <Stack.Screen options={{ title: t('emergencyLocations') }} />
      <AppText muted style={styles.intro}>
        {t('emergencyLocationsIntro')}
      </AppText>
      {locationCategories.map((category) => {
        const name = language === 'ru' ? category.nameRu : category.nameEn;
        return (
          <Pressable
            key={category.id}
            onPress={() =>
              router.push({
                pathname: '/emergency-locations/[category]',
                params: { category: category.id },
              })
            }
            style={({ pressed }) => [styles.card, pressed && { opacity: 0.85 }]}
          >
            <View style={styles.emojiWrap}>
              <AppText style={styles.emoji}>{category.emoji}</AppText>
            </View>
            <AppText variant="subtitle" style={styles.name}>
              {name}
            </AppText>
            <AppText color={colors.blueBright}>→</AppText>
          </Pressable>
        );
      })}
      <AppText variant="caption" style={styles.disclaimer}>
        {t('disclaimer')}
      </AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  intro: {
    marginBottom: spacing.md,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.sm,
    gap: spacing.sm,
  },
  emojiWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.blueGlow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 20,
  },
  name: {
    flex: 1,
  },
  disclaimer: {
    marginTop: spacing.md,
    marginBottom: spacing.lg,
  },
});
