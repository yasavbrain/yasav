import React from 'react';
import { Container, Content, Text, List, ListItem } from 'native-base';
import I18n from 'yasav/locales/i18n';
import { GenericHeader } from 'yasav/src/viewElements/shared/Header';
import SearchContainer from 'yasav/src/components/search/screens/Search/containers/SearchContainer'
import { SearchType } from 'yasav/src/const';

export default class InterlocutorListView extends React.Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.navigateToInterlocutorDisplayScreen = this.navigateToInterlocutorDisplayScreen.bind(this);
  }

  navigateToInterlocutorDisplayScreen(item) {
    this.props.navigateToInterlocutorDisplayScreen(item);
  }

  // TODO : Find a way to remove that arrow function in the render
  renderRow(item) {
    return (
      <ListItem
        style={{ height: 30, backgroundColor: 0 }}
        onPress={() => this.navigateToInterlocutorDisplayScreen(item)}
      >
        <Text>{item.name}</Text>
      </ListItem>
    );
  }
  render() {
    return (
      <Container>
        <GenericHeader
          goBack={this.props.goBack}
          title={I18n.t('interlocutor.interlocutorList.title')}
        />
        <SearchContainer
          requestType={SearchType.INTERLOCUTOR}
          modifySearchInterlocutor={this.props.modifySearchInterlocutor}
        />
        <Content>
          <List
            dataArray={this.props.displayInterlocutorList}
            keyExtractor={item => item.id}
            renderRow={this.renderRow}
          />
        </Content>
      </Container>
    );
  }
}
