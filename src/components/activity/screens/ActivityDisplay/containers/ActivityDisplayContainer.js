import React from 'react';
import { connect } from 'react-redux';
import ActivityDisplayView from '../views/ActivityDisplayView';
import ActivityDisplayError from '../views/ActivityDisplayError';
import { getActivityFromId, deleteActivity, getTagIdByName } from '../actions/index';
import { cleanTag } from 'yasav/src/utils/functions'

class ActivityDisplayScreen extends React.Component {
  constructor(props) {
    super(props);

    this.deleteActivity = this.deleteActivity.bind(this);
    this.navigateToEditActivity = this.navigateToEditActivity.bind(this);
    this.navigateToGraphActivityDisplayScreen = this.navigateToGraphActivityDisplayScreen.bind(this);
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

  navigateToEditActivity() {
    this.props.navigateToEditActivity(this.props.activityDisplay.activity.id);
  }

  navigateToGraphActivityDisplayScreen(tag) {
    this.props.getTagIdByName(cleanTag(tag)).then(() => {
      this.props.navigateToGraphActivityDisplayScreen(this.props.tagId, tag);
    });
  }

  render() {
    if (this.props.activityDisplay) {
      return (
        <ActivityDisplayView
          goBack={this.props.goBack}
          activityAndInterlocutor={this.props.activityDisplay}
          navigateToEditActivity={this.navigateToEditActivity}
          deleteActivity={this.deleteActivity}
          navigateToGraphActivityDisplayScreen={this.navigateToGraphActivityDisplayScreen}
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
    tagId: state.activity.activityDisplaySelectedTag,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getActivityFromId: id => dispatch(getActivityFromId(id)),
    deleteActivity: id => dispatch(deleteActivity(id)),
    getTagIdByName: name => dispatch(getTagIdByName(name)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityDisplayScreen);
