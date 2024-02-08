// components/DetailsScreen.js
import React from "react";
import { View, Text, Button } from "react-native";

const DetailsScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text>Details Screen</Text>
      <Button title="Go to One" onPress={() => navigation.navigate("One")} />
    </View>
  );
};

export default DetailsScreen;
