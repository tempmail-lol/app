import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';

import {Text, View} from '../components/Themed';
import {Email} from "tempmail.lol";
import {WebView} from "react-native-webview";
import {Component} from "react";

export default class ModalScreen extends Component<any> {
    render() {
        const email: Email = this.props.route.params;
        console.log(email);
        return (
            <WebView
                originWhitelist={['*']}
                source={
                    {html: email.html || `<html><body>${email.body}</body></html>`}
                }
                javaScriptEnabled={false}
                style={styles.frame}
            />
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
    }
});
