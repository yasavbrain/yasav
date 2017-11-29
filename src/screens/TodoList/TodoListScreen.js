import React from 'react';
import { Content, Text } from 'native-base';

export default class TodoListScreen extends React.Component {

  render() {
    return(
      <Content>
        <Text>En tant quutilisateur, je veux pouvoir voir toutes mes ToDo
          sous forme de liste</Text>
      </Content>
    );
  }
}

TodoListScreen.navigationOptions = () => ({
  title: 'Liste des todo'
})
