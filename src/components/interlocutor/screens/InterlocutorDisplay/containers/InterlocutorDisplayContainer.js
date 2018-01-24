import React from 'react';
import { connect } from 'react-redux';
import InterlocutorDisplayView from '../views/InterlocutorDisplayView'

class InterlocutorDisplayContainer extends React.Component {
  constructor(props) {
    super(props);
    this.getInterlocutorActivityList = this.getInterlocutorActivityList.bind(this);
  }

  getInterlocutorActivityList(interlocutor, activityList) {
    const interlocutorActivityList = []
    activityList.forEach((function (activity) { 
      if (activity.interlocutorKey == interlocutor.key) {
        interlocutorActivityList.push(activity)
      }
    }))
    return interlocutorActivityList
  }
  
  render() {
    return (
      <InterlocutorDisplayView
        interlocutor = {this.props.stateParams}
        goBack = {this.props.goBack}
        interlocutorActivityList = {this.getInterlocutorActivityList(this.props.stateParams, this.props.activityList)}
      />
        
    );
  }
}

function mapStateToProps(state) {
  return {
    activityList: state.activity.activityList
  }
}

export default connect(mapStateToProps)(InterlocutorDisplayContainer)