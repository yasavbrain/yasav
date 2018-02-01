import React from 'react';
import { connect } from 'react-redux';
import ActivityDisplayView from '../views/ActivityDisplayView';
import ActivityDisplayError from '../views/ActivityDisplayError';
import { getActivityFromId, deleteActivity } from '../actions/index';

class ActivityDisplayScreen extends React.Component {
  constructor(props) {
    super(props);

    this.deleteActivity = this.deleteActivity.bind(this);
  }

  componentDidMount() {
    if (this.props.id !== -1) {
      this.props.getActivityFromId(this.props.id);
    }
  }

  deleteActivity() {
    this.props.deleteActivity(this.props.id).then(() => {
      this.props.goBack();
    });
  }

  render() {
    if (this.props.activityDisplay) {
      return (
        <ActivityDisplayView
          goBack={this.props.goBack}
          activityAndInterlocutor={this.props.activityDisplay}
          navigateToEditActivity={this.props.navigateToEditActivity}
          deleteActivity={this.deleteActivity}
        />
      );
    }

    return (
      <ActivityDisplayError
        goBack={this.props.goBack}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    activityDisplay: state.activity.activityDisplay,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getActivityFromId: id => dispatch(getActivityFromId(id)),
    deleteActivity: id => dispatch(deleteActivity(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityDisplayScreen);
