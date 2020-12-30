import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreatePlayer from './app/components/CreatePlayer';
import LeaderBoard from './app/components/LeaderBoard';
import ShowTarget from './app/components/ShowTarget';
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
          <View>
            <LeaderBoard players={players} currentPlayer={currentPlayer} />
            <ShowTarget playerInfo={players[currentPlayer]} />
            <InputScore
              submitScore={updateTarget}
            />
          </View>
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
