import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import 'moment/locale/fr';
import { getInterlocutorList } from 'yasav/src/components/interlocutor/interlocutorList/actions';
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
      interlocutorList: [],
    };
    this.update = this.update.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.setName = this.setName.bind(this);
    this.setLinkToMe = this.setLinkToMe.bind(this);
    this.selectInterlocutor = this.selectInterlocutor.bind(this);
  }

  componentDidMount() {
    this.props.getInterlocutorList();
  }

  setName(name) {
    this.setState(
      {
        ...this.state,
        interlocutor: { ...this.state.interlocutor, name },
        interlocutorList: this.props.interlocutorList.filter(item => item.name.startsWith(name)),
      },
      () => {
        this.validateForm();
        this.update();
      },
    );
  }

  setLinkToMe(linkToMe) {
    this.setState(
      { ...this.state, interlocutor: { ...this.state.interlocutor, linkToMe } },
      () => {
        this.validateForm();
        this.update();
      },
    );
  }

  selectInterlocutor(interlocutor) {
    this.setState(
      {
        ...this.state,
        interlocutor: {
          ...this.state.interlocutor,
          name: interlocutor.name,
          linkToMe: interlocutor.linkToMe,
        },
      },
      () => {
        this.validateForm();
        this.update();
      },
    );
  }

  update() {
    this.props.getInterlocutorState(this.state.interlocutor);
  }

  // TODO : this function is useless for now, need to ensure this form
  // validation
  validateForm() {
    let isFormValid = true;
    isFormValid = isFormValid && this.state.interlocutor.name.length > 0;
    isFormValid = isFormValid && this.state.interlocutor.linkToMe.length > 0;
    this.setState({ isFormValid });
  }

  render() {
    return (
      <InterlocutorAddView
        setName={this.setName}
        name={this.state.interlocutor.name}
        setLinkToMe={this.setLinkToMe}
        interlocutorList={this.state.interlocutorList}
        selectInterlocutor={this.selectInterlocutor}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    interlocutorList: state.interlocutor.interlocutorList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getInterlocutorList: () => dispatch(getInterlocutorList()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InterlocutorAddContainer);
