import React from 'react';
import { Container, Content, Text, List, ListItem } from 'native-base';
import I18n from 'yasav/locales/i18n'
import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');

import { GenericHeader } from 'yasav/src/viewElements/shared/Header';

export default class InterlocutorDisplayView extends React.Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }

  // TODO : Find a way to remove that arrow function in the render
  renderRow(item) {
    return(
      <ListItem
        style={{height: 30, backgroundColor: 0}}
      >
        <Text>{item.title}</Text>
      </ListItem>
    );
  }

  render() {
    return (
      <Container>
        <GenericHeader
          goBack={this.props.goBack}
          title={I18n.t('activity.activityDisplay.title')}
        />
        <Content>
          <Text>{this.props.interlocutor.name}</Text>
          <Text>{this.props.interlocutor.linkToMe}</Text>
          <List
            dataArray={this.props.interlocutorActivityList}
            renderRow={this.renderRow}
          />
        </Content>
      </Container>
    )
  }
}
