import {StyleSheet} from 'react-native';

import {Text, View} from '../components/Themed';

export default function TabTwoScreen() {
    
    //ScrapeProof:tm:
    const email = "alex" + "ander" + "@" + "epol" + "ite" + "." + "ne" + "t";
    
    return (
        <View style={styles.container}>
            <Text>AnonyMail Mobile App Beta</Text>
            <Text>Thank you for testing!  Please email {email} for feedback.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
