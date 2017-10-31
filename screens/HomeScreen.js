import React from 'react';
import { View } from 'react-native';
import { Container, Header, Content, Button, Text, Left, Body, Right, Icon,
  Title } from 'native-base';

import Style from '../Styles/Main.js';

export default class HomeScreen extends React.Component {

  render() {

    const { navigate } = this.props.navigation

    return(
      <Content>
        <Button primary onPress={() => navigate('ActivityListScreen')}>
          <Text>Liste d'activités</Text>
        </Button>
        <Button primary onPress={() => navigate('TodoListScreen')}>
          <Text>Liste de Todos</Text>
        </Button>
        <Button primary onPress={() => navigate('ActivityViewScreen')}>
          <Text>Vue d'une activité</Text>
        </Button>
        <Button primary onPress={() => navigate('TodoViewScreen')}>
          <Text>Vue d'un Todo</Text>
        </Button>
      </Content>
    );
  }
}

HomeScreen.navigationOptions = () => ({
  title: 'Yasav',
})
