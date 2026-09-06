import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../theme/colors';
import { speakPhrase } from '../utils/speak';

type Props = {
  phrase: string;
  /** Defaults to English — police phrases for officers in the US */
  language?: string;
  style?: ViewStyle;
  size?: number;
  onLongPress?: () => void;
};

export function SpeakCircleButton({
  phrase,
  language = 'en-US',
  style,
  size = 48,
  onLongPress,
}: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Speak English"
      onPress={(e) => {
        e?.stopPropagation?.();
        void speakPhrase(phrase, { language: language || 'en-US' });
      }}
      onLongPress={onLongPress}
      style={({ pressed }) => [
        styles.btn,
        { width: size, height: size, borderRadius: size / 2 },
        pressed && styles.pressed,
        style,
      ]}
    >
      <MaterialCommunityIcons name="account-voice" size={size * 0.5} color={colors.white} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
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
