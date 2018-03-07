import React from 'react';
import { Container, Header, Content, Text, Button, Icon } from 'native-base';
import { TouchableOpacity, View } from 'react-native';

import I18n from 'yasav/locales/i18n';

import Style from 'yasav/src/styles/Main';

import { SimpleHeader } from 'yasav/src/viewElements/shared/Header';

export default class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.navigateToActivityList = this.navigateToActivityList.bind(this);
    this.navigateToTodoList = this.navigateToTodoList.bind(this);
    this.navigateToActivityAddMeeting = this.navigateToActivityAddMeeting.bind(this);
    this.navigateToActivityAddContent = this.navigateToActivityAddContent.bind(this);
    this.navigateToActivityAddEvent = this.navigateToActivityAddEvent.bind(this);
    this.navigateToTodoAdd = this.navigateToTodoAdd.bind(this);
    this.navigateToInterlocutorList = this.navigateToInterlocutorList.bind(this);
  }

  navigateToActivityList() {
    this.props.navigateToActivityList();
  }

  navigateToTodoList() {
    this.props.navigateToTodoList();
  }

  navigateToActivityAddMeeting() {
    this.props.navigateToActivityAddMeeting();
  }
  navigateToActivityAddEvent() {
    this.props.navigateToActivityAddEvent();
  }
  navigateToActivityAddContent() {
    this.props.navigateToActivityAddContent();
  }

  navigateToTodoAdd() {
    this.props.navigateToTodoAdd();
  }

  navigateToInterlocutorList() {
    this.props.navigateToInterlocutorList();
  }

  render() {
    return (
      <Container>
        <View style={Style.home.activityButtons}>
          <TouchableOpacity
            style={Style.home.activityMeetButton}
            onPress={this.navigateToActivityAddMeeting}
            activeOpacity={0.8}
          >
            <View style={Style.home.activityButtonWrapper}>
              <Icon name="person" style={Style.home.icon} />
              <Text style={Style.home.text}>Something about someone</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={Style.home.activityEventButton}
            onPress={this.navigateToActivityAddEvent}
            activeOpacity={0.8}
          >
            <View style={Style.home.activityButtonWrapper}>
              <Icon name="calendar" style={Style.home.icon} color="white" />
              <Text style={Style.home.text}>Something about an event</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={Style.home.activityContentButton}
            onPress={this.navigateToActivityAddContent}
            activeOpacity={0.8}
          >
            <View style={Style.home.activityButtonWrapper}>
              <Icon name="book" style={Style.home.icon} color="white" />
              <Text style={Style.home.text}>Something I heard or read about</Text>
            </View>
          </TouchableOpacity>

        </View>
      </Container>

    );
  }
}
/*


 */
