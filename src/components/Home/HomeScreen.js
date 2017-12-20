import React from 'react';
import I18n from 'yasav/locales/i18n'
import HomeContainer from './containers/HomeContainer'

export default class HomeScreen extends React.Component {

  render() {

    const { navigate } = this.props.navigation;

    return(
      <HomeContainer
        navigateToActivityList={() => navigate('ActivityListScreen')}
        navigateToTodoList={() => navigate('TodoListScreen')}
        navigateToActivityAdd={() => navigate('ActivityAddScreen')}
        navigateToTodoAdd={() => navigate('TodoAddScreen')}
      />
    );
  }
}

HomeScreen.navigationOptions = () => ({
  title: I18n.t('homeScreen.title'),
})
