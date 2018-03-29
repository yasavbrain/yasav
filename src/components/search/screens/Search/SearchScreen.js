import React from 'react';
import { GenericHeader } from 'yasav/src/viewElements/shared/Header';
import SearchContainer from './containers/SearchContainer'

export default class SearchScreen extends React.Component{

    constructor(props) {
      super(props);
      this.navigateToDisplayScreen = this.navigateToDisplayScreen.bind(this);
    }
    
    navigateToDisplayScreen(item) {
      if (item.activity) {
        this.props.navigation.navigate('ActivityDisplayScreen', item.activity.id)
      }
      else if (item.interlocutor) {
        this.props.navigation.navigate('InterlocutorDisplayScreen', item.interlocutor);
      }
    }
    
    render () {
      const { goBack, state } = this.props.navigation
      return (
        <SearchContainer
        goBack = {this.props.navigation.goBack}
        requestType = {this.props.navigation.state.params}
        navigateToDisplayScreen = {this.navigateToDisplayScreen}
        />

      );
    }
}

