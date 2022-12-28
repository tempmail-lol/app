import {Email} from "tempmail.lol";
import {LocalizationType} from "./LocalizationType";
import en from "./localized/en";
import AsyncStorage from "@react-native-async-storage/async-storage";
import localize from "./localize";
import {LangType} from "./LangType";
import * as Localization from "expo-localization";

//NotAHack:tm:
//can't use "Storage", js devs take all the good names and reserve them.
export default class CoolStorage {
    
    public static token: string;
    public static address: string;
    public static language: LocalizationType = en;
    
    public static easter_egg_time: boolean = false;
    public static times: number = 0;
    
    public static easterEggDone: boolean = false;
    
    public static emails: Email[] = [];
    
}

//if the user has an overridden language, use it instead of the default.
AsyncStorage.getItem("@language").then(async (value) => {
    if(value) {
        CoolStorage.language = localize(value as LangType);
    } else {
        console.log(`using default local: ${Localization.locale.substring(0, 2)}`);
        CoolStorage.language = localize(Localization.locale.substring(0, 2) as LangType);
        await AsyncStorage.setItem("@language", Localization.locale.substring(0, 2));
    }
});

//set easter egg
AsyncStorage.getItem("@easter_egg").then(r => {
    if(r === "true") {
        console.log(`easter egg is true`);
        CoolStorage.easterEggDone = true;
    }
});

AsyncStorage.getItem("@emails").then(emails => {
    if(!emails) return;

    CoolStorage.emails = JSON.parse(emails) as Email[];
});
