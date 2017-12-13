import React from 'react';
import { StackNavigator } from 'react-navigation';

import CustomHeader from './viewElements/shared/Header';
import HomeScreen from './screens/Home/HomeScreen';
import ActivityListScreen from './screens/ActivityList/ActivityListScreen';
import ActivityDisplayScreen from './screens/ActivityDisplay/ActivityDisplayScreen';
import ActivityAddScreen from './screens/ActivityAdd/ActivityAddScreen';
import TodoListScreen from './screens/TodoList/TodoListScreen';
import TodoAddScreen from './screens/TodoAdd/TodoAddScreen';

const Routes = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  ActivityListScreen: { screen: ActivityListScreen },
  ActivityDisplayScreen: { screen: ActivityDisplayScreen },
  ActivityAddScreen: { screen: ActivityAddScreen },
  TodoListScreen: { screen: TodoListScreen },
  TodoAddScreen: { screen: TodoAddScreen },
},
{
  navigationOptions: ({ navigation }) => ({
    header: (headerProps) => {
      // Workaround https://github.com/react-community/react-navigation/issues/1886
      // Used to get the title from the child screen
      const { getScreenDetails, scene } = headerProps
      const details = getScreenDetails(scene)

      return <CustomHeader navigation={navigation} title={details.options.title} />
    }
  })
});

export default Routes
