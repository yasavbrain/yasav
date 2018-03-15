import React from 'react';
import { Container, Content, ListItem, Text, CheckBox, Picker, List, View, Item, Icon, Input, Button } from 'native-base';
import { FlatList } from 'react-native'
import I18n from 'yasav/locales/i18n.js';
import { MenuHeader } from 'src/viewElements/shared/Header.js';
import { StatusEnum } from 'yasav/src/const.js';
import Style from '../styles/style.js';

export default class TodoListView extends React.Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(item) {
    innerItem = item.item
    return (
      <ListItem
        onPress={() => this.props.toggleTodo(innerItem)}
        onLongPress={ () => this.props.deleteTodo(innerItem.key)}
      >
        <CheckBox style={[Style.checkbox, (innerItem.status === StatusEnum.DONE)? Style.checkboxSelected: Style.checkboxUnselected]} checked={innerItem.status === StatusEnum.DONE}
        />
        <Text style={[Style.todoText, (innerItem.status === StatusEnum.DONE)? Style.todoTextDone: Style.todoTextTodo]}>{innerItem.title}</Text>
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
          <FlatList
            data={this.props.todoList}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
          />
        </Content>
      </Container>
    );
  }
}
