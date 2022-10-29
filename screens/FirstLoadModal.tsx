import {View, StyleSheet, Dimensions, TouchableHighlight, ScrollView} from "react-native";
import {Component} from "react";
import {StatusBar} from "expo-status-bar";
import {Text} from "../components/Themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CoolStorage from "../util/CoolStorage";

export default class FirstLoadModal extends Component<any> {
    
    render() {
        
        const local = CoolStorage.language;
        
        return (
            <ScrollView persistentScrollbar={true}>
                <View style={styles.container}>
                    <StatusBar style="light" />
                    <Text style={styles.header}>
                        {local.first_load_screen.welcome}
                    </Text>
                    <Text style={styles.info}>
                        {local.first_load_screen.info}
                    </Text>
                    <Text style={styles.question}>
                        {local.first_load_screen.question_purpose}
                    </Text>
                    <Text style={styles.answer}>
                        {local.first_load_screen.answer_purpose}
                    </Text>
                    <Text style={styles.question}>
                        {local.first_load_screen.question_expire}
                    </Text>
                    <Text style={styles.answer}>
                        {local.first_load_screen.answer_expire}
                    </Text>
                    <Text style={styles.question}>
                        {local.first_load_screen.question_secure}
                    </Text>
                    <Text style={styles.answer}>
                        {local.first_load_screen.answer_secure}
                    </Text>
                    <TouchableHighlight
                        onPress={async (event) => {
                            await AsyncStorage.setItem("@lecture_1", "true");
                            this.props.navigation.goBack();
                        }}
                    >
                        <View style={styles.start_view}>
                            <Text style={styles.start}>
                                {local.first_load_screen.exit_button}
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </ScrollView>
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
