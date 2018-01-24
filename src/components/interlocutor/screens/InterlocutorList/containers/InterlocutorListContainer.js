import React from 'react';
import { connect } from 'react-redux';
import InterlocutorListView from '../views/InterlocutorListView';

class InterlocutorListContainer extends React.Component {
  render() {
    return (
      <InterlocutorListView
      goBack={this.props.goBack}
      displayInterlocutorList={this.props.interlocutorList}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    interlocutorList: state.interlocutor.interlocutorList
  }
}

export default connect (mapStateToProps)(InterlocutorListContainer)