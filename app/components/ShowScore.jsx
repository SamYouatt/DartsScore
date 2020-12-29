import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputScore from './InputScore';

export default function ShowScore({ target }) {
  return (
    <View style={styles.container}>
      <Text>Your Score:</Text>
      <Text>{target}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
});
