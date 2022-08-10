import {View, StyleSheet, Dimensions, Button, Linking} from "react-native";
import {Component} from "react";
import {Text} from "../components/Themed";

function openLinkedIn(username: string) {
    return Linking.openURL("https://linkedin.com/in/" + username);
}

export default class TranslatorsModal extends Component<any> {
    
    render() {
        return (
            <View>
                <Text style={styles.header}>
                    Translators of AnonyMail
                </Text>
                <Text style={styles.lang}>French (Français)</Text>
                <Text style={styles.translator}>Thanks to Aidan Powell for translating the app into French!</Text>
                <Button title={"Aidan Powell's LinkedIn"} onPress={() => openLinkedIn("aidanpowell")}/>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 24,
        paddingRight: 24,
    },
    header: {
        fontSize: Math.min(Math.max(Math.floor(Dimensions.get('window').width / 2), 12), 28),
        textAlign: "center",
        marginTop: 20,
    },
    translator: {
        fontSize: Math.min(Math.max(Math.floor(Dimensions.get('window').width / 2), 12), 22),
        textAlign: "center",
        marginTop: 20,
    },
    lang: {
        fontSize: Math.min(Math.max(Math.floor(Dimensions.get('window').width / 2), 12), 24),
        textAlign: "center",
        marginTop: 20,
    }
});
