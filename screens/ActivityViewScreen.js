import React from 'react';
import { Text } from 'react-native';
import { Content } from 'native-base';

export default class ActivityViewScreen extends React.Component {

  render() {
    return(
      <Content>
        <Text>En tant quutilisateur, je veux pouvoir visualiser une
          activité</Text>
      </Content>
    );
  }
}

ActivityViewScreen.navigationOptions = () => ({
  title: 'Voir une activité'
})
