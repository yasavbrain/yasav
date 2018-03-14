import React from 'react';
import { Container, Content, Button, Text, List, ListItem, SwipeRow, Icon, Fab } from 'native-base';
import { FlatList } from 'react-native';
import I18n from 'yasav/locales/i18n'
import { GenericHeader } from 'yasav/src/viewElements/shared/Header';
import Style from '../styles/style.js';
import SearchInputContainer from 'yasav/src/components/search/screens/SearchInput/containers/SearchInputContainer'
import { SearchType } from 'yasav/src/const';

import Colors from 'yasav/src/styles/Colors';

export default class ActivityListView extends React.Component {

  constructor(props) {
    super(props);
    this.navigateToActivityDisplayScreen = this.navigateToActivityDisplayScreen.bind(this);
    this.navigateToActivityAddMeeting = this.navigateToActivityAddMeeting.bind(this);
    this.navigateToActivityAddContent = this.navigateToActivityAddContent.bind(this);
    this.navigateToActivityAddEvent = this.navigateToActivityAddEvent.bind(this);
    this.renderRow = this.renderRow.bind(this);

    this.state = {
      active: false
    };
  }

  i = 0

  componentWillUpdate(){
    this.i = 0
  }

  navigateToActivityDisplayScreen(item) {
    this.props.navigateToActivityDisplayScreen(item);
  }

  shortenedDescription(description){
    i = 120
    if(description.length <= i){
      return description
    }
    while(description.substring(i, i+1) != ' '){
      i -= 1
    }
    return description.substring(0, i) + "..."
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


  // TODO : Find a way to remove that arrow function in the render
  renderRow(item) {
    this.i = this.i + 1
    return (
      <ListItem
        style={[Style.listItemGeneric, (this.i%2 == 0)? Style.listItemEven: Style.listItemOdd]}
        onPress={() => this.navigateToActivityDisplayScreen(item.activity)}
      >
        <Content>
          <Text style={Style.listItemTitle}>{item.activity.title}</Text>
        </Content>
        <Content>
          <Text style={Style.listItemDescription}>{ this.shortenedDescription(item.activity.description)}</Text>
        </Content>
      </ListItem>
    );
  }

  // BUG: need to put the style inline for the 3 buttons of the FAB. The Style.addMeetingButton doesn't work for no reason
  render() {
    return (
      <Container style={Style.container}>
        <SearchInputContainer
          requestType={SearchType.ACTIVITY}
          enableSearchActivity={this.props.enableSearchActivity}
        />
        <Content>
          <List
            style={Style.list}
            dataArray={this.props.displayActivityList}
            renderRow={this.renderRow}
          />
        </Content>
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