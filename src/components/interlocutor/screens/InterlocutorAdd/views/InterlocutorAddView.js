import React from 'react';
import { Form, Item, Input, Label } from 'native-base';

import I18n from 'yasav/locales/i18n';

export default class InterlocutorAddView extends React.Component {
  render() {
    return (
      <Form>
        <Item floatingLabel>
          <Label>{I18n.t('interlocutor.interlocutorAdd.name')}</Label>
          <Input onChangeText={name => this.props.setName(name)} />
        </Item>
        <Item floatingLabel>
          <Label>{I18n.t('interlocutor.interlocutorAdd.linkToMe')}</Label>
          <Input onChangeText={linkToMe => this.props.setLinkToMe(linkToMe)} />
        </Item>
      </Form>
    );
  }
}
