import React from 'react';
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';
import { colors } from '../theme/colors';

type Variant = 'hero' | 'title' | 'subtitle' | 'body' | 'caption' | 'label';

type Props = TextProps & {
  variant?: Variant;
  muted?: boolean;
  color?: string;
};

export function AppText({
  variant = 'body',
  muted,
  color,
  style,
  children,
  ...rest
}: Props) {
  return (
    <Text
      style={[
        styles.base,
        styles[variant],
        muted && styles.muted,
        color ? { color } : null,
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  base: {
    color: colors.textPrimary,
  },
  hero: {
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 17,
    fontWeight: '600',
  },
  body: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 22,
  },
  caption: {
    fontSize: 13,
    fontWeight: '400',
    color: colors.textSecondary,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
    color: colors.textSecondary,
  },
  muted: {
    color: colors.textSecondary,
  },
});
