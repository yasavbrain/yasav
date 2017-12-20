import React from 'react';
import { connect } from 'react-redux';

import TodoListView from '../views/TodoListView';
import { toggleTodo } from '../../TodoAdd/actions/index';

class TodoListContainer extends React.Component {
  constructor(props) {
    super(props)
    this.toggleTodo = this.toggleTodo.bind(this)
  }
  
  toggleTodo(id) {
    this.props.toggleTodo(id)

  }

  render() {
    return (
      <TodoListView
        todoList={this.props.todoList}
        goBack={this.props.goBack}
        toggleTodo={ this.toggleTodo }
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    todoList: state.todo.todoList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTodo : (id) => dispatch(toggleTodo(id))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
