import {Alert, Button, Linking, StyleSheet, Switch} from 'react-native';

import {Text, View} from '../components/Themed';
import {StatusBar} from "expo-status-bar";
import ModalShareThingy from "../util/ModalShareThingy";
import {Email} from "tempmail.lol";
import licenses from "../util/licenses";
import {useState} from "react";

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
    ));
}

async function openPrivacyPolicy() {
    await Linking.openURL("https://tempmail.lol/privacy-policy.html");
}

const version = require("../app.json").expo.version;

export default function TabTwoScreen() {
    
    const [authEnabled, setAuthEnabled] = useState(false);
    const toggleAuth = () => setAuthEnabled(p => !p);
    
    const [scriptingEnabled, setScriptingEnabled] = useState(false);
    const toggleScripting = () => setScriptingEnabled(((p) => {
        if(p) {
            Alert.prompt("Enabling JavaScript", "Enabling JavaScript can cause emails you receive to de-anonymize you.\nOnly enable if you know what you are doing.", [
                {
                    text: "Cancel",
                    onPress: () => {
                    },
                    style: "default",
                },
                {
                    text: "I know what I'm doing",
                    onPress: () => {
                        setScriptingEnabled(true);
                    },
                    style: "destructive",
                }
            ]);
        } else {
            return false;
        }
        
        return false;
    }));
    
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Button title={"Open Source Licenses"} onPress={openOSL}/>
            <Button title={"Source Code"} onPress={openSource}/>
            <Button title={"Privacy Policy"} onPress={openPrivacyPolicy}/>
            <View style={styles.switchArea}>
                <Text style={styles.switchText}>Enable/Disable Switch</Text>
                <Switch
                    style={styles.switch}
                    value={authEnabled}
                    onValueChange={toggleScripting}
                />
            </View>
            <Text style={styles.version}>You are using AnonyMail version {version}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    //align the text to the leftmost side of the screen and the switch to the rightmost side of the screen
    switchArea: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
    },
    switchText: {
        fontSize: 20,
        marginRight: 10,
    },
    switch: {
        marginLeft: 10,
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
