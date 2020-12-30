import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import checkouts from '../../assets/checkout.json';

export default function SuggestCheckout({ target }) {
  let checkout = [];
  if (target && target <= 170 && checkouts[target]) {
    checkout = checkouts[target];
  }

  return (
    <View style={styles.container}>
      {checkout.length === 0
        ? <Text>No checkouts possible</Text>
        : checkout.map((dart, i) => <Text key={i}>{dart}</Text>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 15,
  },
});
