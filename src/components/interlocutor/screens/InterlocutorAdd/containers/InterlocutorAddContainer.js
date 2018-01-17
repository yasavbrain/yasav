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
      name: "",
      link_to_me: "",
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
      setName={(name) => this.setState({name}, () => this.update())}
      setLinkToMe={(link_to_me) => this.setState({link_to_me}, () => this.update())}
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
