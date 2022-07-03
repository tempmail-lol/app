import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text>TempMail.lol Mobile App Beta</Text>
      <Text>Thank you for testing!  Please put feedback in #mobile-feedback in the Discord server.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
