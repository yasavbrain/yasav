import React from 'react';
import { Container, Content, ListItem, Text, CheckBox, Picker } from 'native-base';
import { FlatList } from 'react-native';
import I18n from 'yasav/locales/i18n.js';
import { MenuHeader } from 'src/viewElements/shared/Header.js';
import { StatusEnum } from 'yasav/src/const.js';

export default class TodoListView extends React.Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.renderMenu = this.renderMenu.bind(this);
  }

  renderMenu() {
    // mode property is just for Android (dropdown vs dialog)
    return (
      <Picker
        mode="dropdown"
        selectedValue={this.props.visible}
        onValueChange={this.props.filterTodos}
      >
        <Picker.Item label={I18n.t('todo.todoList.filterAll')} value={-1} />
        <Picker.Item label={I18n.t('todo.todoList.filterDone')} value={StatusEnum.DONE} />
        <Picker.Item label={I18n.t('todo.todoList.filterTodo')} value={StatusEnum.TODO} />
      </Picker>
    );
  }

  renderItem({ item }) {
    return (
      <ListItem
        style={{ backgroundColor: 0 }}
        onPress={() => this.props.toggleTodo(item)}
        onLongPress={ () => this.props.deleteTodo(item.key)}
      >
        <CheckBox
          checked={item.status === StatusEnum.DONE}
        />
        <Text>{item.title}</Text>
      </ListItem>
    );
  }

  render() {
    // TODO : solve the bug preventing the display of the the Picker in the
    // header menu
    return (
      <Container>
        <MenuHeader
          goBack={this.props.goBack}
          title={I18n.t('todo.todoList.title')}
          menu={this.renderMenu()}
        />
        <Content>
          {this.renderMenu()}
          <FlatList
            data={this.props.todoList}
            renderItem={this.renderItem}
          />
        </Content>
      </Container>
    );
  }
}
