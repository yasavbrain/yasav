import React from 'react';
import { Container, Content, Button, Text, List, ListItem, SwipeRow, Icon } from 'native-base';
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
    this.navigateToActivityDisplayScreen = this.navigateToActivityDisplayScreen.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  navigateToActivityDisplayScreen(item) {
    this.props.navigateToActivityDisplayScreen(item);
  }

  navigateToActivityDisplayScreen(item) {

  }

  // TODO : Find a way to remove that arrow function in the render
  renderRow(item) {
    return (
      <SwipeRow
        onPress={() => this.navigateToActivityDisplayScreen(item.activity)}
        rightOpenValue={-75}
        body={
          <Text style={{ fontSize: 20 }}>{item.activity.title}</Text>
        }
        right={
          <Button danger onPress={() => this.props.deleteActivity(item.activity.id)}>
            <Icon active name="trash" />
          </Button>
        }
      />

/*
      <ListItem
        style={{ height: 75, backgroundColor: 0 }}
        onPress={() => this.navigateToActivityDisplayScreen(item.activity)}
      >
<<<<<<< 270c0ff5badde4ef2f34cb1a4b3628344e75dd7f
        <Text style={{ fontSize: 20 }}>{item.activity.title}</Text>
      </ListItem>
=======
        <Text style={{ fontSize: 50 }}>{item.activity.title}</Text>
      </ListItem>*/
>>>>>>> Implementing Delete Button - need to fix swipable tab
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
        </Content>
      </Container>
    );
  }
}