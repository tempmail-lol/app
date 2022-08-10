import {Button, Platform, StyleSheet, View} from 'react-native';
import {Email} from "tempmail.lol";
import {WebView} from "react-native-webview";
import {Component} from "react";
import {parse} from "node-html-parser";
import {StatusBar} from "expo-status-bar";
import {Text} from "../components/Themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CoolStorage from "../util/CoolStorage";

let js_enabled     = false;
let images_enabled = false;

//this is easier than working with async component witchcraft
setInterval(async () => {
    js_enabled = await AsyncStorage.getItem("@js_enabled") === "true";
    images_enabled = await AsyncStorage.getItem("@images_enabled") === "true";
}, 300);

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
        
        //remove the following tags: audio, embed, object, video, source, iframe
        html.querySelectorAll("audio, embed, object, video, source, iframe").forEach(e => e.remove());
        
        //if images_enabled is false, remove all images and <link> tags
        if(!images_enabled) {
            html.querySelectorAll("img").forEach(img => img.remove());
            html.querySelectorAll("link").forEach(link => link.remove());
        }
        
        const local = CoolStorage.language;
        
        return (
            <>
                <StatusBar style="light" />
                <Button title={""} color="black" onPress={() => {
                    this.props.navigation.goBack();
                }}/>
                <Button title={local.email_modal.close_button}
                        //because android is dumb sometimes the button color needs to
                        //be black.  ios needs it to be white.
                        //ios changes just the button color, android changes
                        //both button and bg to be the same (???)
                        //i feel like there's a "more correct" way to do this but whatever.
                        color={Platform.OS === "ios" ? "white" : "black"}
                        onPress={() => {
                            this.props.navigation.goBack();
                        }}/>
                <View>
                    {/*"padding"*/}
                    <Text>{}</Text>
                </View>
                <WebView
                    originWhitelist={['*']}
                    source={
                        {html: html.toString()}
                    }
                    javaScriptEnabled={js_enabled}
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
