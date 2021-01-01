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
    justifyContent: 'space-around',
    width: '100%',
    // borderTopColor: 'grey',
    // borderTopWidth: 2,
    paddingLeft: 15,
    paddingRight: 15,

    // borderColor: 'grey',
    // borderWidth: 1,
    // borderRadius: 15,
  },
  player: {
    marginTop: 25,
    height: 60,
    minWidth: 50,
    justifyContent: 'center',
  },
  currentPlayer: {
    height: 80,
    minWidth: 50,
    justifyContent: 'center',
  },
  currentTurn: {
  },
  playerName: {
    fontWeight: 'bold',
    textAlign: 'center',

    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: 'lightgrey',

    height: 30,
    textAlignVertical: 'center',

    borderColor: 'grey',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  target: {
    height: 30,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center',

    borderColor: 'grey',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
  },
});
