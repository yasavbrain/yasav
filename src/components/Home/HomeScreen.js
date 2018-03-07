import React from 'react';
import I18n from 'yasav/locales/i18n';
import HomeContainer from './containers/HomeContainer';
import { ActivityTypeEnum } from 'yasav/src/const';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.navigateToActivityList = this.navigateToActivityList.bind(this);
    this.navigateToTodoList = this.navigateToTodoList.bind(this);
    this.navigateToActivityAddEvent = this.navigateToActivityAddEvent.bind(this);
    this.navigateToActivityAddMeeting = this.navigateToActivityAddMeeting.bind(this);
    this.navigateToActivityAddContent = this.navigateToActivityAddContent.bind(this);
    this.navigateToTodoAdd = this.navigateToTodoAdd.bind(this);
    this.navigateToInterlocutorList = this.navigateToInterlocutorList.bind(this);
    this.navigateToGraphTagDisplay = this.navigateToGraphTagDisplay.bind(this);
  }

  navigateToActivityList() {
    this.props.navigation.navigate('ActivityListScreen');
  }

  navigateToTodoList() {
    this.props.navigation.navigate('TodoListScreen');
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

  navigateToTodoAdd() {
    this.props.navigation.navigate('TodoAddScreen');
  }

  navigateToInterlocutorList() {
    this.props.navigation.navigate('InterlocutorListScreen');
  }

  navigateToGraphTagDisplay() {
    this.props.navigation.navigate('GraphTagDisplayScreen')
  }

  render() {
    return (
      <HomeContainer
        navigateToActivityList={this.navigateToActivityList}
        navigateToTodoList={this.navigateToTodoList}
        navigateToActivityAddEvent={this.navigateToActivityAddEvent}
        navigateToActivityAddMeeting={this.navigateToActivityAddMeeting}
        navigateToActivityAddContent={this.navigateToActivityAddContent}
        navigateToTodoAdd={this.navigateToTodoAdd}
        navigateToInterlocutorList={this.navigateToInterlocutorList}
        navigateToGraphTagDisplay={this.navigateToGraphTagDisplay}
      />
    );
  }
}
