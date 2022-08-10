import * as Clipboard from "expo-clipboard";
import {Alert} from "react-native";
import easterEgg from "./easterEgg";
import CoolStorage from "./CoolStorage";

export default async function onCopy(email: string) {
    
    CoolStorage.times++;
    
    console.log("Copy: ", CoolStorage.times);
    
    const b = await Clipboard.setStringAsync(email);
    
    if(easterEgg(CoolStorage.times)) return;
    
    if(CoolStorage.times === 300) {
        Alert.alert("AnonyMail", "You have peeked into the abyss of the copy button, and now the copy button is staring back at you...");
        CoolStorage.easter_egg_time = true;
        return;
    }
    
    const local = CoolStorage.language;
    
    if(b) {
        Alert.alert("AnonyMail", local.address_screen.copy_message);
    } else {
        Alert.alert("AnonyMail", local.address_screen.copy_fail);
    }
}
