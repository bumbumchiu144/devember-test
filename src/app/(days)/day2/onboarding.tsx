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
import { StatusBar as StatusBarExpo } from "expo-status-bar";
import {
  GestureDetector,
  Gesture,
  Directions,
} from "react-native-gesture-handler";

import Animated, {
  FadeIn,
  FadeOut,
  BounceInRight,
  BounceOutLeft,
  SlideInLeft,
  SlideOutRight,
} from "react-native-reanimated";

const onboardingSteps = [
  {
    icon: "snowflake",
    titlle: "Welcome to with me",
    desciption:
      "Welcome to with me, ensuring every penny aligns with your family's aspirations",
  },
  {
    icon: "people-arrows",
    titlle: "Save better",
    desciption:
      "Learn with me, ensuring every penny aligns with your family's aspirations",
  },
  {
    icon: "book-reader",
    titlle: "Learn and grow with togethor",
    desciption:
      "Monitor your spending and contribution, ensuring every penny aligns with your family's aspirations",
  },
];

export default function OnboardingScreen() {
  const [screenIndex, setScreenIndex] = useState(0);

  const data = onboardingSteps[screenIndex];

  const onContinue = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1;
    if (isLastScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };

  const onBack = () => {
    const isFirstScreen = screenIndex === 0;
    if (isFirstScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };

  const endOnboarding = () => {
    setScreenIndex(0);
    router.back();
  };

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
  );

  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBarExpo style="light" />

      <View style={styles.stepIndicatorContainer}>
        {onboardingSteps.map((step, index) => (
          <View
            key={index}
            style={[
              styles.stepIndicator,
              { backgroundColor: index == screenIndex ? "#CEF202" : "gray" },
            ]}
          />
        ))}
      </View>

      <GestureDetector gesture={swipes}>
        <View style={styles.pageContent} key={screenIndex}>
          <Animated.View entering={BounceInRight}>
            <FontAwesome5
              style={styles.image}
              name={data.icon}
              size={150}
              color="#CEF202"
            />
          </Animated.View>

          <View style={styles.footer}>
            <Animated.Text entering={SlideInLeft.duration(1500)} exiting={SlideOutRight} style={styles.title}>
              {data.titlle}
            </Animated.Text>
            <Animated.Text entering={SlideInLeft.delay(200)} style={styles.description}>
              {data.desciption}
            </Animated.Text>
            <View style={styles.buttonsRow}>
              <Text onPress={endOnboarding} style={styles.buttonText}>
                Skip
              </Text>
              <Pressable onPress={onContinue} style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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
    marginTop: 50,
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

  //step
  stepIndicatorContainer: {
    flexDirection: "row",
    gap: 5,
    marginHorizontal: 15,
  },
  stepIndicator: {
    flex: 1,
    height: 4,
    backgroundColor: "gray",
    borderRadius: 10,
  },
});
