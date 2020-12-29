import React, { Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LeaderBoard({ players, currentPlayer }) {
  if (players.length === 0) {
    return <Text>No players yet!</Text>;
  }

  return (
    <View>
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
  currentTurn: {
    backgroundColor: 'orange',
  },
  playerName: {
    backgroundColor: 'lightblue',
  },
});
