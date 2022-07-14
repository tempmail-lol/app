import {Alert, Animated, Pressable, StyleSheet} from 'react-native';

import * as Clipboard from "expo-clipboard";

import {reloadAsync} from "expo-updates";

import {Text, View} from '../components/Themed';
import {useState} from "react";
import CoolStorage from "../util/CoolStorage";
import {checkInboxAsync, Email} from "tempmail.lol";
import AsyncStorage from "@react-native-async-storage/async-storage";

async function getEmails(token: string): Promise<Email[]> {
    //TODO add TOR or Lokinet functionality once it becomes easy to do.
    //if you have a way of connecting to TOR using pure JS let me know.
    return checkInboxAsync(token);
}

function Button(props: { onPress: any; title: string }) {
    const {onPress, title = 'Save'} = props;
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

let ws: WebSocket;

export default function EmailScreen() {
    const [email, setEmail] = useState("");
    const [timer, setTimer] = useState([]);
    const [emailsReceived, setEmailsReceived] = useState("[loading]");
    const [clientsConnected, setClientsConnected] = useState("[loading]");
    
    if(!ws) {
        // @ts-ignore
        ws = (new WebSocket("wss://gateway.exploding.email/stats"));
        
        ws.onmessage = ((msg) => {
            const d = JSON.parse(msg.data.toString());
            if(d.op === 3) {
                setEmailsReceived(`${d.statistics.emails_received}`);
                setClientsConnected(`${d.statistics.clients}`);
            }
        });
    }
    
    console.log(email);
    
    if(!email) {
        
        (async () => {
            let token = await AsyncStorage.getItem("@email_token");
            
            //check for existing email address
            if(token) {
                try {
                    const data = await checkInboxAsync(token);
                    if(data.length > 0) {
                        //stored_emails is an array of emails
                        const stored_emails = await AsyncStorage.getItem("@stored_emails");
                        let se_array: Email[] = [];
                        
                        if(stored_emails) {
                            se_array = JSON.parse(stored_emails);
                        }
                        
                        CoolStorage.emails = CoolStorage.emails.concat(data);
                        CoolStorage.emails = CoolStorage.emails.concat(se_array);
                    }
                    
                    const address = await AsyncStorage.getItem("@email_address");
                    
                    if(!address) throw new Error();
                    
                    CoolStorage.address = address;
                    CoolStorage.token = token;
                    setEmail(address);
                    console.log(`resumed ${address}`);
                    
                } catch(e) {
                    //invalid token
                    await AsyncStorage.removeItem("@email_token");
                    await AsyncStorage.removeItem("@email_address");
                    token = null;
                }
            }
            
            if(!token) {
                fetch("https://api.tempmail.lol/generate").then(async (res) => {
                    const json = await res.json();
                    CoolStorage.address = json.address;
                    CoolStorage.token = json.token;
                    setEmail(json.address);
                    console.log(json);
                    console.log(timer);
                    await AsyncStorage.setItem("@email_address", json.address);
                    await AsyncStorage.setItem("@email_token", json.token);
                });
            }
            
            async function task() {
                try {
                    const emails = await getEmails(CoolStorage.token);
                    //add the emails to the storage
                    CoolStorage.emails = CoolStorage.emails.concat(emails);
                    //add the emails to the storage
                    await AsyncStorage.setItem("@stored_emails", JSON.stringify(CoolStorage.emails));
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
            
        })();
        
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
                    await AsyncStorage.removeItem("@email_token");
                    await AsyncStorage.removeItem("@email_address");
                    await AsyncStorage.removeItem("@stored_emails");
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
            <Text style={styles.header}>AnonyMail</Text>
            <Text>Beta build 22w27c</Text>
            <Text style={styles.stats}>We've processed {emailsReceived} emails with {clientsConnected} active inboxes.</Text>
            <Text style={styles.sender}>Your Anonymous Temporary Email is:</Text>
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
        fontSize: 20,
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
        flexDirection: "row",
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
