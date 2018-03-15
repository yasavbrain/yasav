import React from 'react';
import { Container, Content, Button, Text, List, ListItem, SwipeRow, Icon, Fab } from 'native-base';
import { FlatList } from 'react-native';
import I18n from 'yasav/locales/i18n'
import { GenericHeader } from 'yasav/src/viewElements/shared/Header';
import Style from '../styles/style.js';
import StyleList from 'yasav/src/styles/List'
import SearchInputContainer from 'yasav/src/components/search/screens/SearchInput/containers/SearchInputContainer'
import { SearchType } from 'yasav/src/const';
import ListView from 'yasav/src/viewElements/shared/listView/ListView'

import Colors from 'yasav/src/styles/Colors';

export default class ActivityListView extends React.Component {

  constructor(props) {
    super(props);
    this.navigateToActivityDisplayScreen = this.navigateToActivityDisplayScreen.bind(this);
    this.navigateToActivityAddMeeting = this.navigateToActivityAddMeeting.bind(this);
    this.navigateToActivityAddContent = this.navigateToActivityAddContent.bind(this);
    this.navigateToActivityAddEvent = this.navigateToActivityAddEvent.bind(this);
    this.renderItem = this.renderItem.bind(this);

    this.state = {
      active: false
    };
  }

  navigateToActivityDisplayScreen(item) {
    this.props.navigateToActivityDisplayScreen(item);
  }

  navigateToActivityAddMeeting() {
    this.setState({ active: !this.state.active });
    this.props.navigateToActivityAddMeeting();
  }
  navigateToActivityAddEvent() {
    this.setState({ active: !this.state.active });
    this.props.navigateToActivityAddEvent();
  }
  navigateToActivityAddContent() {
    this.setState({ active: !this.state.active });
    this.props.navigateToActivityAddContent();
  }
  
  // BUG: need to put the style inline for the 3 buttons of the FAB. The Style.addMeetingButton doesn't work for no reason
  render() {
    return (
      <Container style={StyleList.container}>
        <SearchInputContainer
          requestType={SearchType.ACTIVITY}
          enableSearchActivity={this.props.enableSearchActivity}
        />
        <ListView 
          displayList={this.props.displayActivityList}
          navigateToDisplayScreen={this.navigateToActivityDisplayScreen}
        />
        <Fab
            active={this.state.active}
            direction="up"
            style={Style.addButton}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="add"/>
            <Button onPress={this.navigateToActivityAddMeeting} style={{ backgroundColor: Colors.meet }} >
              <Icon name="person" />
            </Button>
            <Button onPress={this.navigateToActivityAddEvent} style={{ backgroundColor: Colors.event }} >
              <Icon name="calendar" />
            </Button>
            <Button onPress={this.navigateToActivityAddContent} style={{ backgroundColor: Colors.content }} >
              <Icon name="book" />
            </Button>
          </Fab>
      </Container>
    );
  }
}