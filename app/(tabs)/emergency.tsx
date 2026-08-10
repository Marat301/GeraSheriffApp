import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Linking, Pressable, StyleSheet, View } from 'react-native';
import { AppText } from '../../src/components/AppText';
import { Button } from '../../src/components/Button';
import { Screen } from '../../src/components/Screen';
import { useLanguage } from '../../src/context/LanguageContext';
import { emergencyGuides } from '../../src/data/emergency';
import { colors, radius, spacing } from '../../src/theme/colors';

const iconMap: Record<string, keyof typeof Ionicons.glyphMap> = {
  shield: 'shield',
  car: 'car',
  medkit: 'medkit',
  home: 'home',
};

export default function EmergencyScreen() {
  const { language, t } = useLanguage();
  const router = useRouter();

  return (
    <Screen>
      <AppText variant="hero">{t('emergencyGuides')}</AppText>
      <AppText muted style={{ marginBottom: spacing.md }}>
        {t('disclaimer')}
      </AppText>

      <Button
        title={t('call911')}
        variant="danger"
        onPress={() => Linking.openURL('tel:911')}
        style={{ marginBottom: spacing.md }}
      />

      <Pressable
        onPress={() => router.push('/police-cards')}
        style={styles.cardsBanner}
      >
        <Ionicons name="chatbubbles" size={24} color={colors.white} />
        <View style={{ flex: 1, marginLeft: spacing.md }}>
          <AppText variant="subtitle" color={colors.white}>
            {t('policeCards')}
          </AppText>
          <AppText variant="caption" color="#BBDEFB">
            {t('tapToShow')}
          </AppText>
        </View>
        <Ionicons name="chevron-forward" size={20} color={colors.white} />
      </Pressable>

      {emergencyGuides.map((guide) => {
        const title = language === 'ru' ? guide.titleRu : guide.titleEn;
        return (
          <Pressable
            key={guide.id}
            onPress={() => router.push(`/emergency/${guide.id}`)}
            style={({ pressed }) => [styles.card, pressed && { opacity: 0.9 }]}
          >
            <View style={styles.icon}>
              <Ionicons
                name={iconMap[guide.icon] ?? 'alert'}
                size={22}
                color={colors.blueBright}
              />
            </View>
            <AppText variant="subtitle" style={{ flex: 1 }}>
              {title}
            </AppText>
            <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
          </Pressable>
        );
      })}
    </Screen>
  );
}

const styles = StyleSheet.create({
  cardsBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.blue,
    borderRadius: radius.lg,
    padding: spacing.md,
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
    gap: spacing.md,
  },
  icon: {
    width: 42,
    height: 42,
    borderRadius: radius.sm,
    backgroundColor: colors.blueGlow,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
