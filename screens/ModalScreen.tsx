import {Button, Pressable, StyleSheet, TouchableHighlight, View} from 'react-native';
import {Email} from "tempmail.lol";
import {WebView} from "react-native-webview";
import {Component} from "react";
import {parse} from "node-html-parser";
import {StatusBar} from "expo-status-bar";
import {Text} from "../components/Themed";
import {FontAwesome} from "@expo/vector-icons";

export default class ModalScreen extends Component<any> {
    render() {
        const email: Email = this.props.route.params;
        console.log(email);
        
        const viewport = "width=device-width, initial-scale=1.0, maximum-scale=1.0";
        
        const html = parse(email.html || `<html><head></head><body>${email.body}</body></html>`);
        
        //append the viewport to the head
        //the default html may not have a head, so we need to check
        if(html.getElementsByTagName("head").length > 0) {
            html.getElementsByTagName("head")[0].appendChild(parse(`<meta name="viewport" content="${viewport}">`));
        } else {
            html.appendChild(parse(`<head><meta name="viewport" content="${viewport}"></head>`));
        }
        
        return (
            <>
                <StatusBar style="light" />
                <Button title={""} color="white" />
                <Button title={"Close"} color="white"
                        onPress={() => {
                            this.props.navigation.goBack();
                        }}/>
                <View>
                    <Text>{}</Text>
                </View>
                <WebView
                    originWhitelist={['*']}
                    source={
                        {html: html.toString()}
                    }
                    javaScriptEnabled={false}
                    style={styles.frame}
                />
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        marginTop: "7%",
    },
    sender: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    subject: {
        fontSize: 30,
        marginTop: "3%"
    },
    frame: {
        backgroundColor: "#fff",
        width: "100%",
        height: "75%",
    },
    wvContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
    },
    backButton: {
        position: "absolute",
        top: "5%",
        left: "5%",
    }
});
