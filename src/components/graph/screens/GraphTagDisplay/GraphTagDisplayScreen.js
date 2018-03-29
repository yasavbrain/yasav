import React from 'react';
import GraphTagDisplayContainer from './containers/GraphTagDisplayContainer';

export default class GraphTagDisplayScreen extends React.Component {
  constructor(props) {
    super(props);
    this.navigateToGraphActivityDisplayScreen = this.navigateToGraphActivityDisplayScreen.bind(this)
  }

  navigateToGraphActivityDisplayScreen(centerNodeId) {
    console.log("navigating", centerNodeId)
    this.props.navigation.navigate('GraphActivityDisplayScreen', centerNodeId)
  }

  render() {
    const { goBack } = this.props.navigation;

    return (
      <GraphTagDisplayContainer
        goBack={goBack}
        navigateToGraphActivityDisplayScreen={this.navigateToGraphActivityDisplayScreen}
      />
    );
  }
}
