import React from 'react';
import I18n from 'yasav/locales/i18n';
import TodoAddContainer from './containers/TodoAddContainer';

export default class TodoAddScreen extends React.Component {

  // FIXME : Here the parameters from the navigation are called navParams
  // but in ActivityDisplayScreen this is called stateParams
  // FIXME : Here we removed the function goBack for just one screen_id
  // So if we fullfill activity, then fullfill corresponding todo but Not
  // validate it and just goBack --> we got an error.
  // I think we might need two different goBack functions here.
  render() {
    return(
      <TodoAddContainer
        goBackToPreviousScreen={(screenId) => this.props.navigation.goBack(screenId)}
        navParams={this.props.navigation.state.params}
      />
    );
  }
}
