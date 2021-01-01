import React from 'react';
import {
  View, TextInput, StyleSheet, Text,
} from 'react-native';

export default function InputScore({ submitScore }) {
  const [value, setText] = React.useState();

  return (
    <View style={styles.container}>
      <Text>Score:</Text>
      <TextInput
        onChangeText={(score) => setText(score)}
        onSubmitEditing={(e) => {
          submitScore(e.nativeEvent.text);
          setText('');
        }}
        value={value}
        style={styles.scoreInput}
        keyboardType="number-pad"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scoreInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    width: 150,
    height: 40,
    textAlign: 'center',
  },
});
