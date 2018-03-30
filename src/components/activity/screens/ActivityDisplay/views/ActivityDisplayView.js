import React from 'react';
import { Container, Content, Text, Button, Footer, FooterTab } from 'native-base';
import I18n from 'yasav/locales/i18n';
import moment from 'moment';
import { GenericHeader } from 'yasav/src/viewElements/shared/Header';
import 'moment/locale/fr';
import Style from '../styles/style.js';

moment.locale('fr');


export default class ActivityDisplayView extends React.Component {
  constructor(props) {
    super(props);
    this.highlightDescription = this.highlightDescription.bind(this);
  }


  highlightDescription(description) {
    let descriptionToCut = description;

    const newDescription = [];
    let i = 0;
    while (descriptionToCut.indexOf('#') > -1) {
      let before
      let tag;

      before = descriptionToCut.substr(0, descriptionToCut.indexOf('#'));
      descriptionToCut = descriptionToCut.substr(descriptionToCut.indexOf('#'));
      if (descriptionToCut.indexOf(' ') > 0) {
        tag = descriptionToCut.substr(descriptionToCut.indexOf('#'), descriptionToCut.indexOf(' '));
        descriptionToCut = descriptionToCut.substr(descriptionToCut.indexOf(' '));
      } else {
        tag = descriptionToCut;
        descriptionToCut = '';
      }
      newDescription.push(<Text key={i}>{before}</Text>);
      i += 1;
      newDescription.push(<Text key={i} style={Style.tag} onPress={() => this.props.navigateToGraphActivityDisplayScreen(tag)}>{tag}</Text>);
      i += 1;
    }
    if (descriptionToCut.length > 0) {
      newDescription.push(<Text key={i}>{descriptionToCut}</Text>);
      i += 1;
    }

    return newDescription;
  }

  render() {
    return (
      <Container>
        <GenericHeader
          goBack={this.props.goBack}
          title={I18n.t('activity.activityDisplay.title')}
        />
        <Content style={Style.container}>
          <Text style={Style.date}>{this.props.activityAndInterlocutor.activity.date.format('DD/MM/YYYY') }</Text>
          <Text style={Style.title}>{this.props.activityAndInterlocutor.activity.title}</Text>
          <Text style={Style.description}>{this.highlightDescription(this.props.activityAndInterlocutor.activity.description)}</Text>

        </Content>
        <Footer style={Style.buttonContainer}>
          <FooterTab>
            <Button
              style={Style.editButton}
              onPress={this.props.navigateToEditActivity}
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
    );
  }
}
