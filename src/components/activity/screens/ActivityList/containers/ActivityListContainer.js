import React from 'react';
import { connect } from 'react-redux';
import { getActivityList } from '../actions';
import { deleteActivity } from '../../ActivityDisplay/actions/index';
import ActivityListView from '../views/ActivityListView';
import { sortListQuery } from 'yasav/src/utils/functions';

class ActivityListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchActive: false };
    this.modifySearchActivity = this.modifySearchActivity.bind(this);
  }

  componentDidMount() {
    this.props.getActivityList();
  }

  modifySearchActivity(isActive) {
    this.setState({ searchActive: isActive });
  }

  render() {
    if (this.state.searchActive) {
      var activityList = sortListQuery(this.props.activityListFromRequest);
    } else {
      var activityList = this.props.activityListAll;
    }
    return (
      <ActivityListView
        goBack={this.props.goBack}
        navigateToActivityAddMeeting={this.props.navigateToActivityAddMeeting}
        navigateToActivityAddEvent={this.props.navigateToActivityAddEvent}
        navigateToActivityAddContent={this.props.navigateToActivityAddContent}
        navigateToActivityDisplayScreen={this.props.navigateToActivityDisplayScreen}
        displayActivityList={activityList}
        modifySearchActivity={this.modifySearchActivity}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    activityListAll: state.activity.activityList,
    activityListFromRequest: state.search.activityListFromRequest,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getActivityList: () => dispatch(getActivityList()),
    deleteActivity: id => dispatch(deleteActivity(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityListContainer);
