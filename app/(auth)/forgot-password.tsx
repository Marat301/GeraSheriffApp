import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { AppText } from '../../src/components/AppText';
import { Button } from '../../src/components/Button';
import { Screen } from '../../src/components/Screen';
import { TextField } from '../../src/components/TextField';
import { useAuth } from '../../src/context/AuthContext';
import { useLanguage } from '../../src/context/LanguageContext';
import { colors, spacing } from '../../src/theme/colors';

export default function ForgotPasswordScreen() {
  const { t } = useLanguage();
  const { requestPasswordReset } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const onSend = async () => {
    if (!email) {
      Alert.alert(t('fillAllFields'));
      return;
    }
    setLoading(true);
    await requestPasswordReset(email);
    setLoading(false);
    Alert.alert(t('resetPassword'), t('resetSent'), [
      { text: 'OK', onPress: () => router.back() },
    ]);
  };

  return (
    <Screen showTutorial={false}>
      <AppText variant="hero">{t('resetPassword')}</AppText>
      <AppText muted style={{ marginVertical: spacing.md }}>
        {t('resetSent')}
      </AppText>
      <TextField
        label={t('email')}
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <Button title={t('sendReset')} onPress={onSend} loading={loading} />
      <View style={styles.footer}>
        <Link href="/(auth)/login">
          <AppText color={colors.blueBright}>{t('signIn')}</AppText>
        </Link>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  footer: { marginTop: spacing.lg, alignItems: 'center' },
});
