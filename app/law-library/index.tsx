import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { AppText } from '../../src/components/AppText';
import { Screen } from '../../src/components/Screen';
import { StackBackButton } from '../../src/components/StackBackButton';
import { useLanguage } from '../../src/context/LanguageContext';
import { lawLibraryCategories } from '../../src/data/lawLibrary';
import { colors, radius, spacing } from '../../src/theme/colors';

const iconMap: Record<string, keyof typeof Ionicons.glyphMap> = {
  shield: 'shield',
  car: 'car',
  flash: 'flash',
  'hand-left': 'hand-left',
  heart: 'heart',
  globe: 'globe',
  business: 'business',
};

export default function LawLibraryScreen() {
  const { language, t } = useLanguage();
  const router = useRouter();

  return (
    <Screen>
      <Stack.Screen
        options={{
          title: t('lawLibrary'),
          headerLeft: () => <StackBackButton />,
        }}
      />
      <AppText muted style={{ marginBottom: spacing.md }}>
        {t('lawLibraryIntro')}
      </AppText>

      <Pressable
        onPress={() => router.push('/law-library/statute-lookup' as never)}
        style={({ pressed }) => [styles.lookupCard, pressed && { opacity: 0.9 }]}
      >
        <View style={[styles.icon, styles.lookupIcon]}>
          <Ionicons name="keypad" size={22} color={colors.white} />
        </View>
        <View style={{ flex: 1 }}>
          <AppText variant="subtitle">{t('statuteLookup')}</AppText>
          <AppText muted style={{ marginTop: 4 }}>
            {language === 'ru'
              ? 'Цифровая панель · например 784.03'
              : 'Number pad · e.g. 784.03'}
          </AppText>
        </View>
        <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
      </Pressable>

      {lawLibraryCategories.map((category) => {
        const title = language === 'ru' ? category.titleRu : category.titleEn;
        const summary = language === 'ru' ? category.summaryRu : category.summaryEn;
        return (
          <Pressable
            key={category.id}
            onPress={() =>
              router.push({
                pathname: '/law-library/[category]',
                params: { category: category.id },
              })
            }
            style={({ pressed }) => [styles.card, pressed && { opacity: 0.9 }]}
          >
            <View style={styles.icon}>
              <Ionicons
                name={iconMap[category.icon] ?? 'book'}
                size={22}
                color={colors.blueBright}
              />
            </View>
            <View style={{ flex: 1 }}>
              <AppText variant="subtitle">{title}</AppText>
              <AppText muted style={{ marginTop: 4 }}>
                {summary}
              </AppText>
            </View>
            <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
          </Pressable>
        );
      })}
      <AppText variant="caption" style={{ marginTop: spacing.md, marginBottom: spacing.lg }}>
        {t('disclaimer')}
      </AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  icon: {
    width: 42,
    height: 42,
    borderRadius: radius.sm,
    backgroundColor: colors.blueGlow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lookupCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.blue,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  lookupIcon: {
    backgroundColor: colors.blue,
  },
});
