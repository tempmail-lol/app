import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import {Inter_300Light, useFonts} from "@expo-google-fonts/inter";

import CoolStorage from "./util/CoolStorage";
import EasterEggScreen from "./screens/EasterEggScreen";
import {useState} from "react";
import {Ubuntu_300Light} from "@expo-google-fonts/ubuntu";
import {Roboto_400Regular} from "@expo-google-fonts/roboto";
import {Alert, View} from "react-native";

import * as LocalAuthentication from "expo-local-authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";

// noinspection JSUnusedGlobalSymbols
export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = "dark";
    
    const [easterEgg, setEasterEgg] = useState(false);
    const [biometricsScoutComplete, setBiometricsScoutComplete] = useState(false);
    const [scouting, setScouting] = useState(false);
    
    let [fontsLoaded] = useFonts({
        Inter_300Light,
        Ubuntu_300Light,
        Roboto_400Regular,
    });
    
    //biometrics
    (async () => {
        
        if(scouting) return;
        setScouting(true);
        
        try {
            
            const a = await AsyncStorage.getItem("@biometrics");
            
            if(!a || a === "false") {
                setBiometricsScoutComplete(true);
                return;
            }
            
            const auth = await LocalAuthentication.authenticateAsync();
            
            if(auth.success) {
                setBiometricsScoutComplete(true);
            } else {
                Alert.alert("AnonyMail", "Please try again.", [
                    {
                        style: "default",
                        text: "Ok",
                        onPress() {
                            return setScouting(false);
                        }
                    }
                ]);
            }
            
        } catch(e) {
            setScouting(false);
        }
        
    })();
    
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
    
    if(!isLoadingComplete || !fontsLoaded || !biometricsScoutComplete) {
        return (
            <View style={{
                backgroundColor: "#000000",
                width: "100%",
                height: "100%",
            }}></View>
        );
    } else {
        return (
            easterEgg ? egg : norm
        );
    }
}
