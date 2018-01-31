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
      visible: StatusEnum.TODO,
      displayedTodos: null,
    };
  }

  componentDidMount() {
    this.props.getTodoList()
      .then(() => this.filterTodos(StatusEnum.TODO));
  }

  filterTodos(newSelectedFilter) {
    if (newSelectedFilter === -1) {
      this.setState({
        visible: newSelectedFilter,
        displayedTodos: this.props.todoList,
      });
    } else {
      this.setState({
        visible: newSelectedFilter,
        displayedTodos: this.props.todoList.filter(todo => (todo.status === newSelectedFilter)),
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
        filterTodos={this.filterTodos}
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
