import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default function Card2({ head, desc, url }) {
  const [isOnCart, setIsOnCart] = useState(false);
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{
          uri: url,
        }}
        style={styles.cardImage}
      />
      <Text style={{ textAlign: "center", fontWeight: "bold" }}>{head}</Text>
      <Text style={{ textAlign: "center" }}>{desc}</Text>
      <TouchableOpacity onPress={() => setIsOnCart(!isOnCart)}>
        {!isOnCart ? (
          <View
            style={{ backgroundColor: "blue", marginTop: 10, borderRadius: 10 }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              Tambah ke keranjang
            </Text>
          </View>
        ) : (
          <View
            style={{ backgroundColor: "red", marginTop: 10, borderRadius: 10 }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              Hapus dari Keranjang
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D7D7D7",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    marginVertical: 20,
    rowGap: 100,
  },
  cardContainer: { backgroundColor: "white", borderRadius: 10, padding: 10, gap: 10, marginVertical: 10,},
  cardImage: { width: 200, height: 200, borderRadius: 10 },
});
