import { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';
import { useAuthStore } from '@/stores/authStore';

/**
 * Landing/gate screen.
 * Checks auth state and redirects to the correct route.
 */
export default function Index() {
  const { isAuthenticated, isHydrated } = useAuthStore();

  useEffect(() => {
    if (!isHydrated) return;

    if (isAuthenticated) {
      router.replace('/(tabs)/home');
    } else {
      router.replace('/auth/login');
    }
  }, [isAuthenticated, isHydrated]);

  return (
    <View className="flex-1 bg-white items-center justify-center">
      <ActivityIndicator size="large" color="#6C63FF" />
    </View>
  );
}
