import {Dimensions, Pressable, StyleSheet} from 'react-native';

import {reloadAsync} from "expo-updates";

import {Text, View} from '../components/Themed';
import {useState} from "react";
import CoolStorage from "../util/CoolStorage";
import {checkInboxAsync, createInboxAsync, Email} from "tempmail.lol";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {StatusBar} from "expo-status-bar";
import onRegenerate from "../util/onRegenerate";
import onCopy from "../util/onCopy";
import ModalShareThingy from "../util/ModalShareThingy";

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

async function getStats(): Promise<{clients_connected: string, emails_received: string}> {
    const data = await (await fetch("https://api.tempmail.lol/stats")).json();
    return {
        clients_connected: `${data.clients_connected}`,
        emails_received: `${data.emails_received}`,
    };
}

export default function EmailScreen() {
    const [email, setEmail] = useState("");
    const [timer, setTimer] = useState([]);
    const [emailsReceived, setEmailsReceived] = useState("[loading]");
    const [clientsConnected, setClientsConnected] = useState("[loading]");
    
    console.log(email);
    
    if(emailsReceived === "[loading]") {
        getStats().then((r) => {
            setClientsConnected(r.clients_connected);
            setEmailsReceived(r.emails_received);
        });
    }
    
    if (!email) {
        
        (async () => {
            let token = await AsyncStorage.getItem("@email_token");
            
            //check for existing email address
            if (token) {
                try {
                    const data = await checkInboxAsync(token);
                    if (data.length > 0) {
                        //stored_emails is an array of emails
                        const stored_emails = await AsyncStorage.getItem("@stored_emails");
                        let se_array: Email[] = [];
                        
                        if (stored_emails) {
                            se_array = JSON.parse(stored_emails);
                        }
                        
                        CoolStorage.emails = CoolStorage.emails.concat(data);
                        CoolStorage.emails = CoolStorage.emails.concat(se_array);
                    }
                    
                    const address = await AsyncStorage.getItem("@email_address");
                    
                    if (!address) {
                        // noinspection ExceptionCaughtLocallyJS
                        throw new Error();
                    }
                    
                    CoolStorage.address = address;
                    CoolStorage.token = token;
                    setEmail(address);
                    
                } catch (e) {
                    //invalid token
                    await AsyncStorage.removeItem("@email_token");
                    await AsyncStorage.removeItem("@email_address");
                    token = null;
                }
            }
            
            if(!token) {
                const isRushMode = (await AsyncStorage.getItem("@rush_mode")) === "true";
                console.log(`rush mode: ${isRushMode}`);
                createInboxAsync(isRushMode).then(async (inbox) => {
                    CoolStorage.address = inbox.address;
                    CoolStorage.token = inbox.token;
                    setEmail(inbox.address);
                    await AsyncStorage.setItem("@email_address", inbox.address);
                    await AsyncStorage.setItem("@email_token", inbox.token);
                });
            }
            
            async function task() {
                try {
                    const emails = await getEmails(CoolStorage.token);
                    //add the emails to the storage
                    CoolStorage.emails = CoolStorage.emails.concat(emails);
                    //add the emails to the storage
                    await AsyncStorage.setItem("@stored_emails", JSON.stringify(CoolStorage.emails));
                    
                    //fetch the stats
                    getStats().then((r) => {
                        setClientsConnected(r.clients_connected);
                        setEmailsReceived(r.emails_received);
                    });
                } catch (e) { //if the token is invalid
                    await reloadAsync();
                }
            }
            
            if (!!timer[0]) return;
            
            const intr = setInterval(() => {
                task();
            }, 3000);
            
            // @ts-ignore
            setTimer([intr]);
            
        })();
    }
    
    AsyncStorage.getItem("@lecture_1").then(r => {
        if(!r) {
            ModalShareThingy.modal.navigate("First Load");
        }
    })
    
    return (
        <View style={styles.container}>
            <StatusBar style="light"/>
            <Text style={styles.header}>AnonyMail</Text>
            <Text style={styles.stats}>
                We've processed {emailsReceived} emails with {clientsConnected} active inboxes.
            </Text>
            <Text style={styles.sender}>Your Anonymous Email is:</Text>
            <Text style={styles.email}
                  adjustsFontSizeToFit={true}
                  numberOfLines={1}>
                {email}
            </Text>
            <View style={styles.buttonContainer}>
                <Button
                    title={"Copy"}
                    onPress={async () => await onCopy(email)}/>
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
    email: {
        //dynamically change the font size to fit the width of the screen
        fontSize: Math.min(Math.max(Math.floor(Dimensions.get('window').width / 20), 12), 24),
        width: 500,
        height: 50,
        // fontFamily: "Roboto Mono",
        textAlign: "center",
        borderRadius: 10,
        color: "#fff",
    },
    sender: {
        fontSize: Math.min(Math.max(Math.floor(Dimensions.get('window').width / 20), 12), 24),
        fontWeight: 'bold',
        marginBottom: 16,
    },
    header: {
        fontSize: 36,
        marginBottom: 24,
        marginTop: 64,
    },
    stats: {
        fontSize: Math.min(Math.max(Math.floor(Dimensions.get('window').width / 20), 12), 24),
        marginBottom: 24,
        textAlign: "center",
        paddingLeft: 2,
        paddingRight: 2,
        marginLeft: 2,
        marginRight: 2,
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
        fontSize: Math.min(Math.max(Math.floor(Dimensions.get('window').width / 20), 12), 24),
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
