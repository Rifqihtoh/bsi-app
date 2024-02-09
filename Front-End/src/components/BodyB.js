import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import toRupiah from "../hooks/Rupiah";

export default function BodyB({ name, description, amount, type, navigation }) {
  const [hide, setHide] = useState(false);
  const typee = (type) => {
    if (type == "IN") {
      return "green";
    } else {
      return "red";
    }
  }
  return (
    <>
      <View style={styles.cardContainer}>
        <View style={{ flexDirection: "row", marginHorizontal: 10, justifyContent: "space-between" }}>
            <View style={{ gap: 10 }}>
                <Text style={{ fontWeight: "bold" }}>{name}</Text>
                <Text>{description}</Text>
            </View>
            <View style={{ alignContent: "center", justifyContent: "center" }}>
                <Text style={{ color: typee(type), fontWeight: "bold" }}>{toRupiah(amount)}</Text>
            </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor: "#b3b3b3",
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
    padding: 10,
    gap: 10,
  },
  cardImage: { width: 200, height: 200, borderRadius: 10 },
});
