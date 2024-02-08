import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Test = ({ item }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.text}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Test;