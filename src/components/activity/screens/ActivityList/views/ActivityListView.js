import React from 'react';
import { Container, Content, Button, Text, List, ListItem } from 'native-base';
import { FlatList } from 'react-native';
import I18n from 'yasav/locales/i18n'
import { GenericHeader } from 'yasav/src/viewElements/shared/Header';

export default class ActivityListView extends React.Component {

  constructor(props) {
    super(props);
    this.navigateToActivityDisplayScreen = this.navigateToActivityDisplayScreen.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  navigateToActivityDisplayScreen(item) {
    this.props.navigateToActivityDisplayScreen(item);
  }

  // TODO : Find a way to remove that arrow function in the render
  renderRow(item) {
    return (
      <ListItem
        style={{ height: 75, backgroundColor: 0 }}
        onPress={() => this.navigateToActivityDisplayScreen(item.activity)}
      >
        <Text style={{ fontSize: 50 }}>{item.activity.title}</Text>
      </ListItem>
    );
  }

  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={this.props.displayActivityList}
            renderRow={this.renderRow}
          />
          <Button full primary onPress={this.props.navigateToActivityAddScreen}>
            <Text>{I18n.t('activity.activityList.addActivityButton')}</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
