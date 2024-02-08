import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, Text, Button, Image, ScrollView } from "react-native";

const AxiosScreen = ({ navigation }) => {
  // tipe data
  // string => all characters in keyboard with quote => "" '' `` => contoh : "Saya Budi"
  // number => 1-9 => contoh : 90909
  // boolean => true | false
  // object => kumpulan data yg menjelaskan satu entitas => person : { name:"Budi", gender: "Male" }
  // array => kumpulan data jamak => people : [{ name:"Budi", gender: "Male" }, { name:"Siska", gender: "Female" }]

  const [result, setResult] = useState([]);
  useEffect(() => {
    console.log("AXIOS START");
    getWithAsync();
  }, []);

  const getWithCallback = () => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((response) => setResult(response.data?.data))
      .catch((error) => console.log(error));
  }
  const getWithAsync = async () => {
    try {
      const response = await axios({
        url: "https://reqres.in/api/users?page=2",
        method: "GET",
      });
      console.log("res", response);
      setResult(response.data?.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <ScrollView
        style={{
          paddingHorizontal: 10,
        }}
      >
        {result &&
          result.map((item) => (
            <View
              key={item.id}
              style={{
                flex: 1,
                flexDirection: "row",
                gap: 20,
                paddingHorizontal: 10,
                paddingVertical: 10,
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: item.avatar,
                }}
                style={{ width: 50, height: 50, borderRadius: 25, borderColor: "black", borderWidth: 1 }}
              />
              <View>
                <Text>
                  {item.first_name} {item.last_name}
                </Text>
                <Text>{item.email}</Text>
              </View>
            </View>
          ))}
      </ScrollView>
    </>
  );
};

export default AxiosScreen;
