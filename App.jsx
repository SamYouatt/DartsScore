import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreatePlayer from './app/components/CreatePlayer';
import LeaderBoard from './app/components/LeaderBoard';
import ShowScore from './app/components/ShowScore';
import InputScore from './app/components/InputScore';
import SuggestCheckout from './app/components/SuggestCheckout';

export default function App() {
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
    const playerScores = players;
    playerScores[currentPlayer].target -= score;

    let currentPlayerIndex = currentPlayer;
    currentPlayerIndex += 1;
    if (currentPlayerIndex > players.length - 1) {
      currentPlayerIndex -= players.length;
    }
    setCurrentPlayer(currentPlayerIndex);
    setPlayers(playerScores);
  };

  return (
    <View style={styles.container}>
      <LeaderBoard players={players} currentPlayer={currentPlayer} />
      <ShowScore
        target={players.length === 0 ? 'Add players to start scoring!' : players[currentPlayer].target}
      />
      {/* <SuggestCheckout
        target={players.length === 0 ? '' : players[currentPlayer].target}
      /> */}
      <InputScore
        submitScore={updateTarget}
      />
      <CreatePlayer
        addPlayer={addPlayer}
        style={styles.addPlayer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerInput: {
    marginTop: 25,
    backgroundColor: 'red',
  },
});
