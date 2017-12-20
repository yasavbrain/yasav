import React from 'react';
import ActivityAddContainer from './containers/ActivityAddContainer';

export default class ActivityAddScreen extends React.Component {

  constructor(props) {
    super(props);
    this.navigateToTodoAddScreen = this.navigateToTodoAddScreen.bind(this);
  }

  navigateToTodoAddScreen() {
    this.props.navigation.navigate('TodoAddScreen');
  }

  render() {
    return(
      <ActivityAddContainer
        goBack={this.props.navigation.goBack}
        navigateToTodoAddScreen={this.navigateToTodoAddScreen}
      />
    );
  }
}
