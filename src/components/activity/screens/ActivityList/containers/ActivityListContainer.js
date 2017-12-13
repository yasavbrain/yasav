import React from 'react';
import { connect } from 'react-redux';

import ActivityListView from '../views/ActivityListView'

class ActivityListContainer extends React.Component {
  render() {
    return(
      <ActivityListView
        navigateToActivityAddScreen = {() => this.props.navigateToActivityAddScreen }
        navigateToActivityDisplayScreen = {(e) => this.props.navigateToActivityDisplayScreen({activity: e}) }
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
