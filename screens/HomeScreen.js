import React from 'react';
import { View } from 'react-native';
import { Container, Header, Content, Button, Text, Left, Body, Right, Icon,
  Title } from 'native-base';

import Style from '../Styles/Main.js';

export default class HomeScreen extends React.Component {

  render() {

    const { navigate } = this.props.navigation

    return(
      <View>
        <Button
          primary
          title="Liste d'activités"
          onPress={() => navigate('ActivityListScreen')}
        />
        <Button
          title="Liste de Todos"
          onPress={() => navigate('TodoListScreen')}
        />
        <Button
          title="Vue d'une activité"
          onPress={() => navigate('ActivityViewScreen')}
        />
        <Button
          title="vue d'un Todo"
          onPress={() => navigate('TodoViewScreen')}
        />
        <Button primary><Text> Primary </Text></Button>
      </View>
    );
  }
}
