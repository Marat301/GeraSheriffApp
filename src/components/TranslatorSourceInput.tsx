import React from 'react';
import { Keyboard, StyleSheet, TextInput, View, ViewStyle } from 'react-native';
import { colors, radius, spacing } from '../theme/colors';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  style?: ViewStyle;
};

/** Three-line phrase field — Return / Done dismisses the keyboard. */
export function TranslatorSourceInput({
  value,
  onChangeText,
  placeholder,
  style,
}: Props) {
  return (
    <View style={style}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.textMuted}
        style={styles.input}
        multiline
        numberOfLines={3}
        textAlignVertical="top"
        autoCorrect
        autoCapitalize="sentences"
        returnKeyType="done"
        blurOnSubmit
        enablesReturnKeyAutomatically
        onSubmitEditing={() => Keyboard.dismiss()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    minHeight: 96,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    color: colors.textPrimary,
    fontSize: 17,
    lineHeight: 24,
    paddingHorizontal: spacing.md,
    paddingTop: 12,
    paddingBottom: 12,
  },
});
