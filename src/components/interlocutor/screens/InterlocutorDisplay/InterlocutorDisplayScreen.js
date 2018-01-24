import React from 'react';
import InterlocutorDisplayContainer from './containers/InterlocutorDisplayContainer';

export default class InterlocutorDisplayScreen extends React.Component {

  render() {
    const { goBack, state } = this.props.navigation;
    return (
      <InterlocutorDisplayContainer
        goBack={goBack}
        stateParams={state.params}
      />
    )
  }
}