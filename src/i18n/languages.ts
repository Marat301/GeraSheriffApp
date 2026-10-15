import { Language, PreferredLanguage } from '../types';

export const PREFERRED_LANGUAGES: PreferredLanguage[] = ['ru', 'es', 'pt', 'ht'];

export const LANGUAGE_TOGGLE_CODE: Record<PreferredLanguage, string> = {
  ru: 'RU',
  es: 'SP',
  pt: 'PT',
  ht: 'HT',
};

export const PREFERRED_LANGUAGE_LABEL_KEY: Record<
  PreferredLanguage,
  'russian' | 'spanish' | 'portuguese' | 'frenchCreole'
> = {
  ru: 'russian',
  es: 'spanish',
  pt: 'portuguese',
  ht: 'frenchCreole',
};

/** Native name first, English in parentheses — same in every UI language */
export const LANGUAGE_DISPLAY_LABEL: Record<Language, string> = {
  en: 'English',
  ru: 'Русский (Russian)',
  es: 'Español (Spanish)',
  pt: 'Português (Portuguese)',
  ht: 'Kreyòl ayisyen (Haitian Creole)',
};

export const PREFERRED_LANGUAGE_DISPLAY_LABEL: Record<PreferredLanguage, string> = {
  ru: LANGUAGE_DISPLAY_LABEL.ru,
  es: LANGUAGE_DISPLAY_LABEL.es,
  pt: LANGUAGE_DISPLAY_LABEL.pt,
  ht: LANGUAGE_DISPLAY_LABEL.ht,
};

export function isPreferredLanguage(value: string | null | undefined): value is PreferredLanguage {
  return value === 'ru' || value === 'es' || value === 'pt' || value === 'ht';
}

export function isLanguage(value: string | null | undefined): value is Language {
  return value === 'en' || isPreferredLanguage(value);
}

export function normalizePreferred(value: string | null | undefined): PreferredLanguage {
  if (isPreferredLanguage(value)) return value;
  return 'ru';
}
