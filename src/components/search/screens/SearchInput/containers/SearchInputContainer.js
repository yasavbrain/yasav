import React from 'react';
import { connect } from 'react-redux';
import { getInterlocutorListFromRequest } from 'yasav/src/components/interlocutor/screens/InterlocutorList/actions/index';
import { getActivityListFromRequest } from 'yasav/src/components/activity/screens/ActivityList/actions/index';
import SearchInputView from '../views/SearchInputView';
import { SearchType } from 'yasav/src/const';

export class SearchInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.doSearch = this.doSearch.bind(this);
  }

  doSearch(request) {
    if (this.props.requestType == SearchType.INTERLOCUTOR) {
      this.props.getInterlocutorListFromRequest(request)
      this.props.enableSearchInterlocutor()
    }
    if (this.props.requestType == SearchType.ACTIVITY) {
      this.props.getActivityListFromRequest(request)
      this.props.enableSearchActivity()
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

function mapDispatchToProps(dispatch) {
  return {
    getInterlocutorListFromRequest: (request)  => dispatch(getInterlocutorListFromRequest(request)),
    getActivityListFromRequest: (request)  => dispatch(getActivityListFromRequest(request))
  };
}

export default connect(null,mapDispatchToProps)(SearchInputContainer);