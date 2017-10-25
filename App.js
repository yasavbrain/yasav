import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Style from './Styles/Main.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={Style.home.container}>
        <Text style={Style.home.insultAlex}>Alexandre, t'es pas gentil</Text>
      </View>
    );
  }
}