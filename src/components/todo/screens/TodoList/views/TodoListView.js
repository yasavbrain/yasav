import React from 'react';
import { Container, Header, Content, Title, List, ListItem, Button, Text } from 'native-base';
import { View, FlatList } from 'react-native';
import I18n from 'yasav/locales/i18n';

export default class TodoListView extends React.Component {

  constructor(props) {
    super(props)
    this.renderItem = this.renderItem.bind(this)
  }

  renderItem(item) {
    <ListItem>
      <Text>TEST</Text>
    </ListItem>
  }

  render() {
    return(
      <Container>
        <Header>
          <Title>{I18n.t('todo.todoList.title')}</Title>
        </Header>
        <Content>
          <List>
            <FlatList
              data={this.props.todoList}
              renderItem={this.renderItem}
            />
          </List>
        </Content>
      </Container>
    );
  }
}
