import React from 'react';
import { connect } from 'react-redux';
import { getInterlocutorActivity } from '../actions/index'
import InterlocutorDisplayView from '../views/InterlocutorDisplayView'

class InterlocutorDisplayContainer extends React.Component {
  
  componentDidMount() {
    this.props.getInterlocutorActivity(this.props.stateParams.id);
  }
  
  render() {
    return (
      <InterlocutorDisplayView
        interlocutor = {this.props.stateParams}
        goBack = {this.props.goBack}
        interlocutorActivityList = {this.props.activityList}
      />
        
    );
  }
}

function mapStateToProps(state) {
  return {
    activityList: state.interlocutor.activityList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getInterlocutorActivity: (interlocutor_id) => dispatch(getInterlocutorActivity(interlocutor_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InterlocutorDisplayContainer)