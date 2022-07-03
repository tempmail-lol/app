/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {FontAwesome} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName, Pressable} from 'react-native';

import Colors from '../constants/Colors';
import EmailAddressScreen from '../screens/EmailAddressScreen';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import {RootStackParamList, RootTabParamList, RootTabScreenProps} from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import ModalShareThingy from "../util/ModalShareThingy";

export default function Navigation({colorScheme}: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator/>
        </NavigationContainer>
    );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} options={{headerShown: false}}/>
            <Stack.Group screenOptions={{presentation: 'modal'}}>
                <Stack.Screen name="Email View (swipe down to close)" component={ModalScreen}/>
            </Stack.Group>
        </Stack.Navigator>
    );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    const colorScheme = "dark";
    
    return (
        // @ts-ignore
        <BottomTab.Navigator
            // @ts-ignore
            initialRouteName="Address"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
            }}>
            
            <BottomTab.Screen
                // @ts-ignore
                name="Address"
                component={EmailAddressScreen}
                // @ts-ignore
                options={({navigation}: RootTabScreenProps<'Address'>) => ({
                        sender: 'Address',
                        tabBarIcon: ({color}) => <TabBarIcon name="at" color={color}/>,
                        headerRight: () => (
                            <Pressable
                                onPress={() => navigation.navigate('Modal')}
                                style={({pressed}) => ({
                                    opacity: pressed ? 0.5 : 1,
                                })}>
                                <FontAwesome
                                    name="info-circle"
                                    size={25}
                                    color={Colors[colorScheme].text}
                                    style={{marginRight: 15}}
                                />
                            </Pressable>
                        ),
                    })}
            />
            
            <BottomTab.Screen
                name="Emails"
                component={TabOneScreen}
                /*@ts-ignore*/
                options={({navigation}: RootTabScreenProps<'Emails'>) => {
                    ModalShareThingy.modal = navigation;
                    return ({
                        sender: 'Emails',
                        tabBarIcon: ({color}) => <TabBarIcon name="envelope" color={color}/>,
                        headerRight: () => (
                            <Pressable
                                onPress={() => navigation.navigate('Modal')}
                                style={({pressed}) => ({
                                    opacity: pressed ? 0.5 : 1,
                                })}>
                                <FontAwesome
                                    name="info-circle"
                                    size={25}
                                    color={Colors[colorScheme].text}
                                    style={{marginRight: 15}}
                                />
                            </Pressable>
                        ),
                    });
                }}
            />
            <BottomTab.Screen
                name="TabTwo"
                component={TabTwoScreen}
                options={{
                    sender: 'Tab Two',
                    tabBarIcon: ({color}) => <TabBarIcon name="code" color={color}/>,
                }}
            />
        </BottomTab.Navigator>
    );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={30} style={{marginBottom: -3}} {...props} />;
}
