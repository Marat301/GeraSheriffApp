import { PreferredLanguage } from '../types';

/** BCP-47 locales for speech recognition in the user's preferred language */
export function speechLocaleForPreferred(lang: PreferredLanguage): string {
  switch (lang) {
    case 'ru':
      return 'ru-RU';
    case 'es':
      return 'es-US';
    case 'pt':
      return 'pt-BR';
    case 'ht':
      // Haitian Creole support varies by device; French is a common fallback
      return 'fr-FR';
    default:
      return 'en-US';
  }
}
