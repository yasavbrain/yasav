import React from 'react';
import { Header, Item, Icon, Input, Button, Text, Container, Content, ListItem, List } from 'native-base';
import { GenericHeader } from 'yasav/src/viewElements/shared/Header';
import I18n from 'yasav/locales/i18n';
import StyleList from 'yasav/src/styles/List'
import SearchInputCommonView from './SearchInputCommonView'

export default class SearchInputHomeView extends React.Component {  

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
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
    if (item.activity) {
      return (
        <ListItem>
          <Content>
            <Text style={StyleList.listItemTitle}>{item.activity.title}</Text>
          </Content>
          <Content>
            <Text style={StyleList.listItemDescription}>{ this.shortenedDescription(item.activity.description)}</Text>
          </Content>
        </ListItem>
      );
    }
    else {
      return (
        <ListItem>
          <Content>
            <Text style={StyleList.listItemTitle}>{item.name}</Text>
          </Content>
          <Content>
            <Text style={StyleList.listItemDescription}>{item.link_to_me}</Text>
          </Content>
        </ListItem>
      );
    }
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
        <Content>
          <List
            style={StyleList.list}
            dataArray={this.props.requestResult}
            renderRow={this.renderRow}
          />
        </Content>
      </Container>
    );
  }
}