import React from 'react';
import { Container, Content, ListItem, Text, CheckBox, Picker, List, View, Item, Icon, Input, Button } from 'native-base';
import I18n from 'yasav/locales/i18n.js';
import { MenuHeader } from 'src/viewElements/shared/Header.js';
import { StatusEnum } from 'yasav/src/const.js';
import Style from '../styles/style.js';

export default class TodoListView extends React.Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(item) {
    return (
      <ListItem
        onPress={() => this.props.toggleTodo(item)}
        onLongPress={ () => this.props.deleteTodo(item.key)}
      >
        <CheckBox style={[Style.checkbox, (item.status === StatusEnum.DONE)? Style.checkboxSelected: Style.checkboxUnselected]} checked={item.status === StatusEnum.DONE}
        />
        <Text style={[Style.todoText, (item.status === StatusEnum.DONE)? Style.todoTextDone: Style.todoTextTodo]}>{item.title}</Text>
      </ListItem>
    );
  }

  render() {
    return (
      <Container style={Style.container}>
        <Content style={Style.content}>
          <Item style={Style.addForm}>
            <Button transparent>
              <Icon name='add' style={Style.addTodoButton}/>
            </Button>
            <Input placeholder='Add a new todo here' style={Style.input}/>
          </Item>
          <List
            dataArray={this.props.todoList}
            renderRow={this.renderRow}
          />
        </Content>
      </Container>
    );
  }
}
