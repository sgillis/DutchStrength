import React, { Component } from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';


export default class Workout extends Component {
  exercises() {
    return this.props.exercises.map(function(exercise, i){
      return(
        <View style={styles.row} key={i}>
          <Text style={{flex: 2}}>{exercise.name}</Text>
          <Text style={{flex: 1}}>{exercise.weights}</Text>
          <Text style={{flex: 1}}>{exercise.sets}</Text>
        </View>
      );
    });
  }

  button() {
    return (
      <View style={styles.button}>
      <Button
      onPress={() => Alert.alert('Aww yiss, lifting')}
      title="Workout"
      color="rgba(233, 101, 26, 1)"
      />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.card}>
        <View>
        <Text style={styles.title}>{this.props.date}</Text>
        {this.exercises()}
        {this.button()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
  },
  button: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
