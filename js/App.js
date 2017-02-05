import React, { Component } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import DSNavigator from './DSNavigator';

export default class App extends Component {
  render() {
    return (
        <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor="rgba(233, 101, 26, 1)"
          barStyle="light-content"
        />
        <DSNavigator />
        </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
