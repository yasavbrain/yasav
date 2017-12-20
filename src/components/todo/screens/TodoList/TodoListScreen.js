import React from 'react';
import I18n from 'yasav/locales/i18n';
import TodoListContainer from './containers/TodoListContainer';

export default class TodoListScreen extends React.Component {

  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this)
  }

  goBack() {
    this.props.navigation.goBack()
  }

  render() {

    return(
      <TodoListContainer goBack={this.goBack} />
    );
  }
}
