import React from 'react';
import { Container, Content, List, ListItem, Button, Text } from 'native-base';
import I18n from 'yasav/locales/i18n';
import { GenericHeader } from 'src/viewElements/shared/Header';

export default class TodoListView extends React.Component {

  constructor(props) {
    super(props)
    this.renderRow = this.renderRow.bind(this)
  }

  renderRow(item) {
    return (
      <ListItem>
        <Text>{item.title}</Text>
      </ListItem>
    );
  }

  render() {
    return(
      <Container>
        <GenericHeader
          goBack={this.props.goBack}
          title={I18n.t('todo.todoList.title')}
        />
        <Content>
          <List
            dataArray={this.props.todoList}
            renderRow={this.renderRow}
          />
        </Content>
      </Container>
    );
  }
}
