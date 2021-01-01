import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import checkouts from '../../assets/checkout.json';

export default function SuggestCheckout({ target }) {
  const checkout = checkouts[target] ? checkouts[target] : [];

  return (
    <View style={styles.container}>
      {checkout.length === 0
        ? <Text>No checkouts possible</Text>
        : checkout.map((dart, i) => <Text key={i} style={styles.dart}>{dart}</Text>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: 'grey',
    paddingLeft: 4,
    borderRadius: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.40,

    elevation: 2,
  },
  dart: {
    flex: 1,
    textAlignVertical: 'center',
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 22,
  },
});
