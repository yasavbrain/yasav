import React from 'react';
import { connect } from 'react-redux';

import { StatusEnum } from 'yasav/src/const';
import TodoListView from '../views/TodoListView';
import { toggleTodo, deleteTodo, addTodo } from '../../TodoAdd/actions/index';
import { getTodoList } from '../actions';

class TodoListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.filterTodos = this.filterTodos.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.state = {
      visible: -1,
      displayedTodos: null,
      isFormValid: false,
      todo: {
        title: '',
        status: StatusEnum.TODO,
        activityId: 0,
      },
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
        //displayedTodos: this.props.todoList,
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
        this.props.getTodoList()
        .then(() => this.filterTodos(this.state.visible));
      });
  }

  setTitle(title) {
    this.setState({ ...this.state, todo: { ...this.state.todo, title } });
    // Check empty chars (white space, ..)
    this.setState({ isFormValid: title.trim().length > 0 });
  }

  addTodo() {
    if(this.state.isFormValid){
      this.props.addTodo({ ...this.state.todo, title: this.state.todo.title.trim() })
      .then(() => {
        this.setState({
            todo: {
            title: '',
            status: StatusEnum.TODO,
            activityId: 0,
            },
            isFormValid: false,
        })
        this.props.getTodoList()
        .then(() => this.filterTodos(this.state.visible));
      });
    }

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
        addTodo={this.addTodo}
        setTitle={this.setTitle}
        todoTitle={this.state.todo.title}
        isFormValid={this.state.isFormValid}
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
    addTodo: todo => dispatch(addTodo(todo)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
