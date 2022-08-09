import * as Clipboard from "expo-clipboard";
import {Alert} from "react-native";
import easterEgg from "./easterEgg";
import CoolStorage from "./CoolStorage";

let times = 0;

export default async function onCopy(email: string) {
    
    times++;
    
    console.log("Copy: ", times);
    
    const b = await Clipboard.setStringAsync(email);
    
    if(easterEgg(times)) return;
    
    if(times === 300) {
        Alert.alert("AnonyMail", "You have peeked into the abyss of the copy button, and now the copy button is staring back at you...");
        CoolStorage.easter_egg_time = true;
        return;
    }
    
    if(b) {
        Alert.alert("AnonyMail", "Copied to clipboard");
    } else {
        Alert.alert("AnonyMail", "Failed to copy, please try again");
    }
}
