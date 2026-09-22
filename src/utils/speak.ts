import { setAudioModeAsync } from 'expo-audio';
import * as Speech from 'expo-speech';
import { Platform } from 'react-native';

let audioReady: Promise<void> | null = null;

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

/**
 * Speak using the media audio route (not the ringer channel).
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

  try {
    Speech.stop();
    Speech.speak(phrase, {
      language,
      volume: 1.0,
      rate: 0.92,
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
