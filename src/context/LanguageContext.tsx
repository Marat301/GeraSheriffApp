import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { translations, TranslationKey } from '../i18n/translations';
import { Language } from '../types';

const LANG_KEY = '@gera_language';

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => Promise<void>;
  t: (key: TranslationKey) => string;
  toggleLanguage: () => Promise<void>;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ru');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(LANG_KEY).then((stored) => {
      if (stored === 'en' || stored === 'ru') setLanguageState(stored);
      setReady(true);
    });
  }, []);

  const setLanguage = useCallback(async (lang: Language) => {
    setLanguageState(lang);
    await AsyncStorage.setItem(LANG_KEY, lang);
  }, []);

  const toggleLanguage = useCallback(async () => {
    const next = language === 'ru' ? 'en' : 'ru';
    await setLanguage(next);
  }, [language, setLanguage]);

  const t = useCallback(
    (key: TranslationKey) => translations[language][key] ?? key,
    [language],
  );

  const value = useMemo(
    () => ({ language, setLanguage, t, toggleLanguage }),
    [language, setLanguage, t, toggleLanguage],
  );

  if (!ready) return null;

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
