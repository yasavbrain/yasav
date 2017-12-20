import React from 'react';
import { connect } from 'react-redux';

import TodoAddView from '../views/TodoAddView';
import { addTodo } from '../actions/index';

class TodoAddContainer extends React.Component {
  
  constructor(props){
    super(props);
    let activityId = 0;
    this.screen_id = null
    if(props.navParams && props.navParams.activity_id){
      activityId = props.navParams.activity_id;
    }
    if(props.navParams && props.navParams.screen_id){
      this.screen_id = props.navParams.screen_id
    }
    this.state = {
      title: "",
      completed: false,
      key: this.props.lastID + 1,
      activity_id: activityId
    }
    this.addTodo = this.addTodo.bind(this)
  }

  addTodo() {
    this.props.addTodo(this.state)
    this.props.goBackToPreviousScreen(this.screen_id)

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


