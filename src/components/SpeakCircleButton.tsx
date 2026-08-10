import { Ionicons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import React from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../theme/colors';

type Props = {
  phrase: string;
  language?: string;
  style?: ViewStyle;
  onLongPress?: () => void;
};

export function SpeakCircleButton({
  phrase,
  language = 'en-US',
  style,
  onLongPress,
}: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Speak phrase"
      onPress={() => {
        Speech.stop();
        Speech.speak(phrase, { language });
      }}
      onLongPress={onLongPress}
      style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}
    >
      <Ionicons name="mic" size={22} color={colors.white} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.blueBright,
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.96 }],
  },
});
