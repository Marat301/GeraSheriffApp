import { PreferredLanguage } from '../types';

/** Body content is currently authored in EN + RU only. */
export function usesRussianContent(language: string): boolean {
  return language === 'ru';
}

export function pickLocalized<T>(language: string, en: T, ru: T): T {
  return usesRussianContent(language) ? ru : en;
}

const INTERPRETER_NAME: Record<PreferredLanguage, { en: string; native: string }> = {
  ru: { en: 'Russian', native: 'русского' },
  es: { en: 'Spanish', native: 'español' },
  pt: { en: 'Portuguese', native: 'português' },
  ht: { en: 'Haitian Creole', native: 'Kreyòl ayisyen' },
};

/** English phrase shown/spoken to an officer for the interpreter card */
export function interpreterPhraseEn(preferred: PreferredLanguage): string {
  const name = INTERPRETER_NAME[preferred].en;
  return `I don't understand English. Please provide a ${name} interpreter.`;
}

/** User-facing translation of the interpreter request */
export function interpreterPhraseNative(preferred: PreferredLanguage): string {
  switch (preferred) {
    case 'ru':
      return 'Я не понимаю английский. Пожалуйста, предоставьте переводчика на русский язык.';
    case 'es':
      return 'No entiendo inglés. Por favor proporcione un intérprete de español.';
    case 'pt':
      return 'Eu não entendo inglês. Por favor, forneça um intérprete de português.';
    case 'ht':
      return 'Mwen pa konprann anglè. Tanpri, ban mwen yon entèprèt kreyòl ayisyen.';
  }
}

/**
 * Rewrite EN/RU copy that hardcodes “Russian interpreter” so ES/PT/HT
 * (and RU) users see their own language.
 */
export function localizeInterpreterMentions(
  text: string,
  preferred: PreferredLanguage
): string {
  const langEn = INTERPRETER_NAME[preferred].en;
  const phrase = interpreterPhraseEn(preferred);
  let out = text;
  out = out.replace(/[“"]I need a Russian interpreter\.[”"]/g, `“${phrase}”`);
  out = out.replace(/I need a Russian interpreter/g, phrase);
  out = out.replace(/Ask for a Russian interpreter/g, `Ask for a ${langEn} interpreter`);
  out = out.replace(/ask police for a Russian interpreter/gi, `ask police for a ${langEn} interpreter`);
  out = out.replace(/request a Russian interpreter/gi, `request a ${langEn} interpreter`);
  out = out.replace(/need a Russian interpreter/gi, `need a ${langEn} interpreter`);
  out = out.replace(/a Russian interpreter/g, `a ${langEn} interpreter`);
  out = out.replace(/русского переводчика/g, 'переводчика на русский язык');
  return out;
}

export function interpreterSpeakLocale(preferred: PreferredLanguage): string {
  switch (preferred) {
    case 'ru':
      return 'ru-RU';
    case 'es':
      return 'es-US';
    case 'pt':
      return 'pt-BR';
    case 'ht':
      return 'fr-FR'; // closest commonly available TTS; Creole voices vary by device
  }
}

export function preferredLanguageLabel(preferred: PreferredLanguage): string {
  switch (preferred) {
    case 'ru':
      return 'Русский';
    case 'es':
      return 'Español';
    case 'pt':
      return 'Português';
    case 'ht':
      return 'Kreyòl';
  }
}
