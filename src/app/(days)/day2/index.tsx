import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const DayDetailsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 2: Onboarding" }} />
      <Text>Day Details Screen 2</Text>
      <View style={styles.button}>
        <Link href="/day2/onboarding" asChild >
          <Text style={styles.buttonText}>Go to onboarding</Text>
        </Link>
      </View>
    </View>
  );
};

export default DayDetailsScreen;

const styles = StyleSheet.create({
  button: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'royalblue',
    borderRadius: 20
  },
  buttonText: {
    fontSize: 30,
    color: 'white'
  },
});
