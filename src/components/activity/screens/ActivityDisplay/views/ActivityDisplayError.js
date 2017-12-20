import React from 'react';
import { Container, Content, Text } from 'native-base';
import I18n from 'yasav/locales/i18n';

import { GenericHeader } from 'yasav/src/viewElements/shared/Header';


export default class ActivityDisplayError extends React.Component {

  render() {
    return (
      <Container>
        <GenericHeader
          goBack={this.props.goBack}
          title={I18n.t('activity.activityDisplayError.title')}
        />
        <Content>
          <Text>{I18n.t('activity.activityDisplayError.content')}</Text>
        </Content>
      </Container>
    )
  }
}
