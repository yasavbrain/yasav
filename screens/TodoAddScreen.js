import React from 'react';
import { Text } from 'react-native';
import { Content } from 'native-base';

export default class TodoAddScreen extends React.Component {

  render() {
    return(
      <Content>
        <Text>En tant quutilisateur, je veux pouvoir me créer une TODO lors
         de la créa dune acti</Text>
      </Content>
    );
  }
}

 TodoAddScreen.navigationOptions = () => ({
   title: 'Ajouter un todo'
})
