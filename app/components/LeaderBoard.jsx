import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LeaderBoard({ players, currentPlayer }) {
  return (
    <View style={styles.container}>
      {players.map((player, index) => (
        <View
          key={player.name}
          style={index === currentPlayer ? styles.currentPlayer : styles.player}
        >
          <Text
            style={styles.playerName}
          >
            {player.name}
          </Text>
          <Text style={styles.target}>{player.target}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    paddingLeft: 5,
    paddingRight: 5,
  },
  player: {
    height: 80,
    minWidth: 35,
    justifyContent: 'center',
  },
  currentPlayer: {
    height: 80,
    minWidth: 35,
    justifyContent: 'center',
  },
  currentTurn: {
  },
  playerName: {
    fontWeight: 'bold',
    textAlign: 'center',

    height: 30,
    textAlignVertical: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  target: {
    height: 30,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center',
  },
});
