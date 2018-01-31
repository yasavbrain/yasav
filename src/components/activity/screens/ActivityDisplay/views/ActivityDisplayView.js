import React from 'react';
import { Container, Content, Text, Button } from 'native-base';
import I18n from 'yasav/locales/i18n'
import moment from 'moment';
import { GenericHeader } from 'yasav/src/viewElements/shared/Header';
import 'moment/locale/fr';

moment.locale('fr');


export default class ActivityDisplayView extends React.Component {
  constructor(props) {
    super(props);
    this.navigateToEditActivity = this.navigateToEditActivity.bind(this);
  }

  navigateToEditActivity() {
    this.props.navigateToEditActivity(this.props.activityAndInterlocutor.activity.id);
  }

  render() {
    return (
      <Container>
        <GenericHeader
          goBack={this.props.goBack}
          title={I18n.t('activity.activityDisplay.title')}
        />
        <Content>
          <Text>{this.props.activityAndInterlocutor.activity.title}</Text>
          <Text>{this.props.activityAndInterlocutor.activity.description}</Text>
          <Text>{this.props.activityAndInterlocutor.activity.date.format('DD/MM/YYYY HH:mm') }</Text>
          <Button
            full
            primary
            style={{ marginTop: 10 }}
            onPress={this.navigateToEditActivity}
          >
            <Text>{I18n.t('activity.activityDisplay.edit')}</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}
