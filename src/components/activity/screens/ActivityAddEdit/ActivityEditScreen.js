import React from 'react';
import ActivityAddContainer from './containers/ActivityAddContainer';

export default class ActivityEditScreen extends React.Component {
  render() {
    return (
      <ActivityAddContainer
        goBack={this.props.navigation.goBack}
        id={this.props.navigation.state}
      />
    );
  }
}
