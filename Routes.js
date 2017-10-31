import React from 'react';
import { StackNavigator } from 'react-navigation';

import CustomHeader from './Header';
import HomeScreen from './screens/HomeScreen';
import ActivityListScreen from './screens/ActivityListScreen';
import ActivityViewScreen from './screens/ActivityViewScreen';
import ActivityAddScreen from './screens/ActivityAddScreen';
import TodoListScreen from './screens/TodoListScreen';
import TodoAddScreen from './screens/TodoAddScreen';

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
