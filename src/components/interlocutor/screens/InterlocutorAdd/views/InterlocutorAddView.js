import React from 'react';
import { Container, Content, Text, Form, Item, Input, Label, Textarea, Button } from 'native-base';

import I18n from 'yasav/locales/i18n';
import Style from '../styles/style.js';

export default class InterlocutorAddView extends React.Component {

  render() {
    return(
      <Form>
        <Item floatingLabel>
          <Label>{I18n.t('interlocutor.interlocutorAdd.name')}</Label>
          <Input onChangeText={(name) => this.props.setName(name)} />
        </Item>
        <Item floatingLabel>
          <Label>{I18n.t('interlocutor.interlocutorAdd.linkToMe')}</Label>
          <Input onChangeText={(linkToMe) => this.props.setLinkToMe(linkToMe)} />
        </Item>
      </Form>
    );
  }
}
