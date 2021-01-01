import React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';
import SuggestCheckout from './SuggestCheckout';
import checkouts from '../../assets/checkout.json';

export default function ShowScore({ playerInfo }) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{playerInfo.name}</Text>
          <Text style={styles.require}>you require...</Text>
        </View>
        <Text style={styles.target}>{playerInfo.target}</Text>
      </View>
      {checkouts[playerInfo.target] ? (
        <SuggestCheckout
          style={styles.checkouts}
          target={playerInfo.target}
        />
      ) : null}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingLeft: 10,
    flex: 1,
    flexDirection: 'row',
  },
  left: {
    flex: 2,
  },
  right: {
    flex: 1,
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  name: {
    paddingRight: 8,
    fontSize: 28,
    color: '#6598eb',
    fontWeight: 'bold',
    marginRight: 0,
  },
  require: {
    fontSize: 28,
  },
  scoreContainer: {
    alignItems: 'center',
  },
  target: {
    fontSize: 70,
    fontWeight: 'bold',
  },
  checkouts: {
    borderStyle: 'solid',
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 15,
  },
});
