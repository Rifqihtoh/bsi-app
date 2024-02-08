import { StyleSheet, TextInput, View, Button } from "react-native";
import Card from "../components/Card";
import { useState } from "react";

export default function OneScreen({ navigation }) {
  const [titleTemp, setTitleTemp] = useState("Gundam");
  const [title, setTitle] = useState(titleTemp)
  return (
    <View style={styles.container}>
      <TextInput
        value={titleTemp}
        onChangeText={(text) => setTitleTemp(text)}
        style={{
          height: 40,
          borderRadius: 4,
          borderWidth: 1,
          minWidth: 400,
          marginBottom: 5,
        }}
      />
      <Button title="ganti" onPress={() => setTitle(titleTemp)} />
      <Card title={title} description={"Infinite Justice Type-II"} url={"https://www.gundamplanet.com/media/catalog/product/cache/a7d12aefadcc79b41c0fed72ccdcd80e/h/g/hg_infinite_justice_gundam_type-gp.jpg"} />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D7D7D7",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 10,
  },
});
