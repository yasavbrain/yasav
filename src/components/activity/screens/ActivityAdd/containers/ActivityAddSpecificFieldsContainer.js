import React from 'react';

import ActivityAddSpecificFieldsEventView from '../views/ActivityAddSpecificFieldsEventView';
import ActivityAddSpecificFieldsMeetingView from '../views/ActivityAddSpecificFieldsMeetingView';
import ActivityAddSpecificFieldsContentView from '../views/ActivityAddSpecificFieldsContentView';

import { Text } from 'native-base';


export default class ActivityAddSpecificFieldsContainer extends React.Component {
  render() {
    if(this.props.type == "event"){
      return (
        <ActivityAddSpecificFieldsEventView 
          setEventWhat={this.props.setEventWhat}
          value={this.props.eventWhat}
        />
      )
    }else if(this.props.type == "meeting"){
      return (
        <ActivityAddSpecificFieldsMeetingView 
          setMeetingWho={this.props.setMeetingWho}
          value={this.props.meetingWho}
        />
      )
    }else if(this.props.type == "content"){
      return (
        <ActivityAddSpecificFieldsContentView 
          setContentSource={this.props.setContentSource}
          value={this.props.contentSource}
        />
      )
    }else{
      console.log(this.props.type)
      console.log("lol")
      return null
    }
  }
}
