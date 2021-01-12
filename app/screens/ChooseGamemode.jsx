import React from 'react';
import {
  View, Text, Button, StyleSheet,
} from 'react-native';

export default function ChooseGamemode({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Select your mode</Text>
      <Button
        title="501 Darts"
        onPress={() => navigation.navigate('501Darts')}
        style={styles.button}
      />
      <Button
        title="Cricket"
        onPress={() => navigation.navigate('Cricket')}
      />
      <Button
        title="Round the World"
        onPress={() => navigation.navigate('RoundTheWorld')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
  },
});
