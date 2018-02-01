import React from 'react';
import { connect } from 'react-redux';

import TodoAddView from '../views/TodoAddView';
import { addTodo } from '../actions/index';
import { StatusEnum } from 'yasav/src/const';


class TodoAddContainer extends React.Component {
  constructor(props) {
    super(props);
    let activityId = 0;
    this.screen_id = null;
    if (props.navParams && props.navParams.activity_id) {
      activityId = props.navParams.activity_id;
    }

    // check if need 2 conditions
    if (props.navParams && props.navParams.screen_id) {
      // screen_id from /fg/erfg ; int ....
      this.screen_id = props.navParams.screen_id;
    }
    this.state = {
      isFormValid: false,
      todo: {
        title: '',
        status: StatusEnum.TODO,
        activityId,
      },
    };
    this.addTodo = this.addTodo.bind(this);
    this.setTitle = this.setTitle.bind(this);
  }

  setTitle(title) {
    this.setState({ ...this.state, todo: { ...this.state.todo, title } });
    // Check empty chars (white space, ..)
    this.setState({ isFormValid: title.length > 0 });
  }

  addTodo() {
    this.props.addTodo(this.state.todo)
      .then(() => this.props.goBackToPreviousScreen(this.screen_id));
  }

  render() {
    return (
      <TodoAddView
        goBack={this.props.goBackToPreviousScreen}
        addTodo={this.addTodo}
        setTitle={this.setTitle}
        isFormValid={this.state.isFormValid}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: todo => dispatch(addTodo(todo)),
  };
}

export default connect(null, mapDispatchToProps)(TodoAddContainer);

