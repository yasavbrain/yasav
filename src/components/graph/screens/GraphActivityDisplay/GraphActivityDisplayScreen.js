import React from 'react';
import GraphActivityDisplayContainer from './containers/GraphActivityDisplayContainer';

export default class GraphActivityDisplayScreen extends React.Component {
  constructor(props) {
    super(props);
    this.navigateToActivityDisplayScreen = this.navigateToActivityDisplayScreen.bind(this);
    this.navigateToInterlocutorDisplayScreen = this.navigateToInterlocutorDisplayScreen.bind(this);
  }

  navigateToActivityDisplayScreen(activityId) {
    this.props.navigation.navigate('ActivityDisplayScreen', activityId);
  }

  navigateToInterlocutorDisplayScreen(interlocutor) {
    this.props.navigation.navigate('InterlocutorDisplayScreen', interlocutor);
  }

  render() {
    const { goBack, state } = this.props.navigation;
    return (
      <GraphActivityDisplayContainer
        goBack={goBack}
        centerNodeId={state.params.centerNodeId}
        centerNodeName={state.params.centerNodeName}
        navigateToActivityDisplayScreen={this.navigateToActivityDisplayScreen}
        navigateToInterlocutorDisplayScreen={this.navigateToInterlocutorDisplayScreen}
      />
    );
  }
}
