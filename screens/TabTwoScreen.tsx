import {StyleSheet} from 'react-native';

import {Text, View} from '../components/Themed';
import {StatusBar} from "expo-status-bar";

export default function TabTwoScreen() {
    
    //ScrapeProof:tm:
    const email = "alex" + "ander" + "@" + "epol" + "ite" + "." + "ne" + "t";
    
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Text>AnonyMail Mobile App Beta</Text>
            <Text>Thank you for testing!  Please email {email} for feedback.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sender: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subject: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
