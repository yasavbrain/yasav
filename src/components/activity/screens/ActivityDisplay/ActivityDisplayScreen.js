import React from 'react';
import ActivityDisplayContainer from './containers/ActivityDisplayContainer';

export default class ActivityDisplayScreen extends React.Component {
  constructor(props) {
    super(props);
    this.navigateToEditActivity = this.navigateToEditActivity.bind(this);
  }

  navigateToEditActivity(id) {
    this.props.navigation.navigate('ActivityEditScreen', id);
  }

  render() {
    const { goBack, state } = this.props.navigation;

    return (
      <ActivityDisplayContainer
        goBack={goBack}
        stateParams={state.params}
        navigateToEditActivity={this.navigateToEditActivity}
      />
    );
  }
}
