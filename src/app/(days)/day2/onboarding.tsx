import {
  Text,
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
  Pressable,
} from "react-native";
import { Link, Stack, router } from "expo-router";
import { StatusBar } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";

const onboardingSteps = [
  {
    icon: "snowflake",
    titlle: "Welcome to with me",
    desciption: "Welcome to with me, ensuring every penny aligns with your family's aspirations",
  },
  {
    icon: "people-arrows",
    titlle: "Save better",
    desciption: "Learn with me, ensuring every penny aligns with your family's aspirations",
  },
  {
    icon: "people-arrows",
    titlle: "Learn and grow with togethor",
    desciption: "Monitor your spending and contribution, ensuring every penny aligns with your family's aspirations",
  },
];

export default function OnboardingScreen() {
    const [screenIndex, setScreenIndex] = useState(0);

    const data = onboardingSteps[screenIndex];

    const onContinue = () => {
        const isLastScreen = screenIndex === onboardingSteps.length - 1;
        if(isLastScreen) {
            endOnboarding();
        } else {
            setScreenIndex(screenIndex + 1);
        }
     
    }

    const endOnboarding = () => {
        setScreenIndex(0);
        router.back();
    }


  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.pageContent}>
        <FontAwesome5
          style={styles.image}
          name={data.icon}
          size={100}
          color="#CEF202"
        />

        <View style={styles.footer}>
          <Text style={styles.title}>{data.titlle}</Text>
          <Text style={styles.description}>
            {data.desciption}
          </Text>
          <View style={styles.buttonsRow}>
            <Text onPress={endOnboarding} style={styles.buttonText}>Skip</Text>
              <Pressable onPress={onContinue} style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#15141A",
    padding: 20,
  },
  pageContent: {
    padding: 20,
    flex: 1,
  },
  image: {
    alignSelf: "center",
    margin: 20,
  },
  title: {
    color: "#FDFDFD",
    fontSize: 40,
    fontFamily: "InterBlack",
    letterSpacing: 1.3,
    marginVertical: 10,
  },
  description: {
    color: "gray",
    fontSize: 20,
    fontFamily: "Inter",
    lineHeight: 28,
  },

  //footer
  footer: {
    marginTop: "auto",
  },

  buttonsRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  button: {
    backgroundColor: "#302E38",
    borderRadius: 50,
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    color: "#FDFDFD",
    fontFamily: "InterSemi",
    fontSize: 16,

    padding: 16,
    paddingHorizontal: 25,
  },
});
