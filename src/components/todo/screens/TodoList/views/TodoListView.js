import React from 'react';
import { Container, Header, Left, Right, Body, Content, Title, List, ListItem,
  Button, Text, Icon, CheckBox } from 'native-base';
import I18n from 'yasav/locales/i18n';

export default class TodoListView extends React.Component {

  constructor(props) {
    super(props)
    this.renderRow = this.renderRow.bind(this)
    this.goBack = this.goBack.bind(this)
  }

  goBack() {
    this.props.goBack()
  }

  renderRow(item) {
    const id = item.key
    return (
      <ListItem style={{backgroundColor: 0}} 
        onPress = { () => this.props.toggleTodo(id)}>
        <CheckBox
        checked={item.completed}
        />
        <Text> {item.title}</Text>
      </ListItem>
    );
  }

  render() {
    return(
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={this.goBack}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{I18n.t('todo.todoList.title')}</Title>
          </Body>
          <Right />
        </Header>
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
