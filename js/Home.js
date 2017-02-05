import React, { Component } from 'react';
import { View } from 'react-native';

import Nav from "./components/Nav";
import Workouts from "./components/Workouts";


export default class Home extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Nav />
        <Workouts />
      </View>
    );
  }
}
