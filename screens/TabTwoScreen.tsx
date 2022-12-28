import {Alert, Button, Linking, ScrollView, StyleSheet, Switch} from 'react-native';

import {Text, View} from '../components/Themed';
import {StatusBar} from "expo-status-bar";
import ModalShareThingy from "../util/ModalShareThingy";
import {Email} from "tempmail.lol";
import licenses from "../util/licenses";
import {useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Picker} from "@react-native-picker/picker";
import CoolStorage from "../util/CoolStorage";
import localize from "../util/localize";
import {LangType} from "../util/LangType";
import {reloadAsync} from "expo-updates";
import * as LocalAuthentication from "expo-local-authentication";

async function openSource() {
    const url = "https://github.com/tempmail-lol/app";
    await Linking.openURL(url);
}

function openOSL() {
    ModalShareThingy.modal.navigate("Email View", new Email(
        "",
        "",
        "",
        "",
        licenses(),
        0,
        "",
    ));
}

function openCredits() {
    ModalShareThingy.modal.navigate("Credits");
}

function removeAds() {
    ModalShareThingy.modal.navigate("RemoveAds");
}

async function openPrivacyPolicy() {
    await Linking.openURL("https://tempmail.lol/privacy-policy.html");
}

const version = require("../app.json").expo.version;

export default function TabTwoScreen() {
    
    const [scriptingEnabled, setScriptingEnabled] = useState(false);
    const [alternativeDomains, setAlternativeDomains] = useState(false);
    const [imagesEnabled, setImagesEnabled] = useState(false);
    const [biometricLoginEnabled, setBiometricLoginEnabled] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("en");
    
    AsyncStorage.getItem("@js_enabled").then(r => {
        if(r && r === "true") {
            setScriptingEnabled(true);
        }
    });
    
    AsyncStorage.getItem("@rush_mode").then(r => {
        if(r && r === "true") {
            setAlternativeDomains(true);
        }
    });
    
    AsyncStorage.getItem("@images_enabled").then(r => {
        if(r && r === "true") {
            setImagesEnabled(true);
        }
    });
    
    AsyncStorage.getItem("@language").then((r) => {
        if(r) {
            setSelectedLanguage(r);
        }
    });
    
    const local = CoolStorage.language;
    
    const toggleScripting = async () => setScriptingEnabled(((p) => {
        console.log(`p: ${p}`);
        if(!p) {
            Alert.alert("AnonyMail", local.settings_screen.javascript_enable_warning, [
                {
                    text: local.settings_screen.javascript_enable_warning_decline,
                    onPress() {},
                    style: "cancel",
                },
                {
                    text: local.settings_screen.javascript_enable_warning_accept,
                    onPress: async () => {
                        await AsyncStorage.setItem("@js_enabled", "true");
                        setScriptingEnabled(true);
                    },
                    style: "destructive",
                }
            ]);
        } else {
            AsyncStorage.setItem("@js_enabled", "false");
            return false;
        }
        
        return false;
    }));
    
    const toggleAlternativeDomains = async () => setAlternativeDomains(((p) => {
        if(!p) {
            Alert.alert("AnonyMail", local.settings_screen.alternative_emails_message, [
                {
                    text: local.settings_screen.cancel,
                    onPress: () => {
                    },
                    style: "cancel",
                },
                {
                    text: local.settings_screen.enable,
                    onPress: async () => {
                        await AsyncStorage.setItem("@rush_mode", "true");
                        setAlternativeDomains(true);
                        Alert.alert("AnonyMail", local.settings_screen.alternative_emails_post_accept_message);
                    }
                }
            ]);
        } else {
            AsyncStorage.setItem("@rush_mode", "false");
            Alert.alert("AnonyMail", local.settings_screen.alternative_emails_post_accept_message);
            return false;
        }
        
        return false;
    }));
    
    const toggleImages = async () => setImagesEnabled(((p) => {
        if (!p) {
            Alert.alert("AnonyMail", local.settings_screen.render_images_warning, [
                {
                    text: local.settings_screen.cancel,
                    onPress: () => {
                    },
                    style: "cancel",
                },
                {
                    text: local.settings_screen.enable,
                    onPress: async () => {
                        await AsyncStorage.setItem("@images_enabled", "true");
                        setImagesEnabled(true);
                    }
                }
            ]);
        } else {
            AsyncStorage.setItem("@images_enabled", "false");
            return false;
        }
        
        return false;
    }));
    
    const clearData = async () => {
        Alert.alert("AnonyMail", local.settings_screen.clear_data_warning, [
            {
                text: local.settings_screen.cancel,
                onPress: () => {
                },
                style: "cancel",
            },
            {
                text: local.settings_screen.clear_data,
                onPress: async () => {
                    await AsyncStorage.clear();
                    await reloadAsync();
                }
            }
        ]);
    };
    
    const toggleBiometricLogin = async () => {
        const compatible = await LocalAuthentication.hasHardwareAsync();
        
        if(!compatible) {
            Alert.alert("AnonyMail", "Your device does not support biometrics.");
            return;
        }
        
        const enrolled = await LocalAuthentication.isEnrolledAsync();
        
        if(!enrolled) {
            Alert.alert("AnonyMail", "You have not enrolled in biometrics.");
            return;
        }
        
        if(biometricLoginEnabled) {
            setBiometricLoginEnabled(false);
            await AsyncStorage.setItem("@biometrics", "false");
            return;
        }
        
        const res = await LocalAuthentication.authenticateAsync();
        
        if(res.success) {
            setBiometricLoginEnabled(true);
            await AsyncStorage.setItem("@biometrics", "true");
        } else {
            alert("Please try again.");
        }
        
    };
    
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <StatusBar style="light" />
                <Button title={local.settings_screen.licenses_button_label} onPress={openOSL}/>
                <Button title={local.settings_screen.source_code_button_label} onPress={openSource}/>
                <Button title={local.settings_screen.privacy_policy_button_label} onPress={openPrivacyPolicy}/>
                <Button title={local.settings_screen.credits_button_label} onPress={openCredits}/>
                {/*<Button title={local.settings_screen.remove_ads_label} onPress={removeAds}/>*/}
                <Button title={local.settings_screen.clear_data} onPress={clearData} />
                <Text style={styles.switchText}>{local.settings_screen.javascript_switch_label}</Text>
                <Switch
                    value={scriptingEnabled}
                    onValueChange={toggleScripting}
                />
                <Text style={styles.switchText}>{local.settings_screen.alternative_emails_switch_label}</Text>
                <Switch
                    value={alternativeDomains}
                    onValueChange={toggleAlternativeDomains}
                />
                <Text style={styles.switchText}>{local.settings_screen.render_images_switch_label}</Text>
                <Switch
                    value={imagesEnabled}
                    onValueChange={toggleImages}
                />
                <Text style={styles.switchText}>{local.settings_screen.biometric_login_switch_label}</Text>
                <Switch
                    value={biometricLoginEnabled}
                    onValueChange={toggleBiometricLogin}
                />
                <Text style={styles.version}>{local.settings_screen.version.replace("%VERSION%", version)}</Text>
                <Text style={styles.version}>{local.settings_screen.languages}</Text>
                <Picker
                    selectedValue={selectedLanguage}
                    onValueChange={async (lang) => {
                        setSelectedLanguage(lang);
                        const old_lang = await AsyncStorage.getItem("@language") || "";
                        await AsyncStorage.setItem("@language", lang);
                        CoolStorage.language = localize(lang as LangType);
                        console.log(`lang: ${lang}`);
                        if(old_lang !== lang) {
                            Alert.alert("AnonyMail", localize(lang as LangType).settings_screen.language_change_message);
                        }
                    }}
                    style={styles.picker}
                    itemStyle={styles.pickerItem}
                >
                    <Picker.Item label="English" value="en" />
                    <Picker.Item label="French (Français)" value="fr" />
                    <Picker.Item label="Spanish (Español)" value="es" />
                    <Picker.Item label="Turkish (Türkçe)" value="tr" />
                    {
                        CoolStorage.easterEggDone ? (<Picker.Item label="ENGLISH (CapsLock)" value="xa" />) : null
                    }
                    {
                        CoolStorage.easterEggDone ? (<Picker.Item label="English (Pirate Speak)" value="xd" />) : null
                    }
                    {
                        CoolStorage.easterEggDone ? (<Picker.Item label="English (undefined)" value="xe" />) : null
                    }
                    {
                        CoolStorage.easterEggDone ? (<Picker.Item label="English (Random)" value="xr" />) : null
                    }
                </Picker>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        marginTop: 50,
    },
    //align the text to the center and the switch below it
    switchText: {
        fontSize: 20,
        marginTop: 20,
        marginRight: 10,
        textAlign: "right",
    },
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
    version: {
        marginTop: 10,
        fontSize: 22,
    },
    picker: {
        width: '100%',
        height: 200,
        backgroundColor: "#000000"
    },
    pickerItem: {
        color: "#FFFFFF",
    }
});
