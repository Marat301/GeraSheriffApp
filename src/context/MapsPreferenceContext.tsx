import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  availableMapsApps,
  defaultMapsApp,
  PreferredMapsApp,
  readMapsOnboardingDone,
  readPreferredMapsApp,
  writeMapsOnboardingDone,
  writePreferredMapsApp,
} from '../services/mapsPreference';
import { useLanguage } from './LanguageContext';

type MapsPreferenceContextValue = {
  preferredMapsApp: PreferredMapsApp;
  availableApps: PreferredMapsApp[];
  needsMapsOnboarding: boolean;
  setPreferredMapsApp: (app: PreferredMapsApp) => Promise<void>;
  completeMapsOnboarding: (app: PreferredMapsApp) => Promise<void>;
};

const MapsPreferenceContext = createContext<MapsPreferenceContextValue | null>(null);

export function MapsPreferenceProvider({ children }: { children: React.ReactNode }) {
  const { needsLanguageOnboarding } = useLanguage();
  const [preferredMapsApp, setPreferredState] = useState<PreferredMapsApp>(defaultMapsApp());
  const [needsMapsOnboarding, setNeedsMapsOnboarding] = useState(false);
  const [ready, setReady] = useState(false);

  const availableApps = useMemo(() => availableMapsApps(), []);

  useEffect(() => {
    Promise.all([readPreferredMapsApp(), readMapsOnboardingDone()])
      .then(([stored, onboardingDone]) => {
        if (stored && availableApps.includes(stored)) {
          setPreferredState(stored);
        } else {
          setPreferredState(defaultMapsApp());
        }
        setNeedsMapsOnboarding(!onboardingDone);
      })
      .catch(() => {
        setPreferredState(defaultMapsApp());
        setNeedsMapsOnboarding(true);
      })
      .finally(() => {
        setReady(true);
      });
  }, [availableApps]);

  const setPreferredMapsApp = useCallback(async (app: PreferredMapsApp) => {
    setPreferredState(app);
    try {
      await writePreferredMapsApp(app);
    } catch {
      // Keep in-memory preference
    }
  }, []);

  const completeMapsOnboarding = useCallback(async (app: PreferredMapsApp) => {
    setPreferredState(app);
    setNeedsMapsOnboarding(false);
    try {
      await writePreferredMapsApp(app);
      await writeMapsOnboardingDone();
    } catch {
      // Onboarding dismissed in-session; may show again next launch
    }
  }, []);

  const value = useMemo(
    () => ({
      preferredMapsApp,
      availableApps,
      // Only show maps onboarding after language onboarding is done
      needsMapsOnboarding: !needsLanguageOnboarding && needsMapsOnboarding,
      setPreferredMapsApp,
      completeMapsOnboarding,
    }),
    [
      preferredMapsApp,
      availableApps,
      needsLanguageOnboarding,
      needsMapsOnboarding,
      setPreferredMapsApp,
      completeMapsOnboarding,
    ]
  );

  if (!ready) return null;

  return (
    <MapsPreferenceContext.Provider value={value}>{children}</MapsPreferenceContext.Provider>
  );
}

export function useMapsPreference() {
  const ctx = useContext(MapsPreferenceContext);
  if (!ctx) throw new Error('useMapsPreference must be used within MapsPreferenceProvider');
  return ctx;
}
