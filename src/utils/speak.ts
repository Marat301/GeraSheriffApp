import { Audio, InterruptionModeAndroid, InterruptionModeIOS } from 'expo-av';
import * as Speech from 'expo-speech';
import { Platform } from 'react-native';

let audioReady: Promise<void> | null = null;
let silentSound: Audio.Sound | null = null;

async function ensurePlaybackAudioMode() {
  if (!audioReady) {
    audioReady = (async () => {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        playsInSilentModeIOS: true,
        staysActiveInBackground: false,
        shouldDuckAndroid: true,
        playThroughEarpieceAndroid: false,
        interruptionModeIOS: InterruptionModeIOS.DuckOthers,
        interruptionModeAndroid: InterruptionModeAndroid.DuckOthers,
      });

      // Activate a media playback session so TTS follows media volume
      // (not the ringer) and can play with ringer / silent switch off.
      try {
        const { sound } = await Audio.Sound.createAsync(
          require('../../assets/silent.wav'),
          { shouldPlay: false, volume: 0.01, isLooping: false }
        );
        silentSound = sound;
      } catch {
        // Non-fatal — Android often still works after setAudioModeAsync alone
      }
    })();
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
  await ensurePlaybackAudioMode();

  try {
    if (silentSound) {
      await silentSound.setPositionAsync(0);
      await silentSound.playAsync();
    }
  } catch {
    // continue to speech
  }

  Speech.stop();
  Speech.speak(phrase, {
    language,
    volume: 1.0,
    rate: 0.95,
    ...(Platform.OS === 'ios' ? { useApplicationAudioSession: true } : null),
  });
}

export async function stopSpeaking() {
  Speech.stop();
  try {
    await silentSound?.stopAsync();
  } catch {
    // ignore
  }
}
