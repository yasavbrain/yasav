import React from 'react';
import { connect } from 'react-redux';
import { getInterlocutorListFromRequest } from 'yasav/src/components/interlocutor/screens/InterlocutorList/actions/index';
import { getActivityListFromRequest } from 'yasav/src/components/activity/screens/ActivityList/actions/index';
import SearchInputCommonView from '../views/SearchInputCommonView';
import SearchInputHomeView from '../views/SearchInputHomeView';
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
    if (this.props.requestType == SearchType.INTERLOCUTOR_ACTIVITY) {
      this.props.getActivityListFromRequest(request)
      this.props.getInterlocutorListFromRequest(request)
    }
  }
  
  render() {
    if (this.props.requestType == SearchType.INTERLOCUTOR_ACTIVITY) {
      console.log('interlocutor')
      console.log(this.props.interlocutorListFromRequest)
      console.log('activity')
      console.log(this.props.activityListFromRequest)
      return (
        <SearchInputHomeView
          goBack={this.props.goBack}
          doSearch={this.doSearch}
          interlocutorListFromRequest={this.props.interlocutorListFromRequest}
          activityListFromRequest={this.props.activityListFromRequest}
        />
      );
    }
    else {
      return (
        <SearchInputCommonView
          doSearch={this.doSearch}
        />
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    interlocutorListFromRequest: state.search.interlocutorListFromRequest,
    activityListFromRequest: state.search.activityListFromRequest,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getInterlocutorListFromRequest: (request)  => dispatch(getInterlocutorListFromRequest(request)),
    getActivityListFromRequest: (request)  => dispatch(getActivityListFromRequest(request))
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchInputContainer);