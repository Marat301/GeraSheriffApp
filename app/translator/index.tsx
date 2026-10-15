import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Keyboard,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import { AppText } from '../../src/components/AppText';
import { Screen } from '../../src/components/Screen';
import { StackBackButton } from '../../src/components/StackBackButton';
import { TranslatorSourceInput } from '../../src/components/TranslatorSourceInput';
import { useLanguage } from '../../src/context/LanguageContext';
import { translateToEnglish } from '../../src/services/translate';
import { colors, radius, spacing } from '../../src/theme/colors';
import { speakPhrase, stopSpeaking } from '../../src/utils/speak';
import {
  getSpeechRecognitionModule,
  isSpeechRecognitionNativeAvailable,
  useSpeechRecognitionEventSafe,
} from '../../src/utils/speechRecognition';
import { speechLocaleForPreferred } from '../../src/utils/speechLocale';

const DEBOUNCE_MS = 450;

export default function TranslatorScreen() {
  const { t, preferredLanguage } = useLanguage();
  const router = useRouter();
  const [sourceText, setSourceText] = useState('');
  const [englishText, setEnglishText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [listening, setListening] = useState(false);
  const requestId = useRef(0);
  const baseBeforeListen = useRef('');

  const canSpeak = Boolean(englishText.trim()) && !loading;
  const micNative = isSpeechRecognitionNativeAvailable();

  useSpeechRecognitionEventSafe('result', (event) => {
    const transcript = event?.results?.[0]?.transcript?.trim();
    if (!transcript) return;
    const prefix = baseBeforeListen.current.trim();
    setSourceText(prefix ? `${prefix} ${transcript}` : transcript);
  });

  useSpeechRecognitionEventSafe('end', () => {
    setListening(false);
  });

  useSpeechRecognitionEventSafe('error', (event) => {
    setListening(false);
    if (event?.error === 'aborted') return;
    if (event?.error === 'not-allowed') {
      Alert.alert(t('translator'), t('translatorMicDenied'));
      return;
    }
    if (event?.error === 'no-speech') return;
  });

  useEffect(() => {
    return () => {
      void stopSpeaking();
      try {
        getSpeechRecognitionModule()?.abort();
      } catch {
        // ignore
      }
    };
  }, []);

  useEffect(() => {
    const trimmed = sourceText.trim();
    if (!trimmed) {
      requestId.current += 1;
      setEnglishText('');
      setError(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    const id = ++requestId.current;
    const timer = setTimeout(() => {
      void (async () => {
        try {
          const out = await translateToEnglish(trimmed, preferredLanguage);
          if (id !== requestId.current) return;
          setEnglishText(out);
          setError(null);
        } catch {
          if (id !== requestId.current) return;
          setEnglishText('');
          setError(t('translatorError'));
        } finally {
          if (id === requestId.current) setLoading(false);
        }
      })();
    }, DEBOUNCE_MS);

    return () => clearTimeout(timer);
  }, [sourceText, preferredLanguage, t]);

  const stopListening = () => {
    try {
      getSpeechRecognitionModule()?.stop();
    } catch {
      // ignore
    }
    setListening(false);
  };

  const onClear = () => {
    void stopSpeaking();
    stopListening();
    Keyboard.dismiss();
    requestId.current += 1;
    setSourceText('');
    setEnglishText('');
    setError(null);
    setLoading(false);
  };

  const toggleDictate = async () => {
    Keyboard.dismiss();
    void stopSpeaking();

    if (listening) {
      stopListening();
      return;
    }

    const mod = getSpeechRecognitionModule();
    if (!mod) {
      Alert.alert(t('translator'), t('translatorMicNeedsBuild'));
      return;
    }

    if (!mod.isRecognitionAvailable()) {
      Alert.alert(t('translator'), t('translatorMicUnavailable'));
      return;
    }

    const result = await mod.requestPermissionsAsync();
    if (!result.granted) {
      Alert.alert(t('translator'), t('translatorMicDenied'));
      return;
    }

    baseBeforeListen.current = sourceText;
    setListening(true);
    try {
      mod.start({
        lang: speechLocaleForPreferred(preferredLanguage),
        interimResults: true,
        continuous: false,
        maxAlternatives: 1,
      });
    } catch {
      setListening(false);
      Alert.alert(t('translator'), t('translatorMicUnavailable'));
    }
  };

  const onSpeak = () => {
    if (!canSpeak) return;
    stopListening();
    Keyboard.dismiss();
    void speakPhrase(englishText, { language: 'en-US' });
  };

  const openPoliceCards = () => {
    void stopSpeaking();
    stopListening();
    Keyboard.dismiss();
    router.replace('/police-cards' as never);
  };

  return (
    <Screen>
      <Stack.Screen
        options={{
          title: t('translator'),
          headerLeft: () => <StackBackButton />,
        }}
      />

      <AppText muted style={styles.intro}>
        {t('translatorIntro')}
      </AppText>

      <View style={styles.fieldHeader}>
        <AppText variant="label">{t('translatorYourLanguage')}</AppText>
        {sourceText.trim() ? (
          <Pressable onPress={onClear} hitSlop={8}>
            <AppText color={colors.blueBright} style={styles.clearLink}>
              {t('translatorClear')}
            </AppText>
          </Pressable>
        ) : null}
      </View>

      <View style={styles.inputWrap}>
        <TranslatorSourceInput
          value={sourceText}
          onChangeText={setSourceText}
          placeholder={t('translatorPlaceholder')}
        />
        <Pressable
          onPress={() => void toggleDictate()}
          style={({ pressed }) => [
            styles.micBtn,
            listening && styles.micBtnActive,
            !micNative && styles.micBtnMuted,
            pressed && { opacity: 0.88 },
          ]}
          accessibilityRole="button"
          accessibilityLabel={listening ? t('translatorListening') : t('translatorDictate')}
        >
          <Ionicons
            name={listening ? 'stop-circle' : 'mic'}
            size={22}
            color={colors.white}
          />
        </Pressable>
      </View>
      {listening ? (
        <AppText color={colors.blueBright} style={styles.listeningHint}>
          {t('translatorListening')}
        </AppText>
      ) : (
        <AppText muted style={styles.listeningHint}>
          {micNative ? t('translatorKeyboardHint') : t('translatorMicNeedsBuild')}
        </AppText>
      )}

      {error ? (
        <AppText color={colors.danger} style={{ marginBottom: spacing.md }}>
          {error}
        </AppText>
      ) : null}

      <AppText variant="label" style={{ marginBottom: spacing.xs }}>
        {t('translatorEnglish')}
      </AppText>

      <View style={styles.outputCard}>
        <View style={styles.outputBody}>
          {loading ? (
            <ActivityIndicator color={colors.blueBright} />
          ) : (
            <AppText variant="subtitle" style={styles.outputText}>
              {englishText || '—'}
            </AppText>
          )}
        </View>

        <Pressable
          onPress={onSpeak}
          disabled={!canSpeak}
          style={({ pressed }) => [
            styles.speakBtn,
            !canSpeak && styles.speakBtnDisabled,
            pressed && canSpeak && styles.speakBtnPressed,
          ]}
          accessibilityRole="button"
          accessibilityLabel={t('translatorSpeakEnglish')}
        >
          <Ionicons name="volume-high" size={22} color={colors.white} />
          <AppText color={colors.white} style={styles.speakLabel}>
            {t('translatorSpeakEnglish')}
          </AppText>
        </Pressable>
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t('translatorOpenPoliceCards')}
        onPress={openPoliceCards}
        style={({ pressed }) => [styles.cardsCta, pressed && styles.cardsCtaPressed]}
      >
        <View style={styles.cardsIcon}>
          <Ionicons name="chatbubbles" size={22} color={colors.blueBright} />
        </View>
        <View style={styles.cardsText}>
          <AppText variant="caption" color={colors.textMuted}>
            {t('translatorOpenPoliceCardsHint')}
          </AppText>
          <AppText variant="subtitle" color={colors.white} style={{ marginTop: 2 }}>
            {t('translatorOpenPoliceCards')}
          </AppText>
        </View>
        <Ionicons name="chevron-forward" size={20} color={colors.blueBright} />
      </Pressable>

      <AppText variant="caption" style={styles.disclaimer}>
        {t('translatorDisclaimer')}
      </AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  intro: {
    marginBottom: spacing.lg,
  },
  fieldHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.xs,
  },
  clearLink: {
    fontWeight: '600',
    fontSize: 14,
  },
  inputWrap: {
    position: 'relative',
    marginBottom: spacing.xs,
  },
  micBtn: {
    position: 'absolute',
    right: spacing.sm,
    bottom: spacing.sm,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.blueBright,
  },
  micBtnActive: {
    backgroundColor: colors.danger,
    borderColor: colors.danger,
  },
  micBtnMuted: {
    opacity: 0.55,
  },
  listeningHint: {
    marginBottom: spacing.md,
    fontSize: 13,
  },
  outputCard: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    overflow: 'hidden',
    marginBottom: spacing.md,
  },
  outputBody: {
    minHeight: 100,
    padding: spacing.md,
    justifyContent: 'center',
  },
  outputText: {
    lineHeight: 26,
  },
  speakBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    backgroundColor: colors.blue,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: colors.blueBright,
  },
  speakBtnDisabled: {
    opacity: 0.4,
  },
  speakBtnPressed: {
    opacity: 0.88,
  },
  speakLabel: {
    fontWeight: '700',
    fontSize: 16,
  },
  cardsCta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.lg,
  },
  cardsCtaPressed: {
    opacity: 0.9,
    borderColor: colors.blue,
    backgroundColor: colors.blueMuted,
  },
  cardsIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.blueGlow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardsText: {
    flex: 1,
  },
  disclaimer: {
    textAlign: 'center',
  },
});
