import React from 'react';
import { Text, Form, Item, Input, Label, Textarea, Button, Content } from 'native-base';

import I18n from 'yasav/locales/i18n';
import Style from '../styles/style.js';

export default class ActivityAddContainer extends React.Component {
  render() {

    return(
      <Form>
        <Item floatingLabel>
          <Label>{I18n.t('activity.activityAdd.title')}</Label>
          <Input onChangeText={(title) => this.props.setTitle(title)} />
        </Item>
        <Item floatingLabel>
          <Label>{I18n.t('activity.activityAdd.content')}</Label>
          <Input
            onChangeText={(description) => this.props.setDescription(description)}
            multiline
            blurOnSubmit={false}
            numberOfLines={5}
            returnKeyType='none'
            style={Style.textarea}
          />
        </Item>
        <Button primary full onPress={this.props.addActivity}>
          <Text>{I18n.t('activity.activityAdd.addActivityButton')}</Text>
        </Button>

        <Button primary full style={{ marginTop: 20 }}>
          <Text>{I18n.t('activity.activityAdd.addTodoButton')}</Text>
        </Button>
      </Form>
    );
  }
}


//<Button primary onPress={() => this.props.navigateToTodoAddScreen()}>
/*
  For linking to
*/