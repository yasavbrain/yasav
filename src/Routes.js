import React from 'react';
import { StackNavigator } from 'react-navigation';

import CustomHeader from './viewElements/shared/Header';
import HomeScreen from './screens/Home/HomeScreen';
import ActivityListScreen from './screens/ActivityList/ActivityListScreen';
import ActivityViewScreen from './screens/ActivityView/ActivityViewScreen';
import ActivityAddScreen from './screens/ActivityAdd/ActivityAddScreen';
import TodoListScreen from './screens/TodoList/TodoListScreen';
import TodoAddScreen from './screens/TodoAdd/TodoAddScreen';

const Routes = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  ActivityListScreen: { screen: ActivityListScreen },
  ActivityViewScreen: { screen: ActivityViewScreen },
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
