import React from 'react';
import { connect } from 'react-redux';

import TodoAddView from '../views/TodoAddView';
import { addTodo } from '../actions/index';

class TodoAddContainer extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      title: "",
      completed: false,
      key: this.props.LastID + 1,
      activity_id: 0
    }
    this.addTodo = this.addTodo.bind(this)
  }

  addTodo() {
    this.props.addTodo(this.state)
    this.props.goBackToTodoListScreen()
  }

  render() {
    return (
      <TodoAddView
        addTodo={this.addTodo}
        setTitle={(title) => this.setState({title})}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    lastID: state.todo.lastID
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (todo) => dispatch(addTodo(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoAddContainer)


