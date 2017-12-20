import React from 'react';
import { connect } from 'react-redux';

import TodoAddView from '../views/TodoAddView';
import { addTodo } from '../actions/index';

class TodoAddContainer extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      title: ""
    }
    this.addTodo = this.addTodo.bind(this)
  }

  addTodo(todo) {
    this.props.addTodo(todo)
    //this.props.navigateToTodoListScreen()
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

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (todo) => dispatch(addTodo(todo))
  }
}

export default connect(null, mapDispatchToProps)(TodoAddContainer)


