import React from 'react';
import { Container, Content, List, ListItem, Button, Text, CheckBox } from 'native-base';
import I18n from 'yasav/locales/i18n';
import { GenericHeader } from 'src/viewElements/shared/Header';

export default class TodoListView extends React.Component {

  constructor(props) {
    super(props)
    this.renderRow = this.renderRow.bind(this)
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
