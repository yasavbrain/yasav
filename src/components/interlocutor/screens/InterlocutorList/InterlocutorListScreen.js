import React from 'react';
import InterlocutorListContainer from './containers/InterlocutorListContainer';

export default class InterlocutorListScreen extends React.Component {
  render() {
    return (
      <InterlocutorListContainer
      goBack = {this.props.navigation.goBack}
      />
    );
  }
}