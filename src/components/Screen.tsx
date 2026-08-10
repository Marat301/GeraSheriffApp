import { Ionicons } from '@expo/vector-icons';
import { useSegments } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing } from '../theme/colors';
import { LanguageToggle } from './LanguageToggle';
import { TutorialModal } from './TutorialModal';

type Props = {
  children: React.ReactNode;
  scroll?: boolean;
  style?: ViewStyle;
  padded?: boolean;
  showLanguageToggle?: boolean;
  showTutorial?: boolean;
};

export function Screen({
  children,
  scroll = true,
  style,
  padded = true,
  showLanguageToggle = true,
  showTutorial = true,
}: Props) {
  const segments = useSegments();
  const [tutorialOpen, setTutorialOpen] = useState(false);

  // Stack screens already have a nav header — skip top safe-area to avoid empty black bar
  const inTabs = segments[0] === '(tabs)';
  const inAuth = segments[0] === '(auth)';
  const applyTopInset = inTabs || inAuth;
  const edges = applyTopInset
    ? (['top', 'left', 'right'] as const)
    : (['left', 'right'] as const);

  const floatTop = applyTopInset ? spacing.sm : spacing.sm;
  const contentTopPad = showLanguageToggle || showTutorial ? 52 : spacing.sm;

  const floating = (
    <View
      pointerEvents="box-none"
      style={[styles.floatBar, { top: floatTop, right: padded ? spacing.md : spacing.sm }]}
    >
      {showTutorial ? (
        <Pressable
          onPress={() => setTutorialOpen(true)}
          style={({ pressed }) => [styles.helpBtn, pressed && { opacity: 0.85 }]}
          accessibilityRole="button"
          accessibilityLabel="Tutorial"
        >
          <Ionicons name="help" size={20} color={colors.white} />
        </Pressable>
      ) : null}
      {showLanguageToggle ? <LanguageToggle /> : null}
    </View>
  );

  const body = scroll ? (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContent,
        padded && styles.padded,
        { paddingTop: contentTopPad },
        style,
      ]}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  ) : (
    <View style={[styles.fill, padded && styles.padded, { paddingTop: contentTopPad }, style]}>
      {children}
    </View>
  );

  return (
    <SafeAreaView style={styles.safe} edges={[...edges]}>
      <View style={styles.fill}>
        {body}
        {floating}
        <TutorialModal visible={tutorialOpen} onClose={() => setTutorialOpen(false)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.black,
  },
  fill: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: spacing.xxl,
  },
  padded: {
    paddingHorizontal: spacing.md,
  },
  floatBar: {
    position: 'absolute',
    zIndex: 50,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  helpBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.blueBright,
  },
});
