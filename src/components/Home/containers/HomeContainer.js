import React from 'react';
import HomeView from '../views/HomeView';

export default class HomeContainer extends React.Component {
  render() {
    return (
      <HomeView
        navigateToActivityList={this.props.navigateToActivityList}
        navigateToTodoList={this.props.navigateToTodoList}
        navigateToActivityAddMeeting={this.props.navigateToActivityAddMeeting}
        navigateToActivityAddEvent={this.props.navigateToActivityAddEvent}
        navigateToActivityAddContent={this.props.navigateToActivityAddContent}
        navigateToTodoAdd={this.props.navigateToTodoAdd}
        navigateToInterlocutorList={this.props.navigateToInterlocutorList}
      />
    );
  }
}
