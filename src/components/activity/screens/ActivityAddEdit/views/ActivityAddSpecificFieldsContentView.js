import React from 'react';
import { Input, Item, Label } from 'native-base';

import I18n from 'yasav/locales/i18n';
import Style from '../styles/style.js';

export default class ActivityAddSpecificFieldsContentView extends React.Component {

  render() {
    return(
      <Item floatingLabel>
        <Label>{I18n.t('activity.activityAdd.contentSource')}</Label>
        <Input onChangeText={this.props.setContentSource} value={this.props.value} />
      </Item>
    );
  }
}
