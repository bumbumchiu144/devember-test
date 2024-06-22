import {Text, View, StyleSheet, Platform} from "react-native";
import {Stack} from "expo-router";
import {StatusBar} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';


export default function OnboardingScreen() {
    return (
        <View style={styles.page}>
            <Stack.Screen options={{headerShown: false}}/>

            <FontAwesome5 name="people-arrows" size={24} color="black" />

            <Text style={styles.title}>Track every transaction</Text>
            <Text style={styles.description}>
                Monitor your spending and contribution,
                ensuring every penny aligns with
                your family's aspirations
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: '#15141A',
    },
    image: {},
    title: {
        backgroundColor: '#FDFDFD',
        fontSize: 30,
        fontWeight: '500',
        fontFamily: 'Inter'
    },
    description: {},

});