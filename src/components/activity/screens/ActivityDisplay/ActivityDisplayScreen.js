import React from 'react';
import ActivityDisplayContainer from './containers/ActivityDisplayContainer';

export default class ActivityDisplayScreen extends React.Component {
  constructor(props) {
    super(props);
    this.navigateToEditActivity = this.navigateToEditActivity.bind(this);
    this.navigateToGraphActivityDisplayScreen = this.navigateToGraphActivityDisplayScreen.bind(this);
  }

  navigateToEditActivity(id) {
    this.props.navigation.navigate('ActivityEditScreen', id);
  }

  navigateToGraphActivityDisplayScreen(centerNodeId, centerNodeName) {
    this.props.navigation.navigate('GraphActivityDisplayScreen', { centerNodeId, centerNodeName });
  }

  render() {
    const { goBack, state } = this.props.navigation;

    return (
      <ActivityDisplayContainer
        goBack={goBack}
        id={state.params}
        navigateToEditActivity={this.navigateToEditActivity}
        navigateToGraphActivityDisplayScreen={this.navigateToGraphActivityDisplayScreen}
      />
    );
  }
}
