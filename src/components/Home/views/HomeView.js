import React from 'react';
<<<<<<< HEAD
import { Content, Button, Text } from 'native-base';
import I18n from 'yasav/locales/i18n';

=======
import { Content, Text, Button } from 'native-base';
import I18n from 'yasav/locales/i18n'
>>>>>>> Adapted AddToDo to AddActivity

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
        
        <Button full primary style={{marginTop: 10}} onPress={this.props.navigateToTodoAdd}>
          <Text>{I18n.t('home.todoAddButton')}</Text>
        </Button>
      </Content>

    )
  }
}
