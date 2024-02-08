import {
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Card from "./src/components/Card";
import { useState } from "react";

export default function App() {
  const [title, setTitle] = useState("HGCE Gundam");
  const [isGanti, setGanti] = useState(title);
  const [title2, setTitle2] = useState("HGCE Gundam");
  const [isGanti2, setGanti2] = useState(title2);
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <TextInput
          onChangeText={(text) => setTitle(text)}
          value={title}
          style={{
            height: 40,
            borderRadius: 4,
            borderWidth: 1,
            minWidth: 400,
            marginBottom: 5,
          }}
        />
        <Button title="Ganti" onPress={() => setGanti(title)} />
      </View>
      <Card
        title={isGanti}
        description={"Athrun Zala's Upgraded Infinite Justice"}
        url={
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPPDDhmS0WDq3JWVpz2gnGr7ZDeisAILlNvM1Y-qTS8_KBG4-wUVR2toS6d_Mq_elMqG6xH5u-rtUAkA7QbP5ZjBlO_yalBjLnkTM3pDToZqzcdD6WXj0OomKgJ9SAMn5nMG7xHW_Hf89kptZnb_6ueAY_-AZeacwpMTRkvkiHckYf_H6HIjcERsRvOQ/s1014/hgce%20infinite%20justice%20gundam%20type%20ii%20(3).png"
        }
      />
      <View
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <TextInput
          onChangeText={(text) => setTitle2(text)}
          value={title2}
          style={{
            height: 40,
            borderRadius: 4,
            borderWidth: 1,
            minWidth: 400,
            marginBottom: 5,
          }}
        />
        <Button title="Ganti" onPress={() => setGanti2(title2)} />
      </View>
      <Card
        title={isGanti2}
        description={"Kira Yamato's Upgraded Strike Freedom"}
        url={
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmPUYsp-10Y4hRU3EweLN-y3dQBjd59s5Tncna-SvtSHHUxbG2jWO6QidnaY4qsBdK-mfCyDlqOuUfU_ZyytaI4CKhNbX2uMWq-yXQqtHcXNwlg4UidqEFhJeyEP3z-L6RZwEsbQypo1YcRUXP7-C5t6JLXnzNvIa8zXdUCRFAZ5W6lMZMWrP1xjOTfw/s1013/hgce%20mighty%20strike%20freedom%20gundam%20(4).png"
        }
      />
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
