import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import {useFonts, Inter_300Light} from "@expo-google-fonts/inter";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = "dark";
  
  let [fontsLoaded] = useFonts({
    Inter_300Light,
  })
  
  if (!isLoadingComplete || !fontsLoaded) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
