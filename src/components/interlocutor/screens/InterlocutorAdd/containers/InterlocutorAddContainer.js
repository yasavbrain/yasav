import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');

import InterlocutorAddView from '../views/InterlocutorAddView';
import { addInterlocutor } from '../actions/index';


class InterlocutorAddContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      firstNameInterlocutor: "",
      lastNameInterlocutor: "",
      linkToMeInterlocutor: "",
      date: moment(),
      key: this.props.lastID + 1,
    }
    this.update = this.update.bind(this)
  }

  update() {
    this.props.getInterlocutorState(this.state)
  }

  render() {
    return(
      <InterlocutorAddView
      setFirstName={(firstNameInterlocutor) => this.setState({firstNameInterlocutor}, () => this.update())}
      setLastName={(lastNameInterlocutor) => this.setState({lastNameInterlocutor}, () => this.update())}
      setLinkToMe={(linkToMeInterlocutor) => this.setState({linkToMeInterlocutor}, () => this.update())}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    lastID: state.interlocutor.lastID
  }
}

export default connect(mapStateToProps)(InterlocutorAddContainer)