import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Home></Home>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
