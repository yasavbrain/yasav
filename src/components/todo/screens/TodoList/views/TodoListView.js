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
    return (
      <ListItem
        onPress={() => this.props.toggleTodo(item.item)}
        onLongPress={ () => this.props.deleteTodo(item.item.id)}
      >
        <CheckBox 
          style={[Style.checkbox, (item.item.status === StatusEnum.DONE)? Style.checkboxSelected: Style.checkboxUnselected]} 
          checked={item.item.status === StatusEnum.DONE}
          onPress={() => this.props.toggleTodo(item.item)}
        />
        <Text style={[Style.todoText, (item.item.status === StatusEnum.DONE)? Style.todoTextDone: Style.todoTextTodo]}>{item.item.title}</Text>
      </ListItem>
    );
  }

  render() {
    return (
      <Container style={Style.container}>
        <Content style={Style.content}>
          <Item style={Style.addForm}>
            <Button transparent onPress={this.props.addTodo}>
              <Icon name='add' style={Style.addTodoButton}/>
            </Button>
            <Input 
              placeholder={I18n.t('todo.todoList.addPlaceholder')}
              style={Style.input} 
              onChangeText={(title) => this.props.setTitle(title)} 
              value={this.props.todoTitle} />
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
