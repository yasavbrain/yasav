import React from 'react';
import ActivityAddContainer from './containers/ActivityAddContainer';
import I18n from 'yasav/locales/i18n'


export default class ActivityAddScreen extends React.Component {
  render() {
    const { goBack } = this.props.navigation;

    return(
      <ActivityAddContainer
        goBackToActivityListScreen={() => goBack()}
      />
    );
  }
}
ActivityAddScreen.navigationOptions = () => ({
  title: I18n.t('activity.activityAddScreen.title')
})
