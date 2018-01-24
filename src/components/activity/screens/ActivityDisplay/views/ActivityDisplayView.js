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
    console.log(this.props.activity);
    this.props.navigateToEditActivity(this.props.activity.key);
  }

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
          <Text>{this.props.activity.date.format('DD/MM/YYYY HH:mm') }</Text>
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
