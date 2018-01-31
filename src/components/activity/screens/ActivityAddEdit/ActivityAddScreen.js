import React from 'react';
import ActivityAddEditContainer from './containers/ActivityAddEditContainer';

export default class ActivityAddScreen extends React.Component {

  constructor(props) {
    super(props);
    this.navigateToTodoAddScreen = this.navigateToTodoAddScreen.bind(this);
  }

  navigateToTodoAddScreen(activityId) {
    this.props.navigation.navigate('TodoAddScreen', { activity_id: activityId, screen_id: this.props.navigation.state.key });
  }

  render() {
    return (
      <ActivityAddEditContainer
        goBack={this.props.navigation.goBack}
        navigateToTodoAddScreen={this.navigateToTodoAddScreen}
        id={-1}
      />
    );
  }
}
