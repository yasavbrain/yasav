import React from 'react';
import ActivityDisplayContainer from './containers/ActivityDisplayContainer';

export default class ActivityDisplayScreen extends React.Component {

  render() {
    let { state } = this.props.navigation;

    return (
      <ActivityDisplayContainer stateParams={state.params} />
    )
  }
}

ActivityDisplayScreen.navigationOptions = () => ({
  title: 'Voir une activité'
})
