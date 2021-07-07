import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ajax from './FetchCoin';
import CoinList from './CoinList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#B6A6BB',
  }
})

export class Coin extends Component {

  state = {
    coins: []
  }

  async componentDidMount() {
    const coins = await ajax.fetchCoins();
    this.setState({coins});
  }

  render() {
    return (
      <View style={styles.container}>
      {
        this.state.coins.length > 0
        ? <CoinList coins={this.state.coins} />
        : <Text>No coins</Text>
      }
      </View>
    )
  }
}

export default Coin;