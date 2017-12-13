import React from 'react';
import { Content, Text } from 'native-base';
import I18n from 'yasav/locales/i18n'

export default class TodoListScreen extends React.Component {

  render() {
    return(
      <Content>
        <Text>{I18n.t('todo.todoListScreen.content')}</Text>
      </Content>
    );
  }
}

TodoListScreen.navigationOptions = () => ({
  title: I18n.t('todo.todoListScreen.title')
})
