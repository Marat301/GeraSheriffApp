import { PreferredLanguage } from '../types';

const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_TRANSLATE_API_KEY?.trim();

const UA =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';

export class TranslateError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TranslateError';
  }
}

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCharCode(parseInt(h, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

async function translateWithGoogleCloud(
  text: string,
  source: PreferredLanguage
): Promise<string> {
  const res = await fetch(
    `https://translation.googleapis.com/language/translate/v2?key=${GOOGLE_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        q: text,
        source,
        target: 'en',
        format: 'text',
      }),
    }
  );

  if (!res.ok) {
    throw new TranslateError(`Cloud translate HTTP ${res.status}`);
  }

  const data = (await res.json()) as {
    data?: { translations?: { translatedText?: string }[] };
  };
  const out = data.data?.translations?.[0]?.translatedText?.trim();
  if (!out) throw new TranslateError('Empty cloud translation');
  return decodeHtmlEntities(out);
}

async function translateWithGtx(text: string, source: PreferredLanguage): Promise<string> {
  const url =
    'https://translate.googleapis.com/translate_a/single' +
    `?client=gtx&sl=${encodeURIComponent(source)}&tl=en&dt=t` +
    `&q=${encodeURIComponent(text)}`;

  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) {
    throw new TranslateError(`Translate HTTP ${res.status}`);
  }

  const raw = await res.text();
  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    throw new TranslateError('Unexpected translate response');
  }

  if (!Array.isArray(data) || !Array.isArray(data[0])) {
    throw new TranslateError('Unexpected translate response');
  }

  const out = data[0]
    .map((chunk) => (Array.isArray(chunk) && typeof chunk[0] === 'string' ? chunk[0] : ''))
    .join('')
    .trim();

  if (!out) throw new TranslateError('Empty translation');
  return decodeHtmlEntities(out);
}

async function translateWithMyMemory(
  text: string,
  source: PreferredLanguage
): Promise<string> {
  const url =
    'https://api.mymemory.translated.net/get' +
    `?q=${encodeURIComponent(text)}&langpair=${encodeURIComponent(`${source}|en`)}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new TranslateError(`MyMemory HTTP ${res.status}`);
  }

  const data = (await res.json()) as {
    responseStatus?: number;
    responseData?: { translatedText?: string };
  };

  if (data.responseStatus && data.responseStatus !== 200) {
    throw new TranslateError(`MyMemory status ${data.responseStatus}`);
  }

  const out = data.responseData?.translatedText?.trim();
  if (!out) throw new TranslateError('Empty MyMemory translation');

  // MyMemory sometimes echoes the query or returns an error string in translatedText
  if (/^MYMEMORY WARNING/i.test(out)) {
    throw new TranslateError(out);
  }

  return decodeHtmlEntities(out);
}

/**
 * Translate user text from their preferred language into English
 * (for speaking/showing to English-speaking officers).
 */
export async function translateToEnglish(
  text: string,
  source: PreferredLanguage
): Promise<string> {
  const trimmed = text.trim();
  if (!trimmed) return '';

  if (GOOGLE_KEY) {
    try {
      return await translateWithGoogleCloud(trimmed, source);
    } catch {
      // Fall through to free providers
    }
  }

  try {
    return await translateWithMyMemory(trimmed, source);
  } catch {
    return translateWithGtx(trimmed, source);
  }
}
