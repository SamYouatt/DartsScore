import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LeaderBoard({ players, currentPlayer }) {
  return (
    <View style={styles.container}>
      {players.map((player, index) => (
        <View key={player.name}>
          <Text
            style={index === currentPlayer ? styles.currentTurn : styles.playerName}
          >
            {player.name}
          </Text>
          <Text>{player.target}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'green',
  },
  currentTurn: {
    backgroundColor: 'orange',
  },
  playerName: {
    backgroundColor: 'lightblue',
  },
});
