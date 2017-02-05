import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class Nav extends Component {
  render() {
    return (
      <View style={styles.nav}>
        <Text style={styles.title}>Dutch strength</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nav: {
    paddingLeft: 12,
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(233, 101, 26, 1)",
  },

  title: {
    paddingTop: 20,
    color: "white",
    fontSize: 24,
    fontWeight: 'bold',
  }
});
