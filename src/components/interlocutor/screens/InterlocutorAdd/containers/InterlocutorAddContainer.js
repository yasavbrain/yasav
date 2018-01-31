import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import 'moment/locale/fr';
import InterlocutorAddView from '../views/InterlocutorAddView';

moment.locale('fr');


class InterlocutorAddContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interlocutor: {
        name: '',
        linkToMe: '',
        date: moment(),
        id: null,
      },
      isFormValid: false,
    };
    this.update = this.update.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.setName = this.setName.bind(this);
    this.setLinkToMe = this.setLinkToMe.bind(this);
  }

  setName(name) {
    this.setState({ ...this.state, interlocutor: { ...this.state.interlocutor, name } }, () => { this.validateForm; this.update() ;});
  }

  setLinkToMe(linkToMe) {
    this.setState({ ...this.state, interlocutor: { ...this.state.interlocutor, linkToMe } }, () => { this.validateForm; this.update() ;});
  }

  validateForm() {
    let isFormValid = true;
    isFormValid = isFormValid && this.state.interlocutor.name.length > 0;
    isFormValid = isFormValid && this.state.interlocutor.linkToMe.length > 0;
    this.setState({ isFormValid });
  }

  update() {
    this.props.getInterlocutorState(this.state.interlocutor);
  }

  render() {
    return (
      <InterlocutorAddView
        setName={this.setName}
        setLinkToMe={this.setLinkToMe}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    lastID: state.interlocutor.lastID,
  };
}

export default connect(mapStateToProps)(InterlocutorAddContainer);
