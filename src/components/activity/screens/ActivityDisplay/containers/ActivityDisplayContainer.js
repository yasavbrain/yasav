import React from 'react';
import ActivityDisplayView from '../views/ActivityDisplayView';
import ActivityDisplayError from '../views/ActivityDisplayError';

export default class ActivityDisplayScreen extends React.Component {

  render() {

    console.log(this.props.stateParams);
    if (this.props.stateParams){
      return(
        <ActivityDisplayView
          goBack={this.props.goBack}
          activity={this.props.stateParams}
        />
      );
    }else{
      return(
        <ActivityDisplayError goBack={this.props.goBack} />
      )
    }
  }
}
