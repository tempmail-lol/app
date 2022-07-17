import {Button, Linking, StyleSheet} from 'react-native';

import {Text, View} from '../components/Themed';
import {StatusBar} from "expo-status-bar";
import ModalShareThingy from "../util/ModalShareThingy";
import {Email} from "tempmail.lol";
import licenses from "../util/licenses";

function openSource() {
    const url = "https://github.com/tempmail-lol/app";
    Linking.openURL(url);
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

export default function TabTwoScreen() {
    
    //ScrapeProof:tm:
    const email = "alex" + "ander" + "@" + "epol" + "ite" + "." + "ne" + "t";
    
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Button title={"Open Source Licenses"} onPress={openOSL}/>
            <Button title={"Source Code"} onPress={openSource}/>
            <Text>AnonyMail Mobile App Beta</Text>
            <Text>Thank you for testing!  Please email {email} for feedback.</Text>
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
});
