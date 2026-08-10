import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, View } from 'react-native';
import { AppText } from '../../src/components/AppText';
import { Button } from '../../src/components/Button';
import { Screen } from '../../src/components/Screen';
import { TextField } from '../../src/components/TextField';
import { useAuth } from '../../src/context/AuthContext';
import { useLanguage } from '../../src/context/LanguageContext';
import { TranslationKey } from '../../src/i18n/translations';
import { colors, radius, spacing } from '../../src/theme/colors';
import { Language, USState } from '../../src/types';

const STATES: { id: USState; labelKey: TranslationKey; enabled: boolean }[] = [
  { id: 'FL', labelKey: 'florida', enabled: true },
  { id: 'CA', labelKey: 'california', enabled: true },
  { id: 'NY', labelKey: 'newYork', enabled: true },
];

export default function SignUpScreen() {
  const { t, language, setLanguage } = useLanguage();
  const { signUp } = useAuth();
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [state, setState] = useState<USState>('FL');
  const [loading, setLoading] = useState(false);

  const onSignUp = async () => {
    if (!name || !email || !password || !confirm) {
      Alert.alert(t('fillAllFields'));
      return;
    }
    if (password !== confirm) {
      Alert.alert(t('passwordMismatch'));
      return;
    }
    setLoading(true);
    const result = await signUp({
      name,
      email,
      password,
      language: language as Language,
      state,
    });
    setLoading(false);
    if (!result.ok) {
      Alert.alert(t(result.error as TranslationKey));
      return;
    }
    await setLanguage(language);
    router.replace('/(tabs)');
  };

  return (
    <Screen showTutorial={false}>
      <AppText variant="hero">{t('createAccount')}</AppText>
      <AppText muted style={{ marginBottom: spacing.lg }}>
        {t('tagline')}
      </AppText>

      <TextField label={t('name')} value={name} onChangeText={setName} />
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
      <TextField
        label={t('confirmPassword')}
        secureTextEntry
        value={confirm}
        onChangeText={setConfirm}
      />

      <AppText variant="label" style={{ marginBottom: spacing.sm }}>
        {t('state')}
      </AppText>
      <View style={styles.stateRow}>
        {STATES.map((s) => (
          <Pressable
            key={s.id}
            onPress={() => setState(s.id)}
            style={[styles.stateChip, state === s.id && styles.stateActive]}
          >
            <AppText color={state === s.id ? colors.white : colors.textSecondary}>
              {t(s.labelKey)}
            </AppText>
            {s.id !== 'FL' ? (
              <AppText variant="caption" style={styles.soon}>
                {t('comingSoon')}
              </AppText>
            ) : null}
          </Pressable>
        ))}
      </View>
      <AppText variant="caption" style={{ marginBottom: spacing.md }}>
        {t('comingSoonStates')}
      </AppText>

      <Button title={t('signUp')} onPress={onSignUp} loading={loading} />

      <View style={styles.footer}>
        <AppText muted>{t('hasAccount')} </AppText>
        <Link href="/(auth)/login">
          <AppText color={colors.blueBright}>{t('signIn')}</AppText>
        </Link>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  stateRow: { gap: spacing.sm, marginBottom: spacing.sm },
  stateChip: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
  },
  stateActive: {
    borderColor: colors.blue,
    backgroundColor: colors.blueMuted,
  },
  soon: { marginTop: 2 },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing.lg,
    flexWrap: 'wrap',
  },
});
