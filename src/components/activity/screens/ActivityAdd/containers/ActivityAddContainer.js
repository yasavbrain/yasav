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
      type: "",
      key: this.props.lastID + 1
    }
    this.addActivity = this.addActivity.bind(this)
    this.addTodoActivity = this.addTodoActivity.bind(this)
    this.setTypeEvent = this.setTypeEvent.bind(this)
    this.setTypeMeeting = this.setTypeMeeting.bind(this)
    this.setTypeContent = this.setTypeContent.bind(this)
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

  render() {
    return(
      <ActivityAddView
        goBack={this.props.goBack}
        addActivity={this.addActivity}
        addTodoActivity={this.addTodoActivity}
        setTitle={(title) => this.setState({title})}
        setDescription={(description) => this.setState({description})}
        setTypeEvent={this.setTypeEvent}
        setTypeMeeting={this.setTypeMeeting}
        setTypeContent={this.setTypeContent}
        type={this.state.type}
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
