import React from 'react';
import { Container, Content, Button, Text, List, ListItem } from 'native-base';
import { FlatList } from 'react-native';
import I18n from 'yasav/locales/i18n'
import { GenericHeader } from 'yasav/src/viewElements/shared/Header';

export default class InterlocutorListView extends React.Component {

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }
  
  // TODO : Find a way to remove that arrow function in the render
  renderRow(item) {
    return(
      <ListItem
        style={{height: 30, backgroundColor: 0}}
      >
        <Text>{item.name}</Text>
      </ListItem>
    );
  }
  render() {
    return(
      <Container>
        <GenericHeader
          goBack={this.props.goBack}
          title={I18n.t('interlocutor.interlocutorList.title')}
        />
        <Content>
          <List
            dataArray={this.props.displayInterlocutorList}
            renderRow={this.renderRow}
          />
        </Content>
      </Container>
    );
  }
}