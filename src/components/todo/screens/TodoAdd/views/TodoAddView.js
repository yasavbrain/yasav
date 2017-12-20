import React from 'react';
import { Text, Form, Item, Input, Label, Button } from 'native-base';
import { View, TextInput } from 'react-native';

import I18n from 'yasav/locales/i18n';
import Style from '../styles/style.js';

export default class TodoAddView extends React.Component {
  render() {
    return(
      <Form>
        <Item floatingLabel>
          <Label>{I18n.t('todo.todoAdd.title')}</Label>
          <Input onChangeText={(title) => this.props.setTitle(title)} />
        </Item>
        <Button primary full onPress={this.props.addTodo}>
          <Text>{I18n.t('todo.todoAdd.addTodoButton')}</Text>
        </Button>
      </Form>

    );
  }
}