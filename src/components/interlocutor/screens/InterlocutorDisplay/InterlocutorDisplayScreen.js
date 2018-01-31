import React from 'react';
import InterlocutorDisplayContainer from './containers/InterlocutorDisplayContainer';

export default class InterlocutorDisplayScreen extends React.Component {
  constructor(props) {
    super(props);
    this.navigateToActivityDisplayScreen = this.navigateToActivityDisplayScreen.bind(this);
  }

  navigateToActivityDisplayScreen(id) {
    this.props.navigation.navigate('ActivityDisplayScreen', id);
  }

  render() {
    const { goBack, state } = this.props.navigation;
    return (
      <InterlocutorDisplayContainer
        goBack={goBack}
        stateParams={state.params}
        navigateToActivityDisplayScreen={this.navigateToActivityDisplayScreen}
      />
    );
  }
}
