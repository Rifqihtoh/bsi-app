// components/HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Text>Promise, Synch, Asynch</Text>
      <Button
        title="Go to Synch"
        onPress={() => navigation.navigate('Synchronous')}
      />
      <Button
        title="Go to Asynch"
        onPress={() => navigation.navigate('Asynchronous')}
      />
      <Button
        title="Go to Promise"
        onPress={() => navigation.navigate('Promise')}
      />
      <Text>Networking</Text>
      <Button
        title="Go to Fetch"
        onPress={() => navigation.navigate('Fetch')}
      />
      <Button
        title="Go to Axios"
        onPress={() => navigation.navigate('Axios')}
      />
      <Text>Network Posting</Text>
      <Button
        title="Go to FPost"
        onPress={() => navigation.navigate('Fetch-Post')}
      />
      <Button
        title="Go to APost"
        onPress={() => navigation.navigate('Axios-Post')}
      />
      <Text>Case Study</Text>
      <Button
        title="Go to Landing"
        onPress={() => navigation.navigate('Landing')}
      />
    </View>
  );
};

export default HomeScreen;



