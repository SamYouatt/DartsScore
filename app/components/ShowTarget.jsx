import React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';
import SuggestCheckout from './SuggestCheckout';

export default function ShowScore({ playerInfo }) {
  const displayScore = () => (
    <View>
      <View style={styles.container}>
        <Text style={styles.name}>{playerInfo.name}</Text>
        <Text>You Require:</Text>
      </View>
      <View style={styles.scoreContainer}>
        <Text style={styles.score}>{playerInfo.target}</Text>
        <SuggestCheckout
          style={styles.checkouts}
          target={playerInfo.target}
        />
      </View>
    </View>
  );

  return (
    <View>
      {playerInfo ? displayScore() : <Text>Add players to start</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 24,
    textAlign: 'center',
    color: '#6598eb',
    fontWeight: 'bold',
    marginRight: 0,
  },
  scoreContainer: {
    alignItems: 'center',
  },
  score: {
    backgroundColor: 'red',
  },
  checkouts: {
    borderStyle: 'solid',
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 15,
  },
});
