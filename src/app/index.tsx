import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import DayListItem from "@components/core/DayListItem";

const days = [...Array(24)].map((val, index) => index + 1);

export default function HomeScreen() {

  return (
      <View style={styles.container}>
        <FlatList
            contentContainerStyle={styles.content}
            columnWrapperStyle={styles.column}
            numColumns={2}
            data={days}
            renderItem={({ item }) => <DayListItem day={item} /> }
        />

        {/* <FlatList
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        data={days}
        renderItem={({ item }) => (
          <View style={styles.box}>
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
        // horizontal
      /> */}

        {/* {days.map((day) => (
        <View style={styles.box} key={day}>
          <Text style={styles.text}>{day}</Text>
        </View>
      ))} */}

        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    // gap: 10,
  },

  content: {
    gap: 10,
    padding: 10,
  },

  column: {
    gap: 10,
  },

  box: {
    backgroundColor: "#F9EDE3",
    // width: 100,
    // height: 100,
    flex: 1,
    aspectRatio: 1,

    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#9b4521",
    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#9b4521",
    fontSize: 50,
  },
});
