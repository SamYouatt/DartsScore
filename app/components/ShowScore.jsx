import React from 'react';
import { View, Text } from 'react-native';
import InputScore from './InputScore';

export default function ShowScore() {
  const [target, setTarget] = React.useState(501);

  return (
    <View>
      <Text>Your Score:</Text>
      <Text>{target}</Text>
      <InputScore updateTarget={(score) => setTarget(target - score)} />
    </View>
  );
}
