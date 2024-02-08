import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import toRupiah from "../hooks/Rupiah";

export default function BodyB() {
  return (
    <>
      <View style={styles.cardContainer}>
        <Text style={{ fontWeight: "bold", position: "absolute", top:-30, fontSize: 20 }}>Transaksi</Text>
        <View style={{ flexDirection: "row", marginHorizontal: 10, justifyContent: "space-between" }}>
            <View style={{ gap: 10 }}>
                <Text>Top Up</Text>
                <Text>Tokopedia</Text>
            </View>
            <View style={{ alignContent: "center", justifyContent: "center" }}>
                <Text style={{ color: "red" }}>{toRupiah(10000)}</Text>
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
    marginVertical: 60,
    marginHorizontal: 20,
    padding: 10,
    gap: 10,
  },
  cardImage: { width: 200, height: 200, borderRadius: 10 },
});
