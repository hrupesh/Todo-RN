import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import TodoScreen from './app/TodoScreen';

export default function App() {
  return (
    <SafeAreaView>
      <TodoScreen />
    </SafeAreaView>
  );
}
