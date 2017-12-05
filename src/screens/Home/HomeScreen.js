import React from 'react';
import HomeContainer from 'src/screens/Home/containers/HomeContainer'

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
  title: 'Yasav',
})
