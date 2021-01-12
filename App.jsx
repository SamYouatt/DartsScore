import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Darts from './app/screens/Darts';
import ChooseGamemode from './app/screens/ChooseGamemode';
import Cricket from './app/screens/Cricket';
import RoundTheWorld from './app/screens/RoundTheWorld';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ChooseGamemode"
        headerMode="false"
      >
        <Stack.Screen name="ChooseGamemode" component={ChooseGamemode} />
        <Stack.Screen name="501Darts" component={Darts} />
        <Stack.Screen name="Cricket" component={Cricket} />
        <Stack.Screen name="RoundTheWorld" component={RoundTheWorld} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
