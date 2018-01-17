import React from 'react';

import ActivityAddSpecificFieldsEventView from '../views/ActivityAddSpecificFieldsEventView';
import InterlocutorAddContainer from 'yasav/src/components/interlocutor/screens/InterlocutorAdd/containers/InterlocutorAddContainer';
import ActivityAddSpecificFieldsContentView from '../views/ActivityAddSpecificFieldsContentView';

import { ActivityTypeEnum } from 'yasav/src/const';



export default class ActivityAddSpecificFieldsContainer extends React.Component {
  render() {
    if(this.props.type == ActivityTypeEnum.EVENT){
      return (
        <ActivityAddSpecificFieldsEventView />
      )
    }else if(this.props.type == ActivityTypeEnum.MEETING){
      return (
        <InterlocutorAddContainer 
          getInterlocutorState={this.props.getInterlocutorState}
        />
      )
    }else if(this.props.type == ActivityTypeEnum.CONTENT){
      return (
        <ActivityAddSpecificFieldsContentView 
          setContentSource={this.props.setContentSource}
          value={this.props.contentSource}
        />
      )
    }else{
      return null
    }
  }
}

//setMeetingWho={this.props.setMeetingWho}
          //value={this.props.meetingWho}