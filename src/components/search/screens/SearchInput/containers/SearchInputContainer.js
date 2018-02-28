import React from 'react';
import { connect } from 'react-redux';
import { getInterlocutorFromRequest } from '../actions';
import SearchInputView from '../views/SearchInputView';

export class SearchInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.doSearch = this.doSearch.bind(this);
  }
  
  doSearch(request) {
    if (this.props.requestType == "interlocutor") {
      this.props.getInterlocutorFromRequest(request)
      //console.log(this.props.interlocutorFromRequest)
    }
  }
  
  render() {
    return (
      <SearchInputView
        doSearch={this.doSearch}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    interlocutorFromRequest: state.search.interlocutorFromRequest,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getInterlocutorFromRequest: request => dispatch(getInterlocutorFromRequest(request)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInputContainer);