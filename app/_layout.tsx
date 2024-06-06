import { Stack, useRouter, useSegments } from "expo-router";
import { AuthProvider, useAuth } from "./authContext";
import { useEffect } from "react";

const StackLayout = () => {
  const { authState } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(main)";

    if (!authState?.authenticated && inAuthGroup) {
      router.replace("/");
    } else if (!authState?.authenticated === true) {
      router.replace("/(main)");
    }
  }, [authState]);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(main)" options={{ headerShown: false }} />
    </Stack>
  );
};

const RootLayoutNav = () => {
  return (
    <AuthProvider>
      <StackLayout />
    </AuthProvider>
  );
};

export default RootLayoutNav;
