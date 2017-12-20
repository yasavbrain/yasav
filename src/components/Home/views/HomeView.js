import React from 'react';
import { Content, Button, Text } from 'native-base';
import I18n from 'yasav/locales/i18n';

export default class HomeView extends React.Component {

  render() {
    return (
      <Content>
        <Button full primary style={{marginTop: 10}} onPress={this.props.navigateToActivityList}>
          <Text>{I18n.t('home.activityListButton')}</Text>
        </Button>

        <Button full primary style={{marginTop: 10, height: 150}} onPress={this.props.navigateToTodoList}>
          <Text>{I18n.t('home.todoListButton')}</Text>
        </Button>

        <Button full primary style={{marginTop: 10}} onPress={this.props.navigateToActivityAdd}>
          <Text>{I18n.t('home.addActivityButton')}</Text>
        </Button>
      </Content>
    )
  }
}
