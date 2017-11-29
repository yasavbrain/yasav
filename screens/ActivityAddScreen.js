import React from 'react';
import I18n from '../i18n'
import { Content, Text, Button } from 'native-base';

export default class ActivityAddScreen extends React.Component {

  render() {

    const { navigate } = this.props.navigation;

    return(
      <Content>
        <Button primary onPress={() => navigate('TodoAddScreen')}>
          <Text>{I18n.t('test')}</Text>
        </Button>
        <Text>En tant quutilisateur, je veux créer une activité générique
          qui contient un contenu et un titre</Text>
      </Content>
    );
  }
}

 ActivityAddScreen.navigationOptions = () => ({
   title: 'Ajouter une activité'
})
