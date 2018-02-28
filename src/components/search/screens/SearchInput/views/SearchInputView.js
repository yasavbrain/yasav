import React from 'react';
import { Header, Item, Icon, Input, Button, Text } from 'native-base';
import { GenericHeader } from 'yasav/src/viewElements/shared/Header';
import I18n from 'yasav/locales/i18n';

export default class SearchInputView extends React.Component {
  constructor(props) {
    super(props);
    this.doSearch = this.doSearch.bind(this);
  }
  
  doSearch(request) {
    this.props.doSearch(request)
  }
  
  render() {
    return (
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input
            placeholder="Search"
            onChangeText={request => this.doSearch(request)} 
          />
          <Icon name="ios-people" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
    );
  }
}
