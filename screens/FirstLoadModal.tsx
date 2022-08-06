import {View, StyleSheet, Dimensions, TouchableHighlight, ScrollView} from "react-native";
import {Component} from "react";
import {StatusBar} from "expo-status-bar";
import {Text} from "../components/Themed";
import ModalShareThingy from "../util/ModalShareThingy";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class FirstLoadModal extends Component<any> {
    
    render() {
        return (
            <View style={styles.container}>
                <StatusBar style="light" />
                <Text style={styles.header}>
                    Welcome to AnonyMail!
                </Text>
                <Text style={styles.info}>
                    Using this app, you can generate anonymous email addresses!
                </Text>
                <ScrollView persistentScrollbar={true}>
                    <Text style={styles.question}>
                        What is the purpose of generating temporary emails?
                    </Text>
                    <Text style={styles.answer}>
                        To signup for services without using your real email address.
                    </Text>
                    <Text style={styles.question}>
                        How long to the email addresses last for?
                    </Text>
                    <Text style={styles.answer}>
                        Email addresses on this app last up to one hour.
                    </Text>
                    <Text style={styles.question}>
                        Is this private and secure?
                    </Text>
                    <Text style={styles.answer}>
                        Once emails are sent to you, they are deleted from our servers.  No-one can have
                        an email address that has already been generated.
                    </Text>
                </ScrollView>
                <TouchableHighlight
                    onPress={async (event) => {
                        await AsyncStorage.setItem("@lecture_1", "true");
                        this.props.navigation.goBack();
                    }}
                >
                    <View style={styles.start_view}>
                        <Text style={styles.start}>Tap to generate your first email address!</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 24,
        paddingRight: 24,
    },
    header: {
        //make the font size fit the screen
        fontSize: Math.min(Math.max(Math.floor(Dimensions.get('window').width / 2), 12), 28),
        textAlign: "center",
        marginTop: 20,
    },
    info: {
        fontSize: Math.min(Math.max(Math.floor(Dimensions.get('window').width / 20), 12), 24),
        textAlign: "center",
        marginTop: 20,
        marginBottom: 30,
    },
    question: {
        fontSize: Math.min(Math.max(Math.floor(Dimensions.get('window').width / 24), 12), 24),
        textAlign: "left",
        marginTop: 20,
        color: "#AAAAAA",
        width: "65%",
    },
    answer: {
        fontSize: Math.min(Math.max(Math.floor(Dimensions.get('window').width / 24), 12), 24),
        textAlign: "right",
        marginTop: 20,
        paddingLeft: "35%",
    },
    start_view: {
        backgroundColor: "#00FF00",
        width: "70%",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 16,
        marginTop: 32,
    },
    start: {
        textAlign: "center",
        flexWrap: "nowrap",
        marginTop: 6,
        marginBottom: 6,
        fontSize: Math.min(Math.max(Math.floor(Dimensions.get('window').width / 20), 12), 24),
        color: "black",
    }
});
