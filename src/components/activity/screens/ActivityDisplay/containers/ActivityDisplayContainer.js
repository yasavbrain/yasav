import React from 'react';
import { connect } from 'react-redux';
import ActivityDisplayView from '../views/ActivityDisplayView';
import ActivityDisplayError from '../views/ActivityDisplayError';
import { getActivityFromId } from '../actions/index';

class ActivityDisplayScreen extends React.Component {
  componentDidMount() {
    if (this.props.id !== -1) {
      this.props.getActivityFromId(this.props.id);
    }
  }

  render() {
    if (this.props.activityDisplay) {
      return (
        <ActivityDisplayView
          goBack={this.props.goBack}
          activityAndInterlocutor={this.props.activityDisplay}
          navigateToEditActivity={this.props.navigateToEditActivity}
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityDisplayScreen);
