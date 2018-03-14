import React from 'react';
import { Container, Content, Button, Text, List, ListItem } from 'native-base';
import { FlatList } from 'react-native';
import I18n from 'yasav/locales/i18n'
import { GenericHeader } from 'yasav/src/viewElements/shared/Header';
import Styles from 'yasav/src/styles/Main'
import SearchInputContainer from 'yasav/src/components/search/screens/SearchInput/containers/SearchInputContainer'
import { SearchType } from 'yasav/src/const';

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
        <Text style={{ fontSize: 20 }}>{item.activity.title}</Text>
      </ListItem>
    );
  }

  render() {
    return (
      <Container>
        <SearchInputContainer
          requestType={SearchType.ACTIVITY}
          enableSearchActivity={this.props.enableSearchActivity}
        />
        <Content>
          <List
            dataArray={this.props.displayActivityList}
            renderRow={this.renderRow}
          />
          <Button
            full
            onPress={this.props.navigateToActivityAddScreen}
            style={Styles.global.addButtons}
          >
            <Text>{I18n.t('activity.activityList.addActivityButton')}</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}