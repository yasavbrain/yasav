import React from 'react';
import { Header, Item, Icon, Input, Button, Text } from 'native-base';
import { GenericHeader } from 'yasav/src/viewElements/shared/Header';
import I18n from 'yasav/locales/i18n';
import Style from '../styles/style';

export default class SearchInputCommonView extends React.Component {
  constructor(props) {
    super(props);
    this.doSearch = this.doSearch.bind(this);
  }
  
  doSearch(request) {
    this.props.doSearch(request)
  }
  
  render() {
    return (
      <Header searchBar rounded style={Style.searchHeader}>
        <Item>
          <Icon name="search" />
          <Input
            placeholder={I18n.t('search.searchBar')}
            onChangeText={request => this.doSearch(request)} 
          />
        </Item>
      </Header>
    );
  }
}