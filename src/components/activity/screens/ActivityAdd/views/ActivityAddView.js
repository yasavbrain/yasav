import React from 'react';
import { Text, Form, Item, Input, Label, Textarea, Button, Content } from 'native-base';
import { View, TextInput } from 'react-native';

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

        <Content>
        <Button primary onPress={() => this.props.navigateToTodoAddScreen()}>
          <Text>{I18n.t('activity.activityAdd.addTodoButton')}t</Text>
        </Button>
        <Text>{I18n.t('activity.activityAdd.hintText')}</Text>
      </Content>
      </Form>
    );
  }
}
