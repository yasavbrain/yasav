import React from 'react';

import ActivityAddEditSpecificFieldsEventView from '../views/ActivityAddEditSpecificFieldsEventView';
import ActivityAddEditSpecificFieldsContentView from '../views/ActivityAddEditSpecificFieldsContentView';
import InterlocutorAddContainer from 'yasav/src/components/interlocutor/screens/InterlocutorAdd/containers/InterlocutorAddContainer';

import { ActivityTypeEnum } from 'yasav/src/const';

export default class ActivityAddSpecificFieldsContainer extends React.Component {
  render() {
    if (this.props.type === ActivityTypeEnum.EVENT) {
      return (
        <ActivityAddEditSpecificFieldsEventView />
      );
    } else if (this.props.type === ActivityTypeEnum.MEETING) {
      return (
        <InterlocutorAddContainer
          getInterlocutorState={this.props.getInterlocutorState}
        />
      );
    } else if (this.props.type === ActivityTypeEnum.CONTENT) {
      return (
        <ActivityAddEditSpecificFieldsContentView
          setContentSource={this.props.setContentSource}
          value={this.props.contentSource}
        />
      );
    }
    return null;
  }
}
