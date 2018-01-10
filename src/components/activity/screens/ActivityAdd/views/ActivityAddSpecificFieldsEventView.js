import React from 'react';
import { Input, Item, Label } from 'native-base';

import I18n from 'yasav/locales/i18n';
import Style from '../styles/style.js';

export default class ActivityAddSpecificFieldsEventView extends React.Component {

  render() {
    console.log(this.props.setEventWhat)
    return(
      <Item floatingLabel>
        <Label>{I18n.t('activity.activityAdd.eventWhat')}</Label>
        <Input onChangeText={this.props.setEventWhat} value={this.props.value} />
      </Item>
    );
  }
}
