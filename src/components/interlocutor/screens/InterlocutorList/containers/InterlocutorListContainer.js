import React from 'react';
import { connect } from 'react-redux';
import { getInterlocutorList } from '../actions';
import InterlocutorListView from '../views/InterlocutorListView';
import { sortListQuery } from 'yasav/src/utils/functions';

class InterlocutorListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchActive: false };
    this.modifySearchInterlocutor = this.modifySearchInterlocutor.bind(this);
  }

  componentDidMount() {
    this.props.getInterlocutorList();
  }

  modifySearchInterlocutor(is_active) {
    this.setState({ searchActive: is_active });
  }

  render() {
    if (this.state.searchActive) {
      var interlocutorList = sortListQuery(this.props.interlocutorListFromRequest);
    } else {
      var interlocutorList = this.props.interlocutorListAll;
    }
    return (
      <InterlocutorListView
        goBack={this.props.goBack}
        displayInterlocutorList={interlocutorList}
        navigateToInterlocutorDisplayScreen={this.props.navigateToInterlocutorDisplayScreen}
        modifySearchInterlocutor={this.modifySearchInterlocutor}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    interlocutorListAll: state.interlocutor.interlocutorList,
    interlocutorListFromRequest: state.search.interlocutorListFromRequest,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getInterlocutorList: () => dispatch(getInterlocutorList()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InterlocutorListContainer);
