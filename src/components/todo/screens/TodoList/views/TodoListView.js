import React from 'react';
import { Container, Content, List, ListItem, Button, Text, CheckBox } from 'native-base';
import I18n from 'yasav/locales/i18n';
import { GenericHeader } from 'src/viewElements/shared/Header';
import { StatusEnum } from 'yasav/src/const';

export default class TodoListView extends React.Component {

  constructor(props) {
    super(props)
    this.renderRow = this.renderRow.bind(this)
  }

  renderRow(item) {
    return (
      <ListItem style={{backgroundColor: 0}}
        onPress={() => this.props.toggleTodo(item)}>
        <CheckBox
        checked={item.status == StatusEnum.DONE}
        />
        <Text> {item.title}</Text>
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
