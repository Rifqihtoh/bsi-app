import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";

export default Topup = ({ route, navigation }) => {
    const [amountTemp, setAmountTemp] = useState(0);
    const [amount, setAmount] = useState(amountTemp);
    const {id} = route.params;
    console.log({id});
    console.log({amount});

  return (
    <View style={{ flex: 1, padding: 20, marginTop: 5, gap: 15 }}>
      <Text style={{ fontWeight: "bold" }}>Nilai Top-up</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setAmountTemp(text)}
        placeholder={amountTemp}
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={() => setAmount(amountTemp)}>
        <Text style={styles.buttonText}>Topup</Text>
      </TouchableOpacity>
    </View>
  );
  console.log({amount});
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 10,
    borderWidth: 1,
    borderColor: "#b3b3b3",
    placeholderColor: "#b3b3b3",
  },

  button: {
    backgroundColor: "blue",
    width: "auto",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    padding: 10,
  },
});
