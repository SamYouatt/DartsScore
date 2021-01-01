import React from 'react';
import {
  View, TextInput, Text, StyleSheet, Button,
} from 'react-native';

export default function CreatePlayer({ addPlayer }) {
  const [name, setName] = React.useState();

  return (
    <View style={styles.container}>
      <Text>Name:</Text>
      <TextInput
        style={styles.nameInput}
        onChange={(e) => setName(e.nativeEvent.text)}
        onSubmitEditing={() => {
          addPlayer(name);
          setName('');
        }}
        value={name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 25,
    flex: 2,
  },
  nameInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    width: 150,
    height: 40,
    textAlign: 'center',
  },
  button: {
  },
});
