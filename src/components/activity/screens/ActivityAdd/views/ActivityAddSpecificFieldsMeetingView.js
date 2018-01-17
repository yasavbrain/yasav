import React from 'react';
import { Input, Item, Label } from 'native-base';

import I18n from 'yasav/locales/i18n';
import Style from '../styles/style.js';

import InterlocutorAddContainer from 'yasav/src/components/interlocutor/screens/InterlocutorAdd/containers/InterlocutorAddContainer';

export default class ActivityAddSpecificFieldsMeetingView extends React.Component {

  render() {
    return(
      //<Item floatingLabel>
        //<Label>Qui (Lien à faire avec Interlocuteur)</Label>
        //<Input onChangeText={this.props.setMeetingWho} value={this.props.value} />
      //</Item>
      <InterlocutorAddContainer 
      getInterlocutorState={this.props.getInterlocutorState}
      />
    );
  }
}
