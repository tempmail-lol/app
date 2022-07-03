import {Alert, Pressable, StyleSheet} from 'react-native';

import * as Clipboard from "expo-clipboard";

import {reloadAsync} from "expo-updates";

import {Text, View} from '../components/Themed';
import {RootTabScreenProps} from '../types';
import {useState} from "react";
import CoolStorage from "../util/CoolStorage";
import {checkInboxAsync} from "tempmail.lol";

function Button(props: { onPress: any; title: string }) {
    const {onPress, title = 'Save'} = props;
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

export default function EmailScreen({navigation}: RootTabScreenProps<'TabOne'>) {
    const [email, setEmail] = useState("");
    const [timer, setTimer] = useState([]);
    
    console.log(email);
    if(!email) {
        fetch("https://api.tempmail.lol/generate").then(async (res) => {
            const json = await res.json();
            CoolStorage.address = json.address;
            CoolStorage.token = json.token;
            setEmail(json.address);
            console.log(json);
            console.log(timer);
            
            async function task() {
                try {
                    const emails = await checkInboxAsync(CoolStorage.token);
                    //add the emails to the storage
                    CoolStorage.emails = CoolStorage.emails.concat(emails);
                } catch(e) { //if the token is invalid
                    await reloadAsync();
                }
            }
            
            if(!!timer[0]) return;
            
            const intr = setInterval(() => {
                task();
            }, 3000);
            
            // @ts-ignore
            setTimer([intr]);
        });
    }
    
    async function onCopy() {
        
        console.log("Copy");
        
        const b = await Clipboard.setStringAsync(email);
        
        if(b) {
            Alert.alert("TempMail", "Copied to clipboard");
        } else {
            Alert.alert("TempMail", "Failed to copy, please try again");
        }
    }
    
    function onRegenerate() {
        Alert.alert("TempMail", "Are you sure?  Your old email will be deleted as well as your inbox.", [
            {
                text: "Yes",
                style: "destructive",
                onPress: (async () => {
                    console.log(`clearing inbox`);
                    //reload the expo app to clear the inbox
                    CoolStorage.token = "";
                    CoolStorage.address = "";
                    CoolStorage.emails = [];
                }),
            },
            {
                text: "No",
                style: "cancel",
            }
        ]);
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.header}>TempMail</Text>
            <Text style={styles.stats}>We've processed undefined emails with undefined active inboxes.</Text>
            <Text style={styles.sender}>Your Temporary Email is:</Text>
            <Text style={styles.email}>
                {email}
            </Text>
            <View style={styles.buttonContainer}>
                <Button
                    title={"Copy"}
                    onPress={async () => await onCopy()}/>
                <Button
                    title={"Regenerate"}
                    onPress={() => onRegenerate()}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // fontFamily: "Ubuntu",
    },
    sender: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    header: {
        fontSize: 48,
        marginBottom: 24,
        marginTop: 64,
    },
    stats: {
        fontSize: 24,
        marginBottom: 24,
        textAlign: "center",
    },
    email: {
        width: 500,
        height: 50,
        // fontFamily: "Roboto Mono",
        textAlign: "center",
        fontSize: 22,
        borderRadius: 10,
        color: "#fff"
    },
    buttonContainer: {
        alignItems: "center",
        display: "flex",
    },
    button: {
        borderStyle: "solid",
        borderColor: "#fff",
        borderWidth: 2,
        backgroundColor: "#0d1117",
        textAlign: "center",
        fontSize: "x-large",
        color: "#fff",
        borderRadius: 10,
        flex: 0,
        padding: 10,
        width: 150,
        marginTop: 30,
        marginRight: 10,
        marginBottom: 20,
        marginLeft: 10,
    },
    text: {
        color: "#fff",
        textAlign: "center",
        fontSize: 22,
    }
});
