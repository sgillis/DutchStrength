import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store';

function setup() {
  class Root extends Component {
    constructor() {
      super();
      this.state = {
        store: configureStore(),
      };
    }

    render() {
      return (
        <Provider store={this.state.store}>
          <App />
        </Provider>
      );
    }
  }

  return Root;
}

module.exports = setup;
