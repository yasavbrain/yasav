import React from 'react';
import { Container, Content, Button, Text, List, ListItem, SwipeRow, Icon } from 'native-base';
import { FlatList } from 'react-native';
import I18n from 'yasav/locales/i18n'
import { GenericHeader } from 'yasav/src/viewElements/shared/Header';
import Style from '../styles/style.js';
import SearchInputContainer from 'yasav/src/components/search/screens/SearchInput/containers/SearchInputContainer'
import { SearchType } from 'yasav/src/const';

export default class ActivityListView extends React.Component {

  constructor(props) {
    super(props);
    this.navigateToActivityDisplayScreen = this.navigateToActivityDisplayScreen.bind(this);
    this.navigateToActivityDisplayScreen = this.navigateToActivityDisplayScreen.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  i = 0

  componentDidMount(){
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
      </Container>
    );
  }
}