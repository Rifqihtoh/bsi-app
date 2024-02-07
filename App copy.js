import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Separator = () => <View style={styles.separator} />;

export default function App() {
  const [text, setText] = useState("Test");
  const [num, setNum] = useState(0);
  const [rotation, setRotation] = useState();

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.cardContainer}>
        <View style={{ display: "flex", alignItems: "center" }}>
          <Image
            source={{
              uri: "https://assets.stickpng.com/images/5845e13e7733c3558233c0ec.png",
            }}
            style={{ width: 200, height: 200 }}
          />
        </View>
        <View style={{ marginVertical: 20, marginHorizontal: 10 }}>
          <Text style={styles.heading}>Heading</Text>
          <Text style={{ color: "#717171" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            risus orci, molestie ac blandit bibendum.
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#587EE2",
            width: "auto",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              padding: 10,
            }}
          >
            Action
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    marginBottom: 14,
  },
  description: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
  cardContainer: {
    display: "flex",
    marginVertical: 20,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },

  scrollContainer: {
    backgroundColor: "#D5D5D5",
    display: "flex",
    padding: 25,
  },
  button: {
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: "#007ACC",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  judul: {
    textAlign: "center",
    marginBottom: 12,
    fontWeight: "bold",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 50,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  fillbutton: {},
});
