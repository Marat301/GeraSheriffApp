import { setAudioModeAsync } from 'expo-audio';
import * as Speech from 'expo-speech';
import { Platform } from 'react-native';

let audioReady: Promise<void> | null = null;
let cachedEnglishVoiceId: string | null | undefined;

async function ensurePlaybackAudioMode() {
  if (!audioReady) {
    audioReady = (async () => {
      // Unlock silent-switch playback without starting a sound that can steal the
      // session mid-utterance (playing a short silent clip used to fade TTS out on iOS).
      await setAudioModeAsync({
        playsInSilentMode: true,
        shouldPlayInBackground: false,
        interruptionMode: 'mixWithOthers',
      });
    })().catch((err) => {
      // Allow a later speak attempt to retry audio setup
      audioReady = null;
      throw err;
    });
  }
  await audioReady;
}

function isEnglishVoice(language: string) {
  return /^en([-_]|$)/i.test(language);
}

function isUsEnglish(language: string) {
  return /^en[-_]?us$/i.test(language);
}

function isEnhanced(quality: string | undefined) {
  return quality === Speech.VoiceQuality.Enhanced || quality === 'Enhanced';
}

/**
 * Prefer Enhanced / clear US-English system voices for officer-facing phrases.
 * Falls back to any English voice if none match.
 */
async function pickBestEnglishVoiceId(): Promise<string | undefined> {
  if (cachedEnglishVoiceId !== undefined) {
    return cachedEnglishVoiceId ?? undefined;
  }

  try {
    const voices = await Speech.getAvailableVoicesAsync();
    const english = voices.filter((v) => isEnglishVoice(v.language));
    if (!english.length) {
      cachedEnglishVoiceId = null;
      return undefined;
    }

    const enhanced = english.filter((v) => isEnhanced(v.quality));
    const usEnhanced = enhanced.filter((v) => isUsEnglish(v.language));
    const usAny = english.filter((v) => isUsEnglish(v.language));
    const pool =
      usEnhanced.length > 0
        ? usEnhanced
        : enhanced.length > 0
          ? enhanced
          : usAny.length > 0
            ? usAny
            : english;

    // Prefer known clearer / more natural system voices when present
    const preferredName = [
      /ava/i,
      /zoe/i,
      /samantha/i,
      /nicky/i,
      /karen/i,
      /moira/i,
      /daniel/i,
      /neural/i,
      /natural/i,
      /premium/i,
      /enhanced/i,
    ];
    for (const re of preferredName) {
      const hit = pool.find((v) => re.test(v.name) || re.test(v.identifier));
      if (hit?.identifier) {
        cachedEnglishVoiceId = hit.identifier;
        return hit.identifier;
      }
    }

    cachedEnglishVoiceId = pool[0]?.identifier ?? null;
    return cachedEnglishVoiceId ?? undefined;
  } catch {
    cachedEnglishVoiceId = null;
    return undefined;
  }
}

/**
 * Speak using the media audio route (not the ringer channel).
 * Picks a clearer English voice when available and speaks slightly slower
 * so officers can understand phrases in a live setting.
 */
export async function speakPhrase(
  phrase: string,
  options: { language?: string } = {}
) {
  const language = options.language ?? 'en-US';
  try {
    await ensurePlaybackAudioMode();
  } catch {
    // Continue — Speech often still works without a custom audio mode
  }

  const voice =
    language.toLowerCase().startsWith('en')
      ? await pickBestEnglishVoiceId()
      : undefined;

  try {
    Speech.stop();
    Speech.speak(phrase, {
      language,
      voice,
      volume: 1.0,
      // Slightly slower than default for live comprehension
      rate: Platform.OS === 'ios' ? 0.88 : 0.85,
      pitch: 1.0,
      // Separate session so other audio modules can't deactivate/fade speech mid-phrase.
      ...(Platform.OS === 'ios' ? { useApplicationAudioSession: false } : null),
    });
  } catch {
    // Swallow — callers fire-and-forget; avoid unhandled rejections
  }
}

export async function stopSpeaking() {
  try {
    Speech.stop();
  } catch {
    // ignore
  }
}
