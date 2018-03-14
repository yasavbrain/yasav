import React from 'react';
import { Container, Content, Text, Button, Footer, FooterTab, Picker, Item } from 'native-base';
import I18n from 'yasav/locales/i18n'
import moment from 'moment';
import { GenericHeader, MenuHeader } from 'yasav/src/viewElements/shared/Header';
import 'moment/locale/fr';
import Style from '../styles/style.js';

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
        <MenuHeader
          goBack={this.props.goBack}
          title={I18n.t('activity.activityDisplay.title')}
          menu={
            <Picker
              mode="dropdown"
              placeholder="Select One"
            >
              <Item label="Wallet" value="key0" onPress={() => alert("lol")} />
              <Item label="ATM Card" value="key1" onPress={() => alert("lal")} />
            </Picker>
          }
        />
        <Content style={Style.container}>
          <Text style={Style.date}>{this.props.activityAndInterlocutor.activity.date.format('DD/MM/YYYY') }</Text>
          <Text style={Style.title}>{this.props.activityAndInterlocutor.activity.title}</Text>
          <Text style={Style.description}>{this.props.activityAndInterlocutor.activity.description}</Text>
          
        </Content>
        <Footer style={Style.buttonContainer}>
          <FooterTab>
            <Button
              style={Style.editButton}
              onPress={this.navigateToEditActivity}
            >
              <Text style={Style.buttonText}>{I18n.t('activity.activityDisplay.edit')}</Text>
            </Button>
            <Button
              style={Style.deleteButton}
              onPress={this.props.deleteActivity}
            >
              <Text style={Style.buttonText}>{I18n.t('activity.activityDisplay.delete')}</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}
