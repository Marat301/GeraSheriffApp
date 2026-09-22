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
/** Bump suffix when onboarding copy/flow changes so existing installs see it once more */
const ONBOARDING_KEY = '@gera_language_onboarding_v2';

type LanguageContextValue = {
  /** Currently displayed UI language (EN or the preferred language) */
  language: Language;
  /** Non-English side of the top toggle (RU / SP / PT / HT) */
  preferredLanguage: PreferredLanguage;
  needsLanguageOnboarding: boolean;
  setLanguage: (lang: Language) => Promise<void>;
  setPreferredLanguage: (
    lang: PreferredLanguage,
    options?: { activate?: boolean }
  ) => Promise<void>;
  completeLanguageOnboarding: (lang: PreferredLanguage) => Promise<void>;
  t: (key: TranslationKey) => string;
  toggleLanguage: () => Promise<void>;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [preferredLanguage, setPreferredState] = useState<PreferredLanguage>('ru');
  const [needsLanguageOnboarding, setNeedsOnboarding] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    Promise.all([
      AsyncStorage.getItem(LANG_KEY),
      AsyncStorage.getItem(PREFERRED_KEY),
      AsyncStorage.getItem(ONBOARDING_KEY),
    ])
      .then(([storedActive, storedPreferred, onboardingDone]) => {
        const preferred = normalizePreferred(
          storedPreferred ?? (isPreferredLanguage(storedActive) ? storedActive : 'ru')
        );
        setPreferredState(preferred);

        if (storedActive === 'en') {
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
      if (activate) {
        setLanguageState(lang);
      }
      try {
        if (activate) {
          await AsyncStorage.multiSet([
            [PREFERRED_KEY, lang],
            [LANG_KEY, lang],
          ]);
        } else {
          await AsyncStorage.setItem(PREFERRED_KEY, lang);
        }
      } catch {
        // Keep in-memory preference
      }
    },
    []
  );

  const completeLanguageOnboarding = useCallback(async (lang: PreferredLanguage) => {
    setPreferredState(lang);
    setLanguageState(lang);
    setNeedsOnboarding(false);
    try {
      await AsyncStorage.multiSet([
        [PREFERRED_KEY, lang],
        [LANG_KEY, lang],
        [ONBOARDING_KEY, '1'],
      ]);
    } catch {
      // Onboarding dismissed in-session; may show again next launch
    }
  }, []);

  const toggleLanguage = useCallback(async () => {
    const next: Language = language === 'en' ? preferredLanguage : 'en';
    await setLanguage(next);
  }, [language, preferredLanguage, setLanguage]);

  const t = useCallback(
    (key: TranslationKey) =>
      translations[language][key] ?? translations.en[key] ?? key,
    [language]
  );

  const value = useMemo(
    () => ({
      language,
      preferredLanguage,
      needsLanguageOnboarding,
      setLanguage,
      setPreferredLanguage,
      completeLanguageOnboarding,
      t,
      toggleLanguage,
    }),
    [
      language,
      preferredLanguage,
      needsLanguageOnboarding,
      setLanguage,
      setPreferredLanguage,
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
