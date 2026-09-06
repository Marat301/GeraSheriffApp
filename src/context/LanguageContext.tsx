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

type LanguageContextValue = {
  /** Currently displayed UI language (EN or the preferred language) */
  language: Language;
  /** Non-English side of the top toggle (RU / SP / PT / FC) */
  preferredLanguage: PreferredLanguage;
  setLanguage: (lang: Language) => Promise<void>;
  setPreferredLanguage: (
    lang: PreferredLanguage,
    options?: { activate?: boolean }
  ) => Promise<void>;
  t: (key: TranslationKey) => string;
  toggleLanguage: () => Promise<void>;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ru');
  const [preferredLanguage, setPreferredState] = useState<PreferredLanguage>('ru');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    Promise.all([AsyncStorage.getItem(LANG_KEY), AsyncStorage.getItem(PREFERRED_KEY)]).then(
      ([storedActive, storedPreferred]) => {
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
          setLanguageState(preferred);
        }
        setReady(true);
      }
    );
  }, []);

  const setLanguage = useCallback(async (lang: Language) => {
    setLanguageState(lang);
    await AsyncStorage.setItem(LANG_KEY, lang);
    if (isPreferredLanguage(lang)) {
      setPreferredState(lang);
      await AsyncStorage.setItem(PREFERRED_KEY, lang);
    }
  }, []);

  const setPreferredLanguage = useCallback(
    async (lang: PreferredLanguage, options?: { activate?: boolean }) => {
      const activate = options?.activate ?? true;
      setPreferredState(lang);
      if (activate) {
        setLanguageState(lang);
        await AsyncStorage.multiSet([
          [PREFERRED_KEY, lang],
          [LANG_KEY, lang],
        ]);
      } else {
        await AsyncStorage.setItem(PREFERRED_KEY, lang);
      }
    },
    []
  );

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
      setLanguage,
      setPreferredLanguage,
      t,
      toggleLanguage,
    }),
    [language, preferredLanguage, setLanguage, setPreferredLanguage, t, toggleLanguage]
  );

  if (!ready) return null;

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
