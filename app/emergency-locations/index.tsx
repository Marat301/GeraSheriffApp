import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Linking, Pressable, StyleSheet, View } from 'react-native';
import { AppText } from '../../src/components/AppText';
import { Screen } from '../../src/components/Screen';
import { StackBackButton } from '../../src/components/StackBackButton';
import { useLanguage } from '../../src/context/LanguageContext';
import { locationCategories } from '../../src/data/emergencyLocations';
import { colors, radius, spacing } from '../../src/theme/colors';

export default function EmergencyLocationsScreen() {
  const { language, t } = useLanguage();
  const router = useRouter();

  return (
    <Screen>
      <Stack.Screen
        options={{
          title: t('emergencyLocations'),
          headerLeft: () => <StackBackButton />,
        }}
      />
      <AppText muted style={styles.intro}>
        {t('emergencyLocationsIntro')}
      </AppText>
      <Pressable
        onPress={() => Linking.openURL('tel:911')}
        style={({ pressed }) => [styles.urgent911, pressed && { opacity: 0.9 }]}
      >
        <AppText color={colors.white} style={styles.urgentText}>
          {t('locationsUrgent911')}
        </AppText>
      </Pressable>
      {locationCategories.map((category) => {
        const name = language === 'ru' ? category.nameRu : category.nameEn;
        const soon = !!category.comingSoon;
        return (
          <Pressable
            key={category.id}
            disabled={soon}
            onPress={() => {
              if (soon) return;
              router.push({
                pathname: '/emergency-locations/[category]',
                params: { category: category.id },
              });
            }}
            style={({ pressed }) => [
              styles.card,
              soon && styles.cardSoon,
              !soon && pressed && { opacity: 0.85 },
            ]}
          >
            <View style={[styles.emojiWrap, soon && styles.emojiWrapSoon]}>
              <AppText style={[styles.emoji, soon && styles.emojiSoon]}>{category.emoji}</AppText>
            </View>
            <View style={styles.nameWrap}>
              <AppText
                variant="subtitle"
                style={styles.name}
                color={soon ? colors.textMuted : colors.textPrimary}
              >
                {name}
              </AppText>
              {soon ? (
                <AppText variant="caption" color={colors.textMuted} style={{ marginTop: 2 }}>
                  {t('partnerAttorneysSoon')}
                </AppText>
              ) : null}
            </View>
            {soon ? (
              <View style={styles.soonPill}>
                <AppText variant="caption" color={colors.textMuted}>
                  {t('comingSoon')}
                </AppText>
              </View>
            ) : (
              <AppText color={colors.blueBright}>→</AppText>
            )}
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
    marginBottom: spacing.sm,
  },
  urgent911: {
    backgroundColor: colors.danger,
    borderRadius: radius.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.md,
  },
  urgentText: {
    fontWeight: '700',
    textAlign: 'center',
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
  cardSoon: {
    opacity: 0.55,
    backgroundColor: colors.blackSoft,
  },
  emojiWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.blueGlow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emojiWrapSoon: {
    backgroundColor: colors.border,
  },
  emoji: {
    fontSize: 20,
  },
  emojiSoon: {
    opacity: 0.7,
  },
  nameWrap: {
    flex: 1,
  },
  name: {
    flexShrink: 1,
  },
  soonPill: {
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    backgroundColor: colors.surface,
  },
  disclaimer: {
    marginTop: spacing.md,
    marginBottom: spacing.lg,
  },
});
