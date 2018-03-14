import React from 'react';
import { connect } from 'react-redux';
import { getActivityList } from '../actions';
import ActivityListView from '../views/ActivityListView';

class ActivityListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchActive: 0 };
    this.enableSearchActivity = this.enableSearchActivity.bind(this);
  }
  
  componentDidMount() {
    this.props.getActivityList();
  }

  enableSearchActivity() {
    this.setState({ searchActive: 1 });
  }


  render() {
    if (this.state.searchActive == 0) {
      var activityList = this.props.activityListAll;
    } else if (this.state.searchActive == 1) {
      var activityList = this.props.activityListFromRequest;
    }
    return (
      <ActivityListView
        goBack={this.props.goBack}
        navigateToActivityAddScreen={this.props.navigateToActivityAddScreen}
        navigateToActivityDisplayScreen={this.props.navigateToActivityDisplayScreen}
        displayActivityList={activityList}
        enableSearchActivity={this.enableSearchActivity}
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityListContainer);