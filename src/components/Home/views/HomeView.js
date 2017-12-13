import React from 'react';
import { Content, Button, Text } from 'native-base';

export default class HomeView extends React.Component {

  render() {
    return (
      <Content>
        <Button primary onPress={() => this.props.navigateToActivityList()}>
          <Text>Liste d'activités</Text>
        </Button>
        <Button primary onPress={() => this.props.navigateToTodoList()}>
          <Text>Liste de Todos</Text>
        </Button>
        <Button primary onPress={() => this.props.navigateToActivityAdd()}>
          <Text>Ajouter une activité</Text>
        </Button>
      </Content>
    )
  }
}
