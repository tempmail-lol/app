import {Alert, Button, Linking, ScrollView, StyleSheet, Switch} from 'react-native';

import {Text, View} from '../components/Themed';
import {StatusBar} from "expo-status-bar";
import ModalShareThingy from "../util/ModalShareThingy";
import {Email} from "tempmail.lol";
import licenses from "../util/licenses";
import {useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

async function openSource() {
    const url = "https://github.com/tempmail-lol/app";
    await Linking.openURL(url);
}

function openOSL() {
    ModalShareThingy.modal.navigate("Email View", new Email(
        "",
        "",
        "",
        "",
        licenses(),
        0,
        "",
    ));
}

async function openPrivacyPolicy() {
    await Linking.openURL("https://tempmail.lol/privacy-policy.html");
}

const version = require("../app.json").expo.version;

export default function TabTwoScreen() {
    
    const [scriptingEnabled, setScriptingEnabled] = useState(false);
    const [alternativeDomains, setAlternativeDomains] = useState(false);
    const [imagesEnabled, setImagesEnabled] = useState(false);
    
    AsyncStorage.getItem("@js_enabled").then(r => {
        if(r && r === "true") {
            setScriptingEnabled(true);
        }
    });
    
    AsyncStorage.getItem("@rush_mode").then(r => {
        if(r && r === "true") {
            setAlternativeDomains(true);
        }
    });
    
    AsyncStorage.getItem("@images_enabled").then(r => {
        if(r && r === "true") {
            setImagesEnabled(true);
        }
    });
    
    const toggleScripting = async () => setScriptingEnabled(((p) => {
        console.log(`p: ${p}`);
        if(!p) {
            Alert.alert("AnonyMail", "Enabling JavaScript can cause emails you receive to de-anonymize you." +
                "\n\nThis can do things such as: reveal your IP address to the email sender, let them know you are using a temporary email, and more." +
                "\n\nOnly enable if you know what you are doing.", [
                {
                    text: "Cancel",
                    onPress: () => {
                    },
                    style: "cancel",
                },
                {
                    text: "I know what I am doing",
                    onPress: async () => {
                        await AsyncStorage.setItem("@js_enabled", "true");
                        setScriptingEnabled(true);
                    },
                    style: "destructive",
                }
            ]);
        } else {
            AsyncStorage.setItem("@js_enabled", "false");
            return false;
        }
        
        return false;
    }));
    
    const toggleAlternativeDomains = async () => setAlternativeDomains(((p) => {
        if(!p) {
            Alert.alert("AnonyMail", "Alternative emails allow you to bypass certain restrictions.\n\n" +
                "With this, you will see emails with less common endings (such as .cfd instead of .com).  They are easier to" +
                " create, but should only be used if the normal .com domains are not working.", [
                {
                    text: "Cancel",
                    onPress: () => {
                    },
                    style: "cancel",
                },
                {
                    text: "Enable",
                    onPress: async () => {
                        await AsyncStorage.setItem("@rush_mode", "true");
                        setAlternativeDomains(true);
                        Alert.alert("AnonyMail", "Success!  Click 'Regenerate' on the Address screen to make a new email.");
                    }
                }
            ]);
        } else {
            AsyncStorage.setItem("@rush_mode", "false");
            Alert.alert("AnonyMail", "Success!  Click 'Regenerate' on the Address screen to make a new email.");
            return false;
        }
        
        return false;
    }));
    
    const toggleImages = async () => setImagesEnabled(((p) => {
        if (!p) {
            Alert.alert("AnonyMail", "Enabling images will render images in emails.\n\n" +
                "This could potentially reveal your IP address once an email is opened.\nOnly use if you need to view images in emails.", [
                {
                    text: "Cancel",
                    onPress: () => {
                    },
                    style: "cancel",
                },
                {
                    text: "Enable",
                    onPress: async () => {
                        await AsyncStorage.setItem("@images_enabled", "true");
                        setImagesEnabled(true);
                    }
                }
            ]);
        } else {
            AsyncStorage.setItem("@images_enabled", "false");
            return false;
        }
        
        return false;
    }));
    
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <StatusBar style="light" />
                <Button title={"Open Source Licenses"} onPress={openOSL}/>
                <Button title={"Source Code"} onPress={openSource}/>
                <Button title={"Privacy Policy"} onPress={openPrivacyPolicy}/>
                <Text style={styles.switchText}>Run JavaScript</Text>
                <Switch
                    value={scriptingEnabled}
                    onValueChange={toggleScripting}
                />
                <Text style={styles.switchText}>Use alternative emails</Text>
                <Switch
                    value={alternativeDomains}
                    onValueChange={toggleAlternativeDomains}
                />
                <Text style={styles.switchText}>Render images</Text>
                <Switch
                    value={imagesEnabled}
                    onValueChange={toggleImages}
                />
                <Text style={styles.version}>You are using AnonyMail version {version}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        marginTop: 50,
    },
    //align the text to the center and the switch below it
    switchText: {
        fontSize: 20,
        marginTop: 20,
        marginRight: 10,
        textAlign: "right",
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sender: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subject: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    version: {
        marginTop: 10,
        fontSize: 22,
    }
});
