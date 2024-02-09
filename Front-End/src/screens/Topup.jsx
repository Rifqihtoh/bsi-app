import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import axios from "axios";
import React, { useState } from "react";

export default Topup = ({ route, navigation }) => {
  const [amount, setAmount] = useState(0);
  const { id } = route.params;
  const [loadingAxios, setLoadingAxios] = useState("");
  const [resultAxios, setResultAxios] = useState("");
  console.log({ id });
  console.log({ amount });

  const handleSubmit = async () => {
    submitWithAxios()
    .then(submitPatchAxios())
    .then(() => navigation.navigate("Landing"))
    .catch((error) => console.error(error));
  }
  const submitPatchAxios = async () => {
    try {
      setAmount(amount);
      const payload = {
        balance: amount,
      };
      setLoadingAxios(true);
      const response = await axios({
        baseURL: "http://localhost:3000",
        url: "/wallet/" + id,
        method: "PATCH",
        data: payload,
      });
      setLoadingAxios(false);
      setResultAxios("Top-Up Successful!");
      return response;
    } catch (error) {
      setLoadingAxios(false);
      console.error(error);
    }
  }
  const submitWithAxios = async () => {
    try {
      setAmount(amount);
      const payload = {
        amount: amount,
      };
      setLoadingAxios(true);
      const response = await axios({
        baseURL: "http://localhost:3000",
        url: "/wallet/" + id,
        method: "POST",
        data: payload,
      });
      setLoadingAxios(false);
      return response;
    } catch (error) {
      setLoadingAxios(false);
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, marginTop: 5, gap: 15 }}>
      <Text style={{ fontWeight: "bold" }}>Nilai Top-up</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setAmount(text)}
        placeholder={amount}
      ></TextInput>
      {loadingAxios ? (<ActivityIndicator size="large" color="blue" /> ): (<TouchableOpacity
        style={styles.button}
        onPress={() => handleSubmit()}
      >
        <Text style={styles.buttonText}>Topup</Text>
      </TouchableOpacity>)}
      {resultAxios && <Text>{resultAxios}</Text>}
    </View>
  );
  console.log({ amount });
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
