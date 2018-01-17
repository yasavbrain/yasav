import React from 'react';
import { Container, Content, Text, Form, Item, Input, Label, Textarea, Button } from 'native-base';

import I18n from 'yasav/locales/i18n';
import Style from '../styles/style.js';

export default class InterlocutorAddView extends React.Component {

  render() {
    return(
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>{I18n.t('interlocutor.activityAdd.firstName')}</Label>
            <Input onChangeText={(firstname) => this.props.setFirstName(firstname)} />
          </Item>
          <Item floatingLabel>
            <Label>{I18n.t('interlocutor.activityAdd.lastName')}</Label>
            <Input onChangeText={(lastname) => this.props.setLastName(lastname)} />
          </Item>
          <Item floatingLabel>
            <Label>{I18n.t('interlocutor.activityAdd.linkToMe')}</Label>
            <Input onChangeText={(linktome) => this.props.setLinkToMe(linktome)} />
          </Item>
        </Form>
      </Content>
    );
  }
}
