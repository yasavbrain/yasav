import React from 'react';
import { connect } from 'react-redux';
import { getInterlocutorListFromRequest } from 'yasav/src/components/interlocutor/screens/InterlocutorList/actions/index';
import { getActivityListFromRequest } from 'yasav/src/components/activity/screens/ActivityList/actions/index';
import SearchCommonView from '../views/SearchCommonView';
import GlobalSearchView from '../views/GlobalSearchView';
import { SearchType } from 'yasav/src/const';

export class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.doSearch = this.doSearch.bind(this);
    this.state = { enableHomeSearch: false }
  }

  doSearch(request) {
    if (this.props.requestType == SearchType.INTERLOCUTOR) { 
      if (request.length > 0) {
        this.props.getInterlocutorListFromRequest(request)
        this.props.modifySearchInterlocutor(true)
      }
      else {
        this.props.modifySearchInterlocutor(false) //If request == 0, it means that the search is not enabled. 
      }
    }
    if (this.props.requestType == SearchType.ACTIVITY) {
      if (request.length > 0) {
        this.props.getActivityListFromRequest(request)
        this.props.modifySearchActivity(true)
      }
      else {
        this.props.modifySearchActivity(false)
      }
    }
    if (this.props.requestType == SearchType.INTERLOCUTOR_ACTIVITY) {
      if (request.length > 0) {
        this.props.getActivityListFromRequest(request)
        this.props.getInterlocutorListFromRequest(request)
        this.setState({enableHomeSearch:true})
      }
      else {
        this.setState({enableHomeSearch:false})
      }
    }
  }
  
  render() {
    if (this.props.requestType == SearchType.INTERLOCUTOR_ACTIVITY) {
      if (this.state.enableHomeSearch) {
        requestResult = this.props.interlocutorListFromRequest.concat(this.props.activityListFromRequest)
      }
      else {
        requestResult = []
      }
      return (
        <GlobalSearchView
          goBack={this.props.goBack}
          doSearch={this.doSearch}
          requestResult={requestResult}
          navigateToDisplayScreen={this.props.navigateToDisplayScreen}
        />
      );
    }
    else {
      return (
        <SearchCommonView
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

export default connect(mapStateToProps,mapDispatchToProps)(SearchContainer);