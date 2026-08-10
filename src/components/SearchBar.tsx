import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { colors, radius, spacing } from '../theme/colors';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  onSubmit?: () => void;
  editable?: boolean;
  onPress?: () => void;
};

export function SearchBar({
  value,
  onChangeText,
  placeholder,
  onSubmit,
  editable = true,
  onPress,
}: Props) {
  const content = (
    <View style={styles.wrap}>
      <Ionicons name="search" size={18} color={colors.textMuted} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.textMuted}
        style={styles.input}
        editable={editable}
        onSubmitEditing={onSubmit}
        returnKeyType="search"
        pointerEvents={editable ? 'auto' : 'none'}
      />
    </View>
  );

  if (onPress) {
    return (
      <Pressable onPress={onPress} style={styles.press}>
        {content}
      </Pressable>
    );
  }

  return content;
}

const styles = StyleSheet.create({
  press: {
    marginBottom: spacing.md,
  },
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    minHeight: 46,
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  input: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: 15,
    paddingVertical: 10,
  },
});
