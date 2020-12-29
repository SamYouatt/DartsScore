import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputScore from './app/components/InputScore';
import ShowScore from './app/components/ShowScore';

export default function App() {
  return (
    <View style={styles.container}>
      <ShowScore />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
