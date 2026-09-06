import { Stack, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StackBackButton } from '../src/components/StackBackButton';
import { AuthProvider, useAuth } from '../src/context/AuthContext';
import { LanguageProvider, useLanguage } from '../src/context/LanguageContext';
import { colors } from '../src/theme/colors';

function RootNavigator() {
  const { user, loading, isGuest } = useAuth();
  const { t } = useLanguage();
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

  const backHeader = {
    headerLeft: () => <StackBackButton />,
    headerBackTitle: '',
    headerBackButtonDisplayMode: 'minimal' as const,
  };

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
        <Stack.Screen name="search" options={{ title: t('search'), ...backHeader }} />
        <Stack.Screen name="articles/index" options={{ title: t('articles'), ...backHeader }} />
        <Stack.Screen name="articles/[id]" options={{ title: t('articles'), ...backHeader }} />
        <Stack.Screen name="videos/[category]" options={{ title: t('videos'), ...backHeader }} />
        <Stack.Screen
          name="emergency/[id]"
          options={{ title: t('emergencyGuides'), ...backHeader }}
        />
        <Stack.Screen
          name="police-cards/index"
          options={{ title: t('policeCards'), ...backHeader }}
        />
        <Stack.Screen
          name="police-cards/[id]"
          options={{ title: t('policeCards'), ...backHeader }}
        />
        <Stack.Screen name="glossary/index" options={{ title: t('glossary'), ...backHeader }} />
        <Stack.Screen
          name="case-roadmap/index"
          options={{ title: t('caseRoadmap'), ...backHeader }}
        />
        <Stack.Screen
          name="law-library/index"
          options={{ title: t('lawLibrary'), ...backHeader }}
        />
        <Stack.Screen
          name="law-library/[category]"
          options={{ title: t('lawLibrary'), ...backHeader }}
        />
        <Stack.Screen
          name="law-library/article/[id]"
          options={{ title: t('lawLibrary'), ...backHeader }}
        />
        <Stack.Screen
          name="law-library/statute-lookup"
          options={{ title: t('statuteLookup'), ...backHeader }}
        />
        <Stack.Screen
          name="law-library/statute/[code]"
          options={{ title: t('statuteLookup'), ...backHeader }}
        />
        <Stack.Screen
          name="playlists/[id]"
          options={{ title: t('playlists'), ...backHeader }}
        />
        <Stack.Screen
          name="emergency-locations/index"
          options={{ title: t('emergencyLocations'), ...backHeader }}
        />
        <Stack.Screen
          name="emergency-locations/[category]"
          options={{ title: t('emergencyLocations'), ...backHeader }}
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
