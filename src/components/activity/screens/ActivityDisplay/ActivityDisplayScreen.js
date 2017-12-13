import React from 'react';
import ActivityDisplayContainer from './containers/ActivityDisplayContainer';
import I18n from 'yasav/locales/i18n'

export default class ActivityDisplayScreen extends React.Component {

  render() {
    let { state } = this.props.navigation;

    return (
      <ActivityDisplayContainer stateParams={state.params} />
    )
  }
}

ActivityDisplayScreen.navigationOptions = () => ({
  title: I18n.t('activity.activityDisplayScreen.title')
})
