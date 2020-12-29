import React from 'react';
import { View, Text } from 'react-native';
import checkouts from '../../assets/checkout.json';

export default function SuggestCheckout({ target }) {
  const checkout = checkouts[target];

  return (
    <View>
      <Text>{checkout}</Text>
    </View>
  );
}
