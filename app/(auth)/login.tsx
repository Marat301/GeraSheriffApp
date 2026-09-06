import { Link, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Alert, Image, StyleSheet, View } from 'react-native';
import { AppText } from '../../src/components/AppText';
import { Button } from '../../src/components/Button';
import { Screen } from '../../src/components/Screen';
import { TextField } from '../../src/components/TextField';
import { useAuth } from '../../src/context/AuthContext';
import { useLanguage } from '../../src/context/LanguageContext';
import { colors, radius, spacing } from '../../src/theme/colors';
import { TranslationKey } from '../../src/i18n/translations';

export default function LoginScreen() {
  const { t, setPreferredLanguage } = useLanguage();
  const { signIn, continueAsGuest } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    if (!email || !password) {
      Alert.alert(t('fillAllFields'));
      return;
    }
    setLoading(true);
    const result = await signIn(email, password);
    setLoading(false);
    if (!result.ok) {
      Alert.alert(t(result.error as TranslationKey));
      return;
    }
    await setPreferredLanguage(result.language);
    router.replace('/(tabs)');
  };

  return (
    <Screen showTutorial={false}>
      <LinearGradient
        colors={[colors.blueDeep, colors.black]}
        style={styles.brand}
      >
        <View style={styles.brandRow}>
          <View style={styles.brandText}>
            <AppText variant="hero" style={styles.brandTitle}>
              {t('appName')}
            </AppText>
            <AppText muted style={styles.tagline}>
              {t('tagline')}
            </AppText>
          </View>
          <Image
            source={require('../../assets/gera-sheriff-logo.png')}
            style={styles.logo}
            accessibilityLabel="Gera Sheriff logo"
          />
        </View>
      </LinearGradient>

      <AppText variant="title" style={styles.heading}>
        {t('welcomeBack')}
      </AppText>

      <TextField
        label={t('email')}
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextField
        label={t('password')}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Link href="/(auth)/forgot-password" style={styles.link}>
        <AppText color={colors.blueBright}>{t('forgotPassword')}</AppText>
      </Link>

      <Button title={t('signIn')} onPress={onLogin} loading={loading} />
      <Button
        title={t('guestContinue')}
        variant="outline"
        onPress={() => {
          continueAsGuest();
          router.replace('/(tabs)');
        }}
        style={{ marginTop: spacing.sm }}
      />

      <View style={styles.footer}>
        <AppText muted>{t('noAccount')} </AppText>
        <Link href="/(auth)/signup">
          <AppText color={colors.blueBright}>{t('signUp')}</AppText>
        </Link>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  brand: {
    borderRadius: radius.xl,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: colors.blueMuted,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  brandText: {
    flex: 1,
  },
  brandTitle: {
    color: colors.white,
  },
  tagline: {
    marginTop: spacing.xs,
  },
  logo: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  heading: {
    marginBottom: spacing.md,
  },
  link: {
    marginBottom: spacing.md,
    alignSelf: 'flex-end',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing.lg,
    flexWrap: 'wrap',
  },
});
