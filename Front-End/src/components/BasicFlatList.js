const { ScrollView, Text, FlatList } = require("react-native");

const DATA = [
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSIA",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
  "Halo BSI",
];
const BasicFlatList = () => {
  return (
    <FlatList
      data={DATA}
      keyExtractor={(item) => item}
      renderItem={({ item }) => <Text>{item}</Text>}
    />
  );
};

export default BasicFlatList;
