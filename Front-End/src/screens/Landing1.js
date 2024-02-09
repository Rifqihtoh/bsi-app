import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from "react-native";
import Saldo from "../components/Saldo";
import BodyB from "../components/BodyB";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Landing1({navigation}) {
  const [result, setResult] = useState([]);
  const [result2, setResult2] = useState([]);
  useEffect(() => {
    console.log("AXIOS START");
    getWithAsync();
    getWithAsync2();
  }, []);

  const getWithAsync = async () => {
    try {
      const response = await axios({
        url: "http://localhost:3000/wallet/1",
        method: "GET",
      });
      console.log("res", response);
      setResult(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getWithAsync2 = async () => {
    try {
      const response = await axios({
        url: "http://localhost:3000/transaction/1",
        method: "GET",
      });
      console.log("res", response);
      setResult2(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {result && result.map((result) => (
        <Saldo key={result.id} id={result.id} name={result.username} saldo={result.balance} navigation={navigation}/>
      ))}
      <View style={{ marginTop: 30, gap: 20, flexDirection: "column", paddingHorizontal: 10 }}>
        <Text style={{ fontWeight: "bold", left: 30, bottom: -20,fontSize: 20}}>Transaksi</Text>
        <FlatList
          data={result2}
          renderItem={({item}) => <BodyB name={item.name} description={item.description} amount={item.amount} type={item.type} navigation={navigation}/>}
        />
      </View>
      {/* <Text style={{ fontWeight: "bold"}}>Transaksi</Text>
      <FlatList style={{marginTop: 50, gap: 20}}
        data={result2}
        renderItem={({item}) => <BodyB name={item.name} description={item.description} balance={item.balance} navigation={navigation}/>}/> */}
      {/* <BodyB /> */}
    </>
  );
}
