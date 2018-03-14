import React from 'react';
import { connect } from 'react-redux';

import { StatusEnum } from 'yasav/src/const';
import TodoListView from '../views/TodoListView';
import { toggleTodo, deleteTodo } from '../../TodoAdd/actions/index';
import { getTodoList } from '../actions';

class TodoListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.filterTodos = this.filterTodos.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.state = {
      visible: -1,
      displayedTodos: null,
    };
  }

  componentDidMount() {
    this.props.getTodoList()
      .then(() => this.filterTodos(this.state.visible));
  }

  filterTodos(newSelectedFilter) {
    if (newSelectedFilter === -1) {
      this.setState({
        visible: newSelectedFilter,
        displayedTodos: this.props.todoList.sort((a, b) => (a.status - b.status === 0)? b.id - a.id : a.status - b.status),
      });
    } else {
      this.setState({
        visible: newSelectedFilter,
        displayedTodos: this.props.todoList.filter(todo => (todo.status === newSelectedFilter)).sort((a, b) => (a.status - b.status === 0)? b.id - a.id : a.status - b.status),
      });
    }
  }

  toggleTodo(item) {
    this.props.toggleTodo(item)
      .then(() => {
        this.filterTodos(this.state.visible);
      });
  }

  deleteTodo(item) {
    this.props.deleteTodo(item)
      .then(() => {
        this.filterTodos(this.state.visible);
      });
  }

  render() {
    return (
      <TodoListView
        todoList={this.state.displayedTodos}
        visible={this.state.visible}
        goBack={this.props.goBack}
        toggleTodo={this.toggleTodo}
        deleteTodo={this.deleteTodo}
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
    deleteTodo: id => dispatch(deleteTodo(id)),
    toggleTodo: id => dispatch(toggleTodo(id)),
    getTodoList: () => dispatch(getTodoList()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
