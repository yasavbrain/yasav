import React from 'react';
import { connect } from 'react-redux';

import TodoListView from '../views/TodoListView';

class TodoListContainer extends React.Component {
  render() {
    return (
      <TodoListView
        todoList={this.props.todoList}
        goBack={this.props.goBack}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    todoList: state.todo.todoList,
  };
}

export default connect(mapStateToProps)(TodoListContainer);
