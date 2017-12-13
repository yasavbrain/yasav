import React from 'react';
import { connect } from 'react-redux';

import TodoListView from '../views/TodoListView';

class TodoListContainer extends React.Component {

  render() {
    <TodoListView
      todoList={this.props.todoList}
    />
  }
}

function mapStateToProps(state) {
  return {
    todoList : state.todo.todoList
  }
}

export default connect(mapStateToProps)(TodoListContainer);
