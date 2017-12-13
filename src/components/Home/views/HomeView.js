import React from 'react';
import { Content, Button, Text } from 'native-base';
import I18n from 'yasav/locales/i18n'

export default class HomeView extends React.Component {

  render() {
    return (
      <Content>
        <Button primary style={{marginTop: 10}} onPress={() => { console.log("Pressed"); this.props.navigateToActivityList()}}>
          <Text>{I18n.t('home.activityListButton')}</Text>
        </Button>

        <Button primary style={{marginTop: 10}} onPress={() => this.props.navigateToTodoList()}>
          <Text>{I18n.t('home.todoListButton')}</Text>
        </Button>

        <Button primary style={{marginTop: 10}} onPress={() => this.props.navigateToActivityAdd()}>
          <Text>{I18n.t('home.addActivityButton')}</Text>
        </Button>
      </Content>
    )
  }
}
