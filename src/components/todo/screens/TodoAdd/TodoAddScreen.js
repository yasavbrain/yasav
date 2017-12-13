import React from 'react';
import { Text } from 'react-native';
import { Content } from 'native-base';
import I18n from 'yasav/locales/i18n'

export default class TodoAddScreen extends React.Component {

  render() {
    return(
      <Content>
        <Text>{I18n.t('todo.todoAddScreen.content')}</Text>
      </Content>
    );
  }
}

 TodoAddScreen.navigationOptions = () => ({
   title: I18n.t('todo.todoAddScreen.title')
})
