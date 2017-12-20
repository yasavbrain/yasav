import React from 'react';
import ActivityAddContainer from './containers/ActivityAddContainer';
import I18n from 'yasav/locales/i18n'


export default class ActivityAddScreen extends React.Component {
  render() {
    const { goBack, navigate } = this.props.navigation;

    return(
      <ActivityAddContainer
        goBackToActivityListScreen={() => goBack()}
        goToAddTodo={(activityId) => navigate("TodoAddScreen", {activity_id: activityId, screen_id: this.props.navigation.state.key})}
      />
    );
  }
}
ActivityAddScreen.navigationOptions = () => ({
  title: I18n.t('activity.activityAddScreen.title')
})
