import React from 'react';
import { Text } from 'react-native';
import { Content } from 'native-base';
import I18n from 'yasav/locales/i18n'
import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');

export default class ActivityDisplayView extends React.Component {

  render() {
    return (
      <Content>
        <Text>{I18n.t('activity.activityDisplay.content')}</Text>
        <Text>{this.props.activity ? this.props.activity.title : null }</Text>
        <Text>{this.props.activity.description}</Text>
        <Text>{this.props.activity.date.format("DD/MM/YYYY HH:mm") }</Text>
      </Content>
    )
  }
}
