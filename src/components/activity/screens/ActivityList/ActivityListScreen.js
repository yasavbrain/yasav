import React from 'react';
import ActivityListContainer from './containers/ActivityListContainer'

export default class ActivityListScreen extends React.Component {
    
  render() {
    const { navigate } = this.props.navigation;
    return(
      <ActivityListContainer
        navigateToActivityAddScreen= { () => navigate('ActivityAddScreen')}
        navigateToActivityDisplayScreen= { (e) => navigate('ActivityDisplayScreen', e)}
      />
    );
  }
}
