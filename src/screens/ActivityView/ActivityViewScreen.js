import React from 'react';
import { Text } from 'react-native';
import { Content } from 'native-base';
import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');

export default class ActivityViewScreen extends React.Component {

  render() {
    let { state } = this.props.navigation;

    if( state.params ){
      return(
        <Content>
          <Text>Bonsoir voici l'activité</Text>
          <Text>{ state.params.activity ? state.params.activity.title : null }</Text>
          <Text>{state.params.activity.description}</Text>
          <Text>{state.params.activity.date.format("DD/MM/YYYY HH:mm") }</Text>
        </Content>
      );
    }else{
      return(
        <Content>
          <Text>404 Not Found</Text>
        </Content>
      )
    }
  }
}

ActivityViewScreen.navigationOptions = () => ({
  title: 'Voir une activité'
})
