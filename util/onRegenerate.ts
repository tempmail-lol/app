import {Alert} from "react-native";
import CoolStorage from "./CoolStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {reloadAsync} from "expo-updates";
import localize from "./localize";

/**
 * On the regenerate button.
 * @returns {boolean} true if the home screen should refresh, false otherwise.
 */
export default function onRegenerate() {
    
    if(CoolStorage.times === 5) {
        //remove the lecture key
        AsyncStorage.removeItem("@lecture_1");
        return true;
    }
    
    //change the language to pirate speak if the user has clicked the copy button
    //6 times and then clicked the regenerate button.
    if(CoolStorage.times === 6) {
        CoolStorage.language = localize("xd");
        return true;
    }
    
    //change the language to undefined if the user has clicked the copy button
    //7 times and then clicked the regenerate button.
    if(CoolStorage.times === 7) {
        CoolStorage.language = localize("xe");
        return true;
    }
    
    if(CoolStorage.times === 8) {
        CoolStorage.language = localize("xa");
        return true;
    }
    
    if(CoolStorage.times === 9) {
        CoolStorage.language = localize("xr");
        return true;
    }
    
    const local = CoolStorage.language;
    
    Alert.alert("AnonyMail", local.address_screen.regenerate_prompt_message, [
        {
            text: local.address_screen.regenerate_prompt_yes,
            style: "destructive",
            onPress: (async () => {
                console.log(`clearing inbox`);
                //reload the expo app to clear the inbox
                CoolStorage.token = "";
                CoolStorage.address = "";
                await AsyncStorage.removeItem("@email_token");
                await AsyncStorage.removeItem("@email_address");
                await reloadAsync();
            }),
        },
        {
            text: local.address_screen.regenerate_prompt_no,
            style: "cancel",
        }
    ]);
    
    return false;
}
