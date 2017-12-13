import React from 'react';
import ActivityAddContainer from './containers/ActivityAddContainer';


export default class ActivityAddScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return(
      <ActivityAddContainer
        navigateToTodoAddScreen={() => navigate('TodoAddScreen')}
        navigateToActivityListScreen={() => navigate("ActivityListScreen")}
      />
    );
  }
}
ActivityAddScreen.navigationOptions = () => ({
  title: 'Ajouter une activité'
})
