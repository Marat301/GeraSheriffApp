import { requireOptionalNativeModule } from 'expo';
import { useEffect, useRef } from 'react';

type SpeechStartOptions = {
  lang?: string;
  interimResults?: boolean;
  continuous?: boolean;
  maxAlternatives?: number;
};

type SpeechRecognitionModule = {
  isRecognitionAvailable: () => boolean;
  requestPermissionsAsync: () => Promise<{ granted: boolean }>;
  start: (options: SpeechStartOptions) => void;
  stop: () => void;
  abort: () => void;
  addListener: (
    eventName: string,
    listener: (event: unknown) => void
  ) => { remove: () => void };
};

type SpeechPackage = {
  ExpoSpeechRecognitionModule: SpeechRecognitionModule;
};

let cachedPackage: SpeechPackage | null | undefined;

function nativeSpeechModulePresent(): boolean {
  try {
    // Does not throw when the native binary lacks this module (unlike requireNativeModule)
    return requireOptionalNativeModule('ExpoSpeechRecognition') != null;
  } catch {
    return false;
  }
}

/**
 * Lazily load expo-speech-recognition only when the native module is linked.
 * Avoids the "Cannot find native module" crash in Expo Go / older TestFlight builds.
 */
export function loadSpeechRecognition(): SpeechPackage | null {
  if (cachedPackage !== undefined) return cachedPackage;

  if (!nativeSpeechModulePresent()) {
    cachedPackage = null;
    return null;
  }

  try {
    // Safe only after the optional native probe above succeeds
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    cachedPackage = require('expo-speech-recognition') as SpeechPackage;
    return cachedPackage;
  } catch {
    cachedPackage = null;
    return null;
  }
}

export function isSpeechRecognitionNativeAvailable(): boolean {
  return loadSpeechRecognition() != null;
}

export function getSpeechRecognitionModule(): SpeechRecognitionModule | null {
  return loadSpeechRecognition()?.ExpoSpeechRecognitionModule ?? null;
}

/** Safe event subscription — no-ops when native module is missing. */
export function useSpeechRecognitionEventSafe(
  eventName: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  listener: (event: any) => void
) {
  const listenerRef = useRef(listener);
  listenerRef.current = listener;

  useEffect(() => {
    const mod = getSpeechRecognitionModule();
    if (!mod?.addListener) return;
    const sub = mod.addListener(eventName, (event) => {
      listenerRef.current(event);
    });
    return () => sub.remove();
  }, [eventName]);
}
