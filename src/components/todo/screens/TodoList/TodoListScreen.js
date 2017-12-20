import React from 'react';
import { Content, Text } from 'native-base';
import I18n from 'yasav/locales/i18n'
import TodoListContainer from './containers/TodoListContainer';

export default class TodoListScreen extends React.Component {

  render() {
    return(
      <TodoListContainer goBack={this.props.navigation.goBack} />
    );
  }
}
