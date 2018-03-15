import React from 'react';
import { Header, Item, Icon, Input, Button, Text, Container, Content, ListItem, List } from 'native-base';
import { GenericHeader } from 'yasav/src/viewElements/shared/Header';
import I18n from 'yasav/locales/i18n';
import StyleList from 'yasav/src/styles/List'
import SearchInputCommonView from './SearchInputCommonView'
import ListView from 'yasav/src/viewElements/shared/listView/ListView'

export default class SearchInputHomeView extends React.Component {
  constructor(props) {
    super(props);
    this.navigateToDisplayScreen=this.navigateToDisplayScreen.bind(this)
  }

  navigateToDisplayScreen(item) {
    this.props.navigateToDisplayScreen(item)
  }

  render() {
    return (
      <Container style={StyleList.container}>
        <GenericHeader
          goBack={this.props.goBack}
          title="Search"
        />
        <SearchInputCommonView
          doSearch={this.props.doSearch}
        />
        <ListView 
          displayList={this.props.requestResult}
          navigateToDisplayScreen={this.navigateToDisplayScreen}
        />
      </Container>
    );
  }
}