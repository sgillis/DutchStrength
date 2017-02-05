import React, { Component } from 'react';
import { Navigator, View } from 'react-native';
import Home from './Home';


export default class DSNavigator extends Component {
  render() {
    return (
      <Navigator
      initialRoute={{id: 'home'}}
      style={{flex: 1}}
      renderScene={this.renderScene}
      />
    );
  }

  renderScene(route, navigator) {
    if (route.id === 'home') {
      return (
        <Home navigator={navigator} />
      );
    }
  }
}
