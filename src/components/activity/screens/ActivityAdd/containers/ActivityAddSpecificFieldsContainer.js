import React from 'react';

import ActivityAddSpecificFieldsEventView from '../views/ActivityAddSpecificFieldsEventView';
import ActivityAddSpecificFieldsMeetingView from '../views/ActivityAddSpecificFieldsMeetingView';
import ActivityAddSpecificFieldsContentView from '../views/ActivityAddSpecificFieldsContentView';

import { ActivityTypeEnum } from 'yasav/src/const';



export default class ActivityAddSpecificFieldsContainer extends React.Component {
  render() {
    if(this.props.type == ActivityTypeEnum.EVENT){
      return (
        <ActivityAddSpecificFieldsEventView 
          setEventWhat={this.props.setEventWhat}
          value={this.props.eventWhat}
        />
      )
    }else if(this.props.type == ActivityTypeEnum.MEETING){
      return (
        <ActivityAddSpecificFieldsMeetingView 
          setMeetingWho={this.props.setMeetingWho}
          value={this.props.meetingWho}
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