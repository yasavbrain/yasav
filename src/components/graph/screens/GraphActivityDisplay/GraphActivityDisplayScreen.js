import React from 'react';
import GraphActivityDisplayContainer from './containers/GraphActivityDisplayContainer';

export default class GraphActivityDisplayScreen extends React.Component {
  render() {
    const { goBack, state } = this.props.navigation;

    return (
      <GraphActivityDisplayContainer
        goBack={goBack}
        centerNodeId={state.params}
      />
    );
  }
}
