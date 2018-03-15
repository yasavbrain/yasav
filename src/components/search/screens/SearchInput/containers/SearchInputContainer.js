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
    this.state = { enableHomeSearch: 0 }
  }

  doSearch(request) {
    if (this.props.requestType == SearchType.INTERLOCUTOR) {
      this.props.getInterlocutorListFromRequest(request)
      if (request.length > 0) {
        this.props.enableSearchInterlocutor(1)
      }
      else {
        this.props.enableSearchInterlocutor(0)
      }
    }
    if (this.props.requestType == SearchType.ACTIVITY) {
      this.props.getActivityListFromRequest(request)
      if (request.length > 0) {
        this.props.enableSearchActivity(1)
      }
      else {
        this.props.enableSearchActivity(0)
      }
    }
    if (this.props.requestType == SearchType.INTERLOCUTOR_ACTIVITY) {
      if (request.length > 0) {
        this.props.getActivityListFromRequest(request)
        this.props.getInterlocutorListFromRequest(request)
        this.setState({enableHomeSearch:1})
      }
      else {
        this.setState({enableHomeSearch:0})
      }
    }
  }
  
  render() {
    if (this.props.requestType == SearchType.INTERLOCUTOR_ACTIVITY) {
      if (this.state.enableHomeSearch == 1) {
        requestResult = this.props.interlocutorListFromRequest.concat(this.props.activityListFromRequest)
      }
      else {
        requestResult = []
      }
      return (
        <SearchInputHomeView
          goBack={this.props.goBack}
          doSearch={this.doSearch}
          requestResult={requestResult}
          navigateToDisplayScreen={this.props.navigateToDisplayScreen}
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