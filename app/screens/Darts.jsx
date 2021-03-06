import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CreatePlayer from '../components/CreatePlayer';
import LeaderBoard from '../components/LeaderBoard';
import ShowTarget from '../components/ShowTarget';
import InputScore from '../components/InputScore';
import SuggestCheckout from '../components/SuggestCheckout';

export default function Darts() {
  const [players, setPlayers] = React.useState([]);
  const [currentPlayer, setCurrentPlayer] = React.useState(0);

  const addPlayer = (name) => {
    const newPlayer = {
      name,
      target: 501,
    };
    setPlayers((prevState) => [...prevState, newPlayer]);
  };

  const updateTarget = (score) => {
    const currentScores = [...players];
    currentScores[currentPlayer].target -= score;
    setPlayers(currentScores);

    let currentPlayerIndex = currentPlayer;
    currentPlayerIndex += 1;
    if (currentPlayerIndex > players.length - 1) {
      currentPlayerIndex -= players.length;
    }
    setCurrentPlayer(currentPlayerIndex);
  };

  return (
    <View style={styles.container}>
      {players.length > 0
        ? (
          <>
            <ShowTarget
              playerInfo={players[currentPlayer]}
              style={styles.showTarget}
            />
            <LeaderBoard
              players={players}
              currentPlayer={currentPlayer}
              style={styles.leaderboard}
            />
            <InputScore
              submitScore={updateTarget}
              style={styles.inputScore}
            />
          </>
        )
        : <Text>Add a player to start scoring</Text>}

      <CreatePlayer
        addPlayer={addPlayer}
        style={styles.addPlayer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  showTarget: {
    flex: 1,
  },
  leaderboard: {
    flex: 2,
  },
  inputScore: {
    flex: 2,
  },
  addPlayer: {
    flex: 2,
    borderWidth: 1,
    borderColor: 'grey',
  },
});
