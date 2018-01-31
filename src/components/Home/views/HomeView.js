import React from 'react';
import { Container, Header, Content, Button, Text,
} from 'native-base';
import I18n from 'yasav/locales/i18n';

import { SimpleHeader } from 'yasav/src/viewElements/shared/Header';

export default class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.navigateToActivityList = this.navigateToActivityList.bind(this);
    this.navigateToTodoList = this.navigateToTodoList.bind(this);
    this.navigateToActivityAdd = this.navigateToActivityAdd.bind(this);
    this.navigateToTodoAdd = this.navigateToTodoAdd.bind(this);
    this.navigateToInterlocutorList = this.navigateToInterlocutorList.bind(this);
  }

  navigateToActivityList() {
    this.props.navigateToActivityList();
  }

  navigateToTodoList() {
    this.props.navigateToTodoList();
  }

  navigateToActivityAdd() {
    this.props.navigateToActivityAdd();
  }

  navigateToTodoAdd() {
    this.props.navigateToTodoAdd();
  }

  navigateToInterlocutorList() {
    this.props.navigateToInterlocutorList();
  }

  render() {
    return (
      <Container>
        <SimpleHeader title={I18n.t('home.title')} />
        <Content>
          <Button full primary style={{ marginTop: 10 }} onPress={this.navigateToActivityList}>
            <Text>{I18n.t('home.activityListButton')}</Text>
          </Button>

          <Button full primary style={{ marginTop: 10 }} onPress={this.navigateToTodoList}>
            <Text>{I18n.t('home.todoListButton')}</Text>
          </Button>

          <Button full primary style={{ marginTop: 10 }} onPress={this.navigateToActivityAdd}>
            <Text>{I18n.t('home.addActivityButton')}</Text>
          </Button>

          <Button full primary style={{ marginTop: 10 }} onPress={this.navigateToTodoAdd}>
            <Text>{I18n.t('home.todoAddButton')}</Text>
          </Button>

          <Button full primary style={{ marginTop: 10 }} onPress={this.navigateToInterlocutorList}>
            <Text>{I18n.t('home.interlocutorListButton')}</Text>
          </Button>
        </Content>
      </Container>

    );
  }
}
