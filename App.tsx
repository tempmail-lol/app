import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import {Inter_300Light, useFonts} from "@expo-google-fonts/inter";
import CoolStorage from "./util/CoolStorage";
import {Text, View} from "react-native";
import EasterEggScreen from "./screens/EasterEggScreen";
import {useState} from "react";

// noinspection JSUnusedGlobalSymbols
export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = "dark";
    
    const [easterEgg, setEasterEgg] = useState(false);
    
    let [fontsLoaded] = useFonts({
        Inter_300Light,
    });
    
    setInterval(() => {
        if(CoolStorage.easter_egg_time) {
            setEasterEgg(true);
        } else {
            setEasterEgg(false);
        }
    }, 100);
    
    const norm = (
        <SafeAreaProvider>
            <Navigation colorScheme={colorScheme}/>
            <StatusBar/>
        </SafeAreaProvider>
    );
    
    const egg = (
        <SafeAreaProvider>
            <EasterEggScreen/>
            <StatusBar/>
        </SafeAreaProvider>
    );
    
    if(!isLoadingComplete || !fontsLoaded) {
        return null;
    } else {
        return (
            easterEgg ? egg : norm
        );
    }
}
