import {Alert} from "react-native";
import CoolStorage from "./CoolStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {reloadAsync} from "expo-updates";

export default function onRegenerate() {
    Alert.alert("AnonyMail", "Are you sure?  Your old email will be deleted as well as your inbox.", [
        {
            text: "Yes",
            style: "destructive",
            onPress: (async () => {
                console.log(`clearing inbox`);
                //reload the expo app to clear the inbox
                CoolStorage.token = "";
                CoolStorage.address = "";
                CoolStorage.emails = [];
                await AsyncStorage.removeItem("@email_token");
                await AsyncStorage.removeItem("@email_address");
                await AsyncStorage.removeItem("@stored_emails");
                await reloadAsync();
            }),
        },
        {
            text: "No",
            style: "cancel",
        }
    ]);
}
