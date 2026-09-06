import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, Pressable, StyleSheet, View } from 'react-native';
import { AppText } from '../../src/components/AppText';
import { Button } from '../../src/components/Button';
import { LanguageToggle } from '../../src/components/LanguageToggle';
import { Screen } from '../../src/components/Screen';
import { TextField } from '../../src/components/TextField';
import { useAuth } from '../../src/context/AuthContext';
import { useLanguage } from '../../src/context/LanguageContext';
import {
  LANGUAGE_TOGGLE_CODE,
  PREFERRED_LANGUAGE_LABEL_KEY,
  PREFERRED_LANGUAGES,
} from '../../src/i18n/languages';
import { TranslationKey } from '../../src/i18n/translations';
import { colors, radius, spacing } from '../../src/theme/colors';
import { PreferredLanguage, USState } from '../../src/types';

const STATES: { id: USState; labelKey: TranslationKey }[] = [
  { id: 'FL', labelKey: 'florida' },
  { id: 'CA', labelKey: 'california' },
  { id: 'NY', labelKey: 'newYork' },
];

export default function ProfileScreen() {
  const { t, preferredLanguage, setPreferredLanguage } = useLanguage();
  const { user, isGuest, updateProfile, signOut } = useAuth();
  const router = useRouter();
  const [name, setName] = useState(user?.name ?? '');
  const [state, setState] = useState<USState>(user?.state ?? 'FL');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setState(user.state);
      // Sync preferred pair from profile without kicking the user out of English
      void setPreferredLanguage(user.language, { activate: false });
    }
  }, [user, setPreferredLanguage]);

  const onSave = async () => {
    if (!user) return;
    setSaving(true);
    await updateProfile({ name, state, language: preferredLanguage });
    setSaving(false);
    Alert.alert(t('saved'));
  };

  const onSelectPreferred = async (lang: PreferredLanguage) => {
    await setPreferredLanguage(lang);
  };

  const languageSection = (
    <View style={styles.section}>
      <AppText variant="label" style={{ marginBottom: spacing.xs }}>
        {t('language')}
      </AppText>
      <AppText muted style={{ marginBottom: spacing.md }}>
        {t('languagePairHint')}
      </AppText>
      {PREFERRED_LANGUAGES.map((lang) => {
        const active = preferredLanguage === lang;
        return (
          <Pressable
            key={lang}
            onPress={() => void onSelectPreferred(lang)}
            style={[styles.langChip, active && styles.langActive]}
          >
            <View style={{ flex: 1 }}>
              <AppText color={active ? colors.white : colors.textSecondary}>
                {t(PREFERRED_LANGUAGE_LABEL_KEY[lang])}
              </AppText>
              <AppText
                variant="caption"
                color={active ? '#BBDEFB' : colors.textMuted}
                style={{ marginTop: 2 }}
              >
                {LANGUAGE_TOGGLE_CODE[lang]}/EN
              </AppText>
            </View>
          </Pressable>
        );
      })}
      <View style={styles.toggleRow}>
        <LanguageToggle />
      </View>
    </View>
  );

  if (isGuest || !user) {
    return (
      <Screen>
        <AppText variant="hero">{t('profileTitle')}</AppText>
        <AppText muted style={{ marginVertical: spacing.md }}>
          {t('loginRequired')}
        </AppText>
        {languageSection}
        <Button title={t('signIn')} onPress={() => router.push('/(auth)/login')} />
        <Button
          title={t('signUp')}
          variant="outline"
          onPress={() => router.push('/(auth)/signup')}
          style={{ marginTop: spacing.sm }}
        />
      </Screen>
    );
  }

  return (
    <Screen>
      <AppText variant="hero">{t('profileTitle')}</AppText>
      <AppText muted style={{ marginBottom: spacing.lg }}>
        {user.email}
      </AppText>

      <TextField label={t('name')} value={name} onChangeText={setName} />

      {languageSection}

      <AppText variant="label" style={{ marginBottom: spacing.sm }}>
        {t('state')}
      </AppText>
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
            <AppText variant="caption">{t('comingSoon')}</AppText>
          ) : null}
        </Pressable>
      ))}
      <AppText variant="caption" style={{ marginBottom: spacing.md }}>
        {t('comingSoonStates')}
      </AppText>

      <Button title={t('save')} onPress={onSave} loading={saving} />
      <Button
        title={t('signOut')}
        variant="secondary"
        onPress={async () => {
          await signOut();
          router.replace('/(auth)/login');
        }}
        style={{ marginTop: spacing.sm }}
      />
      <AppText variant="caption" style={styles.version}>
        {t('version')}
      </AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: spacing.lg,
  },
  langChip: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  langActive: {
    borderColor: colors.blue,
    backgroundColor: colors.blueMuted,
  },
  toggleRow: {
    marginTop: spacing.sm,
    alignItems: 'flex-start',
  },
  stateChip: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  stateActive: {
    borderColor: colors.blue,
    backgroundColor: colors.blueMuted,
  },
  version: {
    textAlign: 'center',
    marginTop: spacing.lg,
  },
});
