import React from 'react';
import ActivityDisplayView from '../views/ActivityDisplayView';
import ActivityDisplayError from '../views/ActivityDisplayError';

export default class ActivityDisplayScreen extends React.Component {

  render() {
    if( this.props.stateParams ){
      return(
        <ActivityDisplayView activity={this.props.stateParams.activity} />
      );
    }else{
      return(
        <ActivityDisplayError />
      )
    }
  }
}
