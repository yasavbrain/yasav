import React from 'react';
import GraphTagDisplayView from '../views/GraphTagDisplayView';

class GraphTagDisplayContainer extends React.Component {
  render() {
    return (
      <GraphTagDisplayView
        goBack={this.props.goBack}
      />
    );
  }
}

export default GraphTagDisplayContainer;
