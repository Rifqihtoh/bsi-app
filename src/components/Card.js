import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default function Card({ title, description, url }) {
  const [isOnCart, setIsOnCart] = useState(false);
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{
          uri: url,
        }}
        style={styles.cardImage}
      />
      <Text style={{ textAlign: "center", fontWeight: "bold" }}>{title}</Text>
      <Text style={{ textAlign: "center" }}>{description}</Text>
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
  },
  cardContainer: { backgroundColor: "white", borderRadius: 10, padding: 10 },
  cardImage: { width: 200, height: 200, borderRadius: 10 },
});
