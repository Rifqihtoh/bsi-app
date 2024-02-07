import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import Saldo from "../components/Saldo";
import BodyB from "../components/BodyB";

export default function Landing1({navigation}) {
  return (
    <>
      <Saldo name="Budi" saldo={10000} navigation={navigation}/>
      <BodyB />
    </>
  );
}
