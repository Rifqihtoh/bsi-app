import AppSrc from './src';
import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/store';
import ReduxConcept from './src/screens/reduxConcept';

export default function App() {
  return (
    <Provider store={store}>
      <AppSrc />
    </Provider>
  );
}