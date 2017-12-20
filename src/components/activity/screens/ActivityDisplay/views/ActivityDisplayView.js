import React from 'react';
import { Container, Content, Text } from 'native-base';
import I18n from 'yasav/locales/i18n'
import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');

import { GenericHeader } from 'yasav/src/viewElements/shared/Header';

export default class ActivityDisplayView extends React.Component {

  render() {
    return (
      <Container>
        <GenericHeader
          goBack={this.props.goBack}
          title={I18n.t('activity.activityDisplay.title')}
        />
        <Content>
          <Text>{this.props.activity.title}</Text>
          <Text>{this.props.activity.description}</Text>
          <Text>{this.props.activity.date.format("DD/MM/YYYY HH:mm") }</Text>
        </Content>
      </Container>
    )
  }
}
