import React from 'react';
import { Header, Item, Icon, Input, Button, Text, Container } from 'native-base';
import { GenericHeader } from 'yasav/src/viewElements/shared/Header';
import I18n from 'yasav/locales/i18n';
import Style from '../styles/style';
import SearchInputCommonView from './SearchInputCommonView'

export default class SearchInputHomeView extends React.Component {
  constructor(props) {
    super(props);
    this.doSearch = this.doSearch.bind(this);
  }
  
  doSearch(request) {
    this.props.doSearch(request)
  }
  
  render() {
    return (
      <Container>
        <GenericHeader
          goBack={this.props.goBack}
          title="Search"
        />
        <SearchInputCommonView />
      </Container>
    );
  }
}