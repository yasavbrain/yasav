import React from 'react';
import GraphActivityDisplayContainer from './containers/GraphActivityDisplayContainer';

export default class GraphTagDisplayScreen extends React.Component {
  render() {
    const { goBack } = this.props.navigation;

    return (
      <GraphActivityDisplayContainer
        goBack={goBack}
      />
    );
  }
}
