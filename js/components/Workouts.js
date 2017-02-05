import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';

import Workout from './Workout';

const Monday = [{
  "name": "Power Snatch",
  "weights": "39-46",
  "sets": "4-6/4",
}, {
  "name": "Snatch",
  "weights": "62-70",
  "sets": "6-8/2-3"
}, {
  "name": "Clean & Jerk",
  "weights": "64-74",
  "sets": "6-8/2-3"
}, {
  "name": "Split Jerk (Rack)",
  "weights": "59-69",
  "sets": "4-5/5"
}, {
  "name": "Dead Pull Snatch",
  "weights": "72-82",
  "sets": "5/5"
}, {
  "name": "Back Squat",
  "weights": "91-104",
  "sets": "6/5"
}];

const Wednesday = [{
  "name": "Drop/Balance Snatch",
  "weights": "49-57",
  "sets": "4/3",
}, {
  "name": "Snatch",
  "weights": "53-62",
  "sets": "6-7/2-3"
}, {
  "name": "Clean & Jerk",
  "weights": "74-83",
  "sets": "7-8/2-3"
}, {
  "name": "High Pull Clean",
  "weights": "54-63",
  "sets": "4-5/3"
}, {
  "name": "Front Squat",
  "weights": "78-89",
  "sets": "5-6/5"
}];

export default class Workouts extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Workout exercises={Monday} date="Monday, February 6"/>
        <Workout exercises={Wednesday} date="Wednesday, February 8"/>
        <Workout exercises={Monday} date="Monday, February 6"/>
        <Workout exercises={Wednesday} date="Wednesday, February 8"/>
        <Workout exercises={Monday} date="Monday, February 6"/>
        <Workout exercises={Wednesday} date="Wednesday, February 8"/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(43,45,55,1)",
  }
});
