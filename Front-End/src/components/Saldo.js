import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import toRupiah from "../hooks/Rupiah";

export default function Saldo({ name, saldo, navigation }) {
    //   const [hide, setHide] = useState(false);
  // IF ELSE =>
  // IF (condition){
  //    return(jsx)
  // }
  // return (jsx)
  //
  // TERNARY ? :
  // TERNARY &&
  return (
    <>
      <View style={styles.cardContainer}>
        <Text style={{ fontWeight: "bold" }}>Hi {name}, saldo anda :</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{toRupiah(saldo)}</Text>
        {saldo == 0 ? (
          <Text style={{ color: "red" }}>segera isi saldo anda</Text>
        ) : (
          <View style={{ height: 10 }}></View>
        )}
        <TouchableOpacity onPress={() => navigation.navigate('Topup')}
          style={styles.topupButton}
        >
          <Text style={{ textAlign: "center", color: "white"}}>Top Up</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#b3b3b3",
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 20,
    padding: 10,
    gap: 10,
  },
  cardImage: { width: 200, height: 200, borderRadius: 10 },
  topupButton: {
    position: "absolute",
    right: 30,
    bottom: -20,
    padding: 10,
    backgroundColor: "blue",
    width: 160,
    borderRadius: 5,
  }
});
