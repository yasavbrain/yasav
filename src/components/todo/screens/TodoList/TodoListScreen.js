import React from 'react';
import TodoListContainer from './containers/TodoListContainer';

export default class TodoListScreen extends React.Component {

  render() {
    return(
      <TodoListContainer goBack={this.props.navigation.goBack} />
    );
  }
}
