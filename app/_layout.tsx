import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import InitialScreen from '../components/src/screen/initialPage/InitialScreen'
import { useColorScheme } from '@/hooks/useColorScheme';
import LoginScreen from '../components/src/screen/loginScreen/LoginPage'
import TellMorePage from '../components/src/screen/tellMorePage/TellMorePage'
import AgeScreen from './../components/src/screen/AgeScreen/AgeScreen';
import Otp from '@/components/src/screen/Otp/OtpScreen';
// LoginScreen tellMorePage
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Manrope: require('../assets/fonts/Manrope-Bold.ttf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* <TellMorePage/> */}
      <AgeScreen />
      {/* <Otp /> */}
    </ThemeProvider>
  );
}
