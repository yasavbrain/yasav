import React from 'react';
import { Content, Button, Text } from 'native-base';

export default class ActivityListScreen extends React.Component {

  render() {

    const { navigate } = this.props.navigation;
    return(
      <Content>
        <Button primary onPress={() => navigate('ActivityViewScreen')}>
          <Text>Voir une activité</Text>
        </Button>
        <Text>En tant quutilisateur, je veux pouvoir visualiser la liste de
          mes activités</Text>
      </Content>
    );
  }
}

 ActivityListScreen.navigationOptions = () => ({
   title: 'Liste des activités'
})
