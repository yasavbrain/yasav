import React from 'react';
import GraphTagDisplayContainer from './containers/GraphTagDisplayContainer';

export default class GraphTagDisplayScreen extends React.Component {
  render() {
    const { goBack } = this.props.navigation;

    return (
      <GraphTagDisplayContainer
        goBack={goBack}
      />
    );
  }
}
