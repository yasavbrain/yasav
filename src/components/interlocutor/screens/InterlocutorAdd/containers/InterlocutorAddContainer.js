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
      //key: this.props.lastID + 1,
    }
    //this.createInterlocutor = this.createInterlocutor.bind(this)
    //this.update = this.update.bind(this)
  }

  //createInterlocutor() {
    //console.log("CreateInterlocutor")
    //a = this.props.createInterlocutor(this.state)
    //console.log(a)
    //this.props.addInterlocutor(a)
    //console.log('addinterlocutor')
  //}

  render() {
    return(
      <InterlocutorAddView
        setFirstName={(firstNameInterlocutor) => this.setState({firstNameInterlocutor})}
        setLastName={(lastNameInterlocutor) => this.setState({lastNameInterlocutor})}
        setLinkToMe={(linkToMeInterlocutor) => this.setState({linkToMeInterlocutor})}
      />
    );
  }
}


//function mapStateToProps(state) {
  //return {
    //lastID: state.activity.lastID
  //}
//}

//function mapDispatchToProps(dispatch) {
  //return {
    //addInterlocutor: (interlocutor) => dispatch(addInterlocutor(interlocutor))
  //}
//}

//export default connect(null, mapDispatchToProps)(InterlocutorAddContainer)