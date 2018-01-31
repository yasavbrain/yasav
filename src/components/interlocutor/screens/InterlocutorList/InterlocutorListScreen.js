import React from 'react';
import InterlocutorListContainer from './containers/InterlocutorListContainer';

export default class InterlocutorListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.navigateToInterlocutorDisplayScreen = this.navigateToInterlocutorDisplayScreen.bind(this);
  }

  navigateToInterlocutorDisplayScreen(interlocutor) {
    this.props.navigation.navigate('InterlocutorDisplayScreen', interlocutor);
  }

  render() {
    return (
      <InterlocutorListContainer
        goBack={this.props.navigation.goBack}
        navigateToInterlocutorDisplayScreen={this.navigateToInterlocutorDisplayScreen}
      />
    );
  }
}
