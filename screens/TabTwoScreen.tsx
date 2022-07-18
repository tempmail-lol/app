import {Button, Linking, StyleSheet} from 'react-native';

import {Text, View} from '../components/Themed';
import {StatusBar} from "expo-status-bar";
import ModalShareThingy from "../util/ModalShareThingy";
import {Email} from "tempmail.lol";
import licenses from "../util/licenses";

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
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Button title={"Open Source Licenses"} onPress={openOSL}/>
            <Button title={"Source Code"} onPress={openSource}/>
            <Button title={"Privacy Policy"} onPress={openPrivacyPolicy}/>
            
            <Text style={styles.version}>You are using AnonyMail version {version}</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
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
