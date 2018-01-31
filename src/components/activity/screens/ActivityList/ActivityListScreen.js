import React from 'react';
import ActivityListContainer from './containers/ActivityListContainer'

export default class ActivityListScreen extends React.Component {

  constructor(props) {
    super(props);
    this.navigateToActivityAddScreen = this.navigateToActivityAddScreen.bind(this);
    this.navigateToActivityDisplayScreen = this.navigateToActivityDisplayScreen.bind(this);
  }

  navigateToActivityAddScreen() {
    this.props.navigation.navigate('ActivityAddScreen');
  }

  navigateToActivityDisplayScreen(activity) {
    this.props.navigation.navigate('ActivityDisplayScreen', activity.id);
  }

  render() {
    return (
      <ActivityListContainer
        goBack={this.props.navigation.goBack}
        navigateToActivityAddScreen={this.navigateToActivityAddScreen}
        navigateToActivityDisplayScreen={this.navigateToActivityDisplayScreen}
      />
    );
  }
}
