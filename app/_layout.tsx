import { Stack, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AuthProvider, useAuth } from '../src/context/AuthContext';
import { LanguageProvider } from '../src/context/LanguageContext';
import { colors } from '../src/theme/colors';

function RootNavigator() {
  const { user, loading, isGuest } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    const inAuth = segments[0] === '(auth)';
    const signedIn = !!user || isGuest;

    if (!signedIn && !inAuth) {
      router.replace('/(auth)/login');
    } else if (user && inAuth) {
      router.replace('/(tabs)');
    }
  }, [user, isGuest, loading, segments, router]);

  if (loading) {
    return (
      <View style={{ flex: 1, backgroundColor: colors.black, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color={colors.blue} />
      </View>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.blackSoft },
          headerTintColor: colors.white,
          headerTitleStyle: { fontWeight: '700' },
          contentStyle: { backgroundColor: colors.black },
          headerShadowVisible: false,
          headerBackTitle: '',
          headerBackButtonDisplayMode: 'minimal',
        }}
      >
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="search" options={{ title: 'Search' }} />
        <Stack.Screen name="articles/index" options={{ title: 'Articles' }} />
        <Stack.Screen name="articles/[id]" options={{ title: 'Article' }} />
        <Stack.Screen name="videos/[category]" options={{ title: 'Videos' }} />
        <Stack.Screen name="emergency/[id]" options={{ title: 'Guide' }} />
        <Stack.Screen
          name="police-cards/index"
          options={{ title: 'Police Cards', headerBackTitle: '' }}
        />
        <Stack.Screen
          name="police-cards/[id]"
          options={{ title: 'Card', headerBackTitle: '' }}
        />
        <Stack.Screen name="glossary/index" options={{ title: 'Glossary' }} />
        <Stack.Screen
          name="emergency-locations/index"
          options={{ title: 'Emergency Locations', headerBackTitle: '' }}
        />
        <Stack.Screen
          name="emergency-locations/[category]"
          options={{ title: 'Locations', headerBackTitle: '' }}
        />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <LanguageProvider>
        <AuthProvider>
          <RootNavigator />
        </AuthProvider>
      </LanguageProvider>
    </GestureHandlerRootView>
  );
}
