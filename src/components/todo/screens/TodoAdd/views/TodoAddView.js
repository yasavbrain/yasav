import React from 'react';
import { Container, Content, Text, Form, Item, Input, Label, Button } from 'native-base';
import { View, TextInput } from 'react-native';

import I18n from 'yasav/locales/i18n';
import Style from '../styles/style.js';
import { GenericHeader } from 'yasav/src/viewElements/shared/Header';

export default class TodoAddView extends React.Component {

  // TODO : Remove the arrow function from the render
  render() {
    return(
      <Container>
        <GenericHeader
          goBack={this.props.goBack}
          title={I18n.t('todo.todoAdd.title')}
        />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>{I18n.t('todo.todoAdd.title')}</Label>
              <Input onChangeText={(title) => this.props.setTitle(title)} />
            </Item>
            <Button primary full onPress={this.props.addTodo}>
              <Text>{I18n.t('todo.todoAdd.addTodoButton')}</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
