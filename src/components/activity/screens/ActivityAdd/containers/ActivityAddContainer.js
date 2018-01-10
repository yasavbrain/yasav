import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');

import ActivityAddView from '../views/ActivityAddView';
import { addActivity } from '../actions/index';


class ActivityAddContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: "",
      description: "",
      date: moment(),
      type: "content",
      contentSource: "",
      eventWhat: "",
      meetingWho: "",
      tags: [],
      tagInput: "",
      key: this.props.lastID + 1
    }
    this.addActivity = this.addActivity.bind(this)
    this.addTodoActivity = this.addTodoActivity.bind(this)
    this.setTypeEvent = this.setTypeEvent.bind(this)
    this.setTypeMeeting = this.setTypeMeeting.bind(this)
    this.setTypeContent = this.setTypeContent.bind(this)
    this.setTitle = this.setTitle.bind(this)
    this.setContentSource = this.setContentSource.bind(this)
    this.setEventWhat = this.setEventWhat.bind(this)
    this.setMeetingWho = this.setMeetingWho.bind(this)
    this.setDescription = this.setDescription.bind(this)
    this.setTitle = this.setTitle.bind(this)
    this.manageTag = this.manageTag.bind(this)
    this.removeTag = this.removeTag.bind(this)
  }

  addActivity() {

    this.props.addActivity(this.state)
    this.props.goBack()
  }

  addTodoActivity() {
    this.props.addActivity(this.state)
    this.props.navigateToTodoAddScreen(this.state.key)
  }

  setTypeEvent(){
    this.setState({type: "event"});
  }

  setTypeMeeting(){
    this.setState({type: "meeting"});
  }

  setTypeContent(){
    this.setState({type: "content"});
  }

  setContentSource(source){
    this.setState({contentSource: source})
  }

  setEventWhat(what){
    this.setState({eventWhat: what})
  }

  setMeetingWho(who){
    this.setState({meetingWho: who})
  }

  setDescription(description){
    this.setState({description: description})
  }

  setTitle(title){
    this.setState({title: title})
  }

  removeTag(tag){
    this.setState({tags: this.state.tags.filter((item) => item != tag)})
  }

  manageTag(string){
    if(string.indexOf(",") !== -1){
      newTagsRessource = string.split(",")
      newTags = []
      newTagsRessource.forEach(element => {
        element = element.trim()
        if(element != ""){
          newTags.push(element)
        }
      });
      concatenated = this.state.tags.concat(newTags)
      updatedState = concatenated.filter(function(item, pos) {
        return concatenated.indexOf(item) == pos;
      })
      this.setState({tags: updatedState})
      this.setState({tagInput: ""})
    }else{
      this.setState({tagInput: string})
    }
  }

  render() {
    return(
      <ActivityAddView
        goBack={this.props.goBack}
        addActivity={this.addActivity}
        addTodoActivity={this.addTodoActivity}
        setTitle={this.setTitle}
        setDescription={this.setDescription}
        setContentSource={this.setContentSource}
        setMeetingWho={this.setMeetingWho}
        setEventWhat={this.setEventWhat}
        contentSource={this.state.contentSource}
        meetingWho={this.state.meetingWho}
        eventWhat={this.state.eventWhat}
        setTypeEvent={this.setTypeEvent}
        setTypeMeeting={this.setTypeMeeting}
        setTypeContent={this.setTypeContent}
        type={this.state.type}
        tags={this.state.tags}
        manageTag={this.manageTag}
        tagInput={this.state.tagInput}
        removeTag={this.removeTag}
      />
    );
  }
}


function mapStateToProps(state) {
  return {
    lastID: state.activity.lastID
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addActivity: (activity) => dispatch(addActivity(activity))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityAddContainer)
