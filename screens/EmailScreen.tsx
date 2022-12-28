import {Dimensions, FlatList, Platform, Pressable, StyleSheet} from 'react-native';

import {Text, View} from '../components/Themed';
import CoolStorage from "../util/CoolStorage";
import {useState} from "react";
import {Email} from "tempmail.lol";
import ModalShareThingy from "../util/ModalShareThingy";
import {StatusBar} from "expo-status-bar";
import {AdMobBanner} from "expo-ads-admob";
import {requestTrackingPermissionsAsync} from "expo-tracking-transparency";
import {DeviceType, getDeviceTypeAsync} from "expo-device";

function openEmail(email: Email): any {
    console.log(`pressed`)
    //open a modal with the email html
    ModalShareThingy.modal.navigate("Email View", email);
}

const blank = StyleSheet.create({
    bg: {
        backgroundColor: "#555555",
    },
});
const alt = StyleSheet.create({
    bg: {
        backgroundColor: "#333333",
    },
});

function formatDate(date: number): string {
    //format the date in the format:
    //Wed, Jan 1, 2020 23:00:00
    const d = new Date(date);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${d.toDateString().split(" ")[0]}, ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()} ${
        d.getHours() < 10 ? "0" + d.getHours() : d.getHours()
    }:${
        d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()
    }:${
        d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds()
    }`;
}

function createEmailElement(email: Email, odd: boolean) {
    
    let ss = odd ? blank : alt;
    
    return (
        <Pressable onPress={() => openEmail(email)} style={ss.bg}>
            <Text style={styles.sender}>Sender: {email.from}</Text>
            <Text style={styles.subject}>Subject: {email.subject}</Text>
            <Text style={styles.subject}>Sent to: {email.to}</Text>
            <Text style={styles.date}>Time sent: {formatDate(email.date)}</Text>
        </Pressable>
    );
}

type BannerSize = 'banner' | 'largeBanner' | 'mediumRectangle' | 'fullBanner' | 'leaderboard' | 'smartBannerPortrait' | 'smartBannerLandscape';

export default function EmailScreen() {
    
    const [emails, setEmails] = useState(CoolStorage.emails);
    const [personalizedAds, setPersonalizedAds] = useState(false);
    const [bannerSize, setBannerSize] = useState("banner" as BannerSize);
    
    (async () => {
        const {status} = await requestTrackingPermissionsAsync();
        if(status === "granted") {
            setPersonalizedAds(true);
        } else {
            setPersonalizedAds(false);
        }
    })();
    
    //check if the device is a tablet
    (async () => {
        const d = await getDeviceTypeAsync();
        if(d === DeviceType.TABLET) {
            setBannerSize("smartBannerPortrait");
        }
    })();
    
    setInterval(() => {
        setEmails(CoolStorage.emails);
    }, 1000);
    
    const local = CoolStorage.language;
    
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Text style={styles.tapHelper}>{local.email_screen.prompt}</Text>
            <FlatList data={emails} renderItem={({item, index}) => {
                return createEmailElement(item, index % 2 === 0);
            }}/>
            <View style={styles.ad}>
                <AdMobBanner
                    bannerSize={bannerSize}
                    //no ads on android until it gets approved
                    adUnitID={Platform.OS === "ios" ? "ca-app-pub-5608964063399729/7284845761" : ""}
                    servePersonalizedAds={personalizedAds}
                    onDidFailToReceiveAdWithError={(e) => console.log(e)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    tapHelper: {
        //dynamically change the font size based on the screen size (was 32)
        fontSize: Math.min(Math.max(Math.floor(Dimensions.get('window').width / 20), 12), 24),
        textAlign: "center",
        marginTop: "5%",
        marginBottom: "5%",
    },
    sender: {
        fontSize: Math.min(Math.max(Math.floor(Dimensions.get('window').width / 15), 12), 24),
        marginLeft: "15%",
        marginRight: "15%",
        paddingTop: "3%",
    },
    subject: {
        fontSize: 16,
        marginLeft: "15%",
        marginRight: "15%",
        paddingTop: "1%",
    },
    date: {
        marginLeft: "15%",
        marginRight: "15%",
        fontSize: 16,
        paddingTop: "1%",
        paddingBottom: "3%",
    },
    ad: {
        position: "absolute",
        bottom: 0,
        alignItems: "center",
    }
});
