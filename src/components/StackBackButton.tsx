import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Platform, Pressable, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

type Props = {
  /** Fallback when there is no stack history (e.g. deep link). Default: home tabs. */
  fallbackHref?: string;
};

export function StackBackButton({ fallbackHref = '/(tabs)' }: Props) {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => {
        if (router.canGoBack()) {
          router.back();
        } else {
          router.replace(fallbackHref as never);
        }
      }}
      hitSlop={12}
      style={({ pressed }) => [styles.btn, pressed && { opacity: 0.7 }]}
      accessibilityRole="button"
      accessibilityLabel="Back"
    >
      <Ionicons
        name={Platform.OS === 'ios' ? 'chevron-back' : 'arrow-back'}
        size={28}
        color={colors.white}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginLeft: Platform.OS === 'ios' ? 0 : 4,
    paddingHorizontal: 4,
    paddingVertical: 4,
    justifyContent: 'center',
  },
});
