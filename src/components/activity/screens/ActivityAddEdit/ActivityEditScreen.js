import React from 'react';
import ActivityAddEditContainer from './containers/ActivityAddEditContainer';

export default class ActivityEditScreen extends React.Component {
  render() {
    return (
      <ActivityAddEditContainer
        goBack={this.props.navigation.goBack}
        id={this.props.navigation.state}
      />
    );
  }
}
