import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function InputScore(props) {
  const [value, setText] = React.useState();

  const submitScore = (e) => {
    props.updateTarget(e.nativeEvent.text);
    setText('');
  };

  return (
    <View>
      <TextInput
        onChangeText={(score) => setText(score)}
        onSubmitEditing={submitScore}
        value={value}
        style={styles.scoreInput}
        keyboardType="number-pad"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scoreInput: {
    borderColor: 'black',
    borderWidth: 1,
    width: 150,
    height: 40,
    textAlign: 'center',
  },
});
