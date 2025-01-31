import { DarkTheme, DefaultTheme, NavigationIndependentTree, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { View } from 'react-native';
import UserNamePage from './../components/src/page/useNamesPage/UserNamePage';
import AgePage from './../components/src/page/agePage/AgePage';
import TellMorePage from './../components/src/page/tellMorePage/TellMorePage';
import NamePage from './../components/src/page/namePage/NamePage';

import RoutingPage from '../components/src/navigation/RoutingPage'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Manrope: require('../assets/fonts/Manrope-Bold.ttf'),
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
   
    <NavigationIndependentTree>
<RoutingPage/>
    </NavigationIndependentTree>


  );
}
