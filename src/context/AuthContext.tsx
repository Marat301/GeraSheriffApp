import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { PreferredLanguage, USState, UserProfile } from '../types';
import { normalizePreferred } from '../i18n/languages';

const USERS_KEY = '@gera_users';
const SESSION_KEY = '@gera_session';

type AuthContextValue = {
  user: UserProfile | null;
  loading: boolean;
  signUp: (data: {
    name: string;
    email: string;
    password: string;
    language: PreferredLanguage;
    state: USState;
  }) => Promise<{ ok: true } | { ok: false; error: string }>;
  signIn: (
    email: string,
    password: string,
  ) => Promise<
    { ok: true; language: PreferredLanguage } | { ok: false; error: string }
  >;
  signOut: () => Promise<void>;
  updateProfile: (
    patch: Partial<Pick<UserProfile, 'name' | 'language' | 'state'>>
  ) => Promise<void>;
  requestPasswordReset: (email: string) => Promise<void>;
  continueAsGuest: () => void;
  isGuest: boolean;
};

const AuthContext = createContext<AuthContextValue | null>(null);

async function loadUsers(): Promise<UserProfile[]> {
  const raw = await AsyncStorage.getItem(USERS_KEY);
  const users = raw ? (JSON.parse(raw) as UserProfile[]) : [];
  return users.map((u) => ({
    ...u,
    language: normalizePreferred(u.language as string),
  }));
}

async function saveUsers(users: UserProfile[]) {
  await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isGuest, setIsGuest] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const sessionId = await AsyncStorage.getItem(SESSION_KEY);
      if (sessionId) {
        const users = await loadUsers();
        const found = users.find((u) => u.id === sessionId);
        if (found) setUser(found);
      }
      setLoading(false);
    })();
  }, []);

  const signUp: AuthContextValue['signUp'] = useCallback(async (data) => {
    const users = await loadUsers();
    if (users.some((u) => u.email.toLowerCase() === data.email.toLowerCase())) {
      return { ok: false, error: 'emailExists' };
    }
    const profile: UserProfile = {
      id: `u_${Date.now()}`,
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      password: data.password,
      language: data.language,
      state: data.state,
      createdAt: new Date().toISOString(),
    };
    users.push(profile);
    await saveUsers(users);
    await AsyncStorage.setItem(SESSION_KEY, profile.id);
    setIsGuest(false);
    setUser(profile);
    return { ok: true };
  }, []);

  const signIn: AuthContextValue['signIn'] = useCallback(async (email, password) => {
    const users = await loadUsers();
    const found = users.find(
      (u) => u.email === email.trim().toLowerCase() && u.password === password,
    );
    if (!found) return { ok: false, error: 'invalidCredentials' };
    await AsyncStorage.setItem(SESSION_KEY, found.id);
    setIsGuest(false);
    setUser(found);
    return { ok: true, language: normalizePreferred(found.language as string) };
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem(SESSION_KEY);
    setUser(null);
    setIsGuest(false);
  }, []);

  const updateProfile = useCallback(
    async (patch: Partial<Pick<UserProfile, 'name' | 'language' | 'state'>>) => {
      if (!user) return;
      const users = await loadUsers();
      const idx = users.findIndex((u) => u.id === user.id);
      if (idx < 0) return;
      const updated = { ...users[idx], ...patch };
      users[idx] = updated;
      await saveUsers(users);
      setUser(updated);
    },
    [user],
  );

  const requestPasswordReset = useCallback(async (_email: string) => {
    // Local v1: no email backend — UI shows confirmation message.
  }, []);

  const continueAsGuest = useCallback(() => {
    setIsGuest(true);
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({
      user,
      loading,
      signUp,
      signIn,
      signOut,
      updateProfile,
      requestPasswordReset,
      continueAsGuest,
      isGuest,
    }),
    [
      user,
      loading,
      signUp,
      signIn,
      signOut,
      updateProfile,
      requestPasswordReset,
      continueAsGuest,
      isGuest,
    ],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
