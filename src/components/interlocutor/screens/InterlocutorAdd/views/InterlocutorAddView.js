import React from 'react';
import { Container, Content, Text, Form, Item, Input, Label, Textarea, Button } from 'native-base';

import I18n from 'yasav/locales/i18n';
import Style from '../styles/style.js';

export default class InterlocutorAddView extends React.Component {

  render() {
    return(
      <Form>
        <Item floatingLabel>
          <Label>{I18n.t('interlocutor.activityAdd.name')}</Label>
          <Input onChangeText={(name) => this.props.setName(name)} />
        </Item>
        <Item floatingLabel>
          <Label>{I18n.t('interlocutor.activityAdd.linkToMe')}</Label>
          <Input onChangeText={(link_to_me) => this.props.setLinkToMe(link_to_me)} />
        </Item>
      </Form>
    );
  }
}
