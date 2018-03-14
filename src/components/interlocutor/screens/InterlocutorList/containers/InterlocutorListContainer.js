import React from 'react';
import { connect } from 'react-redux';
import { getInterlocutorList } from '../actions';
import InterlocutorListView from '../views/InterlocutorListView';

class InterlocutorListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchActive: 0 };
    this.updateInterlocutorListView = this.updateInterlocutorListView.bind(this);
  }

  componentDidMount() {
    this.props.getInterlocutorList();
  }

  enableSearch() {
    this.setState({ searchActive: 1 });
  }

  render() {
    if (this.state.searchActive == 0) {
      var interlocutorList = this.props.interlocutorListAll;
    } else if (this.state.searchActive == 1) {
      var interlocutorList = this.props.interlocutorListFromRequest;
    }
    return (
      <InterlocutorListView
        goBack={this.props.goBack}
        displayInterlocutorList={interlocutorList}
        navigateToInterlocutorDisplayScreen={this.props.navigateToInterlocutorDisplayScreen}
        enableSearch={this.enableSearch}
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
