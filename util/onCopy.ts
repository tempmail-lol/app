import * as Clipboard from "expo-clipboard";
import {Alert} from "react-native";

export default async function onCopy(email: string) {
    
    console.log("Copy");
    
    const b = await Clipboard.setStringAsync(email);
    
    if(b) {
        Alert.alert("TempMail", "Copied to clipboard");
    } else {
        Alert.alert("TempMail", "Failed to copy, please try again");
    }
}
