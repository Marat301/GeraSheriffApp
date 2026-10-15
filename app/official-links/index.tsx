import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { AppText } from '../../src/components/AppText';
import { Screen } from '../../src/components/Screen';
import { StackBackButton } from '../../src/components/StackBackButton';
import { useLanguage } from '../../src/context/LanguageContext';
import {
  officialLinkCategories,
  officialLinks,
} from '../../src/data/officialLinks';
import { colors, radius, spacing } from '../../src/theme/colors';

export default function OfficialLinksScreen() {
  const { language, t } = useLanguage();

  return (
    <Screen>
      <Stack.Screen
        options={{
          title: t('officialLinks'),
          headerLeft: () => <StackBackButton />,
        }}
      />

      <AppText muted style={{ marginBottom: spacing.md }}>
        {t('officialLinksIntro')}
      </AppText>

      {officialLinkCategories.map((category) => {
        const links = officialLinks.filter((l) => l.categoryId === category.id);
        return (
          <View key={category.id} style={styles.section}>
            <AppText variant="label" style={styles.sectionLabel}>
              {t(category.titleKey)}
            </AppText>
            {links.map((link) => {
              const title = language === 'ru' ? link.titleRu : link.titleEn;
              const subtitle = language === 'ru' ? link.subtitleRu : link.subtitleEn;
              return (
                <Pressable
                  key={link.id}
                  onPress={() => WebBrowser.openBrowserAsync(link.url)}
                  style={({ pressed }) => [styles.card, pressed && styles.pressed]}
                  accessibilityRole="link"
                  accessibilityLabel={`${title}. ${subtitle}`}
                >
                  <View style={styles.icon}>
                    <Ionicons name={link.icon} size={22} color={colors.blueBright} />
                  </View>
                  <View style={styles.text}>
                    <AppText variant="subtitle">{title}</AppText>
                    <AppText muted style={styles.subtitle} numberOfLines={2}>
                      {subtitle}
                    </AppText>
                  </View>
                  <Ionicons name="open-outline" size={18} color={colors.textMuted} />
                </Pressable>
              );
            })}
          </View>
        );
      })}

      <AppText variant="caption" style={styles.disclaimer}>
        {t('disclaimer')}
      </AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: spacing.md,
  },
  sectionLabel: {
    marginBottom: spacing.sm,
    marginTop: spacing.xs,
  },
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
  pressed: {
    opacity: 0.9,
  },
  icon: {
    width: 42,
    height: 42,
    borderRadius: radius.sm,
    backgroundColor: colors.blueGlow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 1,
  },
  subtitle: {
    marginTop: 2,
    fontSize: 12,
  },
  disclaimer: {
    marginTop: spacing.md,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },
});
