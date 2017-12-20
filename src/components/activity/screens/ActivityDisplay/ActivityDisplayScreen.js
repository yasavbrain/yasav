import React from 'react';
import ActivityDisplayContainer from './containers/ActivityDisplayContainer';

export default class ActivityDisplayScreen extends React.Component {

  render() {
    const { goBack, state } = this.props.navigation;

    return (
      <ActivityDisplayContainer
        goBack={goBack}
        stateParams={state.params}
      />
    )
  }
}
