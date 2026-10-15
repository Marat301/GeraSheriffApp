import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import {
  isLanguage,
  isPreferredLanguage,
  normalizePreferred,
} from '../i18n/languages';
import { translations, TranslationKey } from '../i18n/translations';
import { Language, PreferredLanguage } from '../types';

const LANG_KEY = '@gera_language';
const PREFERRED_KEY = '@gera_preferred_language';
const ENGLISH_ONLY_KEY = '@gera_english_only';
/** Bump suffix when onboarding copy/flow changes so existing installs see it once more */
const ONBOARDING_KEY = '@gera_language_onboarding_v3';

/** Always English in disclaimers — do not translate this name. */
const LEGAL_NAME_EN = 'German Bickbau (Gera Sheriff)';

type LanguageContextValue = {
  /** Currently displayed UI language (EN or the preferred language) */
  language: Language;
  /** Non-English side of the top toggle (RU / SP / PT / HT) */
  preferredLanguage: PreferredLanguage;
  /** True when the user chose English as their language — no EN/XX toggle */
  englishOnly: boolean;
  /** False when englishOnly — hide the floating language swap */
  showLanguageToggle: boolean;
  needsLanguageOnboarding: boolean;
  setLanguage: (lang: Language) => Promise<void>;
  setPreferredLanguage: (
    lang: PreferredLanguage,
    options?: { activate?: boolean }
  ) => Promise<void>;
  /** Choose English-only mode (hides language toggle) */
  setEnglishOnly: () => Promise<void>;
  completeLanguageOnboarding: (lang: Language) => Promise<void>;
  t: (key: TranslationKey) => string;
  toggleLanguage: () => Promise<void>;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [preferredLanguage, setPreferredState] = useState<PreferredLanguage>('ru');
  const [englishOnly, setEnglishOnlyState] = useState(false);
  const [needsLanguageOnboarding, setNeedsOnboarding] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    Promise.all([
      AsyncStorage.getItem(LANG_KEY),
      AsyncStorage.getItem(PREFERRED_KEY),
      AsyncStorage.getItem(ONBOARDING_KEY),
      AsyncStorage.getItem(ENGLISH_ONLY_KEY),
    ])
      .then(([storedActive, storedPreferred, onboardingDone, storedEnglishOnly]) => {
        const preferred = normalizePreferred(
          storedPreferred ?? (isPreferredLanguage(storedActive) ? storedActive : 'ru')
        );
        setPreferredState(preferred);

        const onlyEnglish = storedEnglishOnly === '1';
        setEnglishOnlyState(onlyEnglish);

        if (onlyEnglish || storedActive === 'en') {
          setLanguageState('en');
        } else if (isLanguage(storedActive) && storedActive !== 'en') {
          setLanguageState(storedActive);
          setPreferredState(storedActive);
        } else {
          // First launch (or cleared storage): start in English until they pick
          setLanguageState('en');
        }

        setNeedsOnboarding(onboardingDone !== '1');
      })
      .catch(() => {
        setLanguageState('en');
        setPreferredState('ru');
        setEnglishOnlyState(false);
        setNeedsOnboarding(true);
      })
      .finally(() => {
        setReady(true);
      });
  }, []);

  const setLanguage = useCallback(async (lang: Language) => {
    setLanguageState(lang);
    try {
      await AsyncStorage.setItem(LANG_KEY, lang);
      if (isPreferredLanguage(lang)) {
        setPreferredState(lang);
        await AsyncStorage.setItem(PREFERRED_KEY, lang);
      }
    } catch {
      // Keep in-memory language; persistence can retry on next change
    }
  }, []);

  const setPreferredLanguage = useCallback(
    async (lang: PreferredLanguage, options?: { activate?: boolean }) => {
      const activate = options?.activate ?? true;
      setPreferredState(lang);
      setEnglishOnlyState(false);
      if (activate) {
        setLanguageState(lang);
      }
      try {
        if (activate) {
          await AsyncStorage.multiSet([
            [PREFERRED_KEY, lang],
            [LANG_KEY, lang],
            [ENGLISH_ONLY_KEY, '0'],
          ]);
        } else {
          await AsyncStorage.multiSet([
            [PREFERRED_KEY, lang],
            [ENGLISH_ONLY_KEY, '0'],
          ]);
        }
      } catch {
        // Keep in-memory preference
      }
    },
    []
  );

  const setEnglishOnly = useCallback(async () => {
    setEnglishOnlyState(true);
    setLanguageState('en');
    try {
      await AsyncStorage.multiSet([
        [LANG_KEY, 'en'],
        [ENGLISH_ONLY_KEY, '1'],
      ]);
    } catch {
      // Keep in-memory preference
    }
  }, []);

  const completeLanguageOnboarding = useCallback(async (lang: Language) => {
    setNeedsOnboarding(false);
    if (lang === 'en') {
      setEnglishOnlyState(true);
      setLanguageState('en');
      try {
        await AsyncStorage.multiSet([
          [LANG_KEY, 'en'],
          [ENGLISH_ONLY_KEY, '1'],
          [ONBOARDING_KEY, '1'],
        ]);
      } catch {
        // Onboarding dismissed in-session; may show again next launch
      }
      return;
    }

    setEnglishOnlyState(false);
    setPreferredState(lang);
    setLanguageState(lang);
    try {
      await AsyncStorage.multiSet([
        [PREFERRED_KEY, lang],
        [LANG_KEY, lang],
        [ENGLISH_ONLY_KEY, '0'],
        [ONBOARDING_KEY, '1'],
      ]);
    } catch {
      // Onboarding dismissed in-session; may show again next launch
    }
  }, []);

  const toggleLanguage = useCallback(async () => {
    if (englishOnly) return;
    const next: Language = language === 'en' ? preferredLanguage : 'en';
    await setLanguage(next);
  }, [englishOnly, language, preferredLanguage, setLanguage]);

  const t = useCallback(
    (key: TranslationKey) => {
      const value = translations[language][key] ?? translations.en[key] ?? key;
      // Legal name must stay English in every UI language
      if (key === 'disclaimer') return `${LEGAL_NAME_EN} ${value}`;
      return value;
    },
    [language]
  );

  const value = useMemo(
    () => ({
      language,
      preferredLanguage,
      englishOnly,
      showLanguageToggle: !englishOnly,
      needsLanguageOnboarding,
      setLanguage,
      setPreferredLanguage,
      setEnglishOnly,
      completeLanguageOnboarding,
      t,
      toggleLanguage,
    }),
    [
      language,
      preferredLanguage,
      englishOnly,
      needsLanguageOnboarding,
      setLanguage,
      setPreferredLanguage,
      setEnglishOnly,
      completeLanguageOnboarding,
      t,
      toggleLanguage,
    ]
  );

  if (!ready) return null;

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
