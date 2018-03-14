import React from 'react';
import ActivityListContainer from './containers/ActivityListContainer'
import { ActivityTypeEnum } from 'yasav/src/const';

export default class ActivityListScreen extends React.Component {

  constructor(props) {
    super(props);
    this.navigateToActivityAddEvent = this.navigateToActivityAddEvent.bind(this);
    this.navigateToActivityAddMeeting = this.navigateToActivityAddMeeting.bind(this);
    this.navigateToActivityAddContent = this.navigateToActivityAddContent.bind(this);
    this.navigateToActivityDisplayScreen = this.navigateToActivityDisplayScreen.bind(this);
  }

  navigateToActivityDisplayScreen(activity) {
    this.props.navigation.navigate('ActivityDisplayScreen', activity.id);
  }

  navigateToActivityAddEvent() {
    this.props.navigation.navigate('ActivityAddScreen', ActivityTypeEnum.EVENT);
  }

  navigateToActivityAddMeeting() {
    this.props.navigation.navigate('ActivityAddScreen', ActivityTypeEnum.MEETING);
  }

  navigateToActivityAddContent() {
    this.props.navigation.navigate('ActivityAddScreen', ActivityTypeEnum.CONTENT);
  }

  render() {
    return (
      <ActivityListContainer
        goBack={this.props.navigation.goBack}
        navigateToActivityAddEvent={this.navigateToActivityAddEvent}
        navigateToActivityAddMeeting={this.navigateToActivityAddMeeting}
        navigateToActivityAddContent={this.navigateToActivityAddContent}
        navigateToActivityDisplayScreen={this.navigateToActivityDisplayScreen}
      />
    );
  }
}
