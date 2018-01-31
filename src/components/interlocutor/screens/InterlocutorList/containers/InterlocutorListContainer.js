import React from 'react';
import { connect } from 'react-redux';
import { getInterlocutorList } from '../actions';
import InterlocutorListView from '../views/InterlocutorListView';

class InterlocutorListContainer extends React.Component {
  
  componentDidMount() {
    this.props.getInterlocutorList();
  }
  
  render() {
    return (
      <InterlocutorListView
      goBack={this.props.goBack}
      displayInterlocutorList={this.props.interlocutorList}
      navigateToInterlocutorDisplayScreen={this.props.navigateToInterlocutorDisplayScreen}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    interlocutorList: state.interlocutor.interlocutorList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getInterlocutorList: () => dispatch(getInterlocutorList())
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(InterlocutorListContainer)