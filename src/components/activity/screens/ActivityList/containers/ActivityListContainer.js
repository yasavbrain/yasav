import React from 'react';
import { connect } from 'react-redux';

import ActivityListView from '../views/ActivityListView'

class ActivityListContainer extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return(
      <ActivityListView
        navigateToActivityAddScreen = {() => this.props.navigateToActivityAddScreen }
        navigateToActivityListScreen = {(e) => this.props.navigateToActivityListScreen({activity: e}) }
        displayActivityList = {this.props.activityList}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    activityList: state.activity.activityList
  }
}

export default connect(mapStateToProps)(ActivityListContainer)
