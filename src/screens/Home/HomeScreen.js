import React from 'react';
import HomeContainer from 'src/screens/Home/containers/HomeContainer'
import I18n from 'yasav/locales/i18n'

export default class HomeScreen extends React.Component {

  render() {

    const { navigate } = this.props.navigation;

    return(
      <HomeContainer
        navigateToActivityList={() => navigate('ActivityListScreen')}
        navigateToTodoList={() => navigate('TodoListScreen')}
        navigateToActivityAdd={() => navigate('ActivityAddScreen')}
      />
    );
  }
}

HomeScreen.navigationOptions = () => ({
  title: I18n.t('homeScreen.title'),
})
