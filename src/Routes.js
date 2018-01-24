import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './components/Home/HomeScreen';
import ActivityListScreen from './components/activity/screens/ActivityList/ActivityListScreen';
import ActivityDisplayScreen from './components/activity/screens/ActivityDisplay/ActivityDisplayScreen';
import ActivityAddScreen from './components/activity/screens/ActivityAdd/ActivityAddScreen';
import TodoListScreen from './components/todo/screens/TodoList/TodoListScreen';
import TodoAddScreen from './components/todo/screens/TodoAdd/TodoAddScreen';
import InterlocutorListScreen from './components/interlocutor/screens/InterlocutorList/InterlocutorListScreen';

const Routes = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  ActivityListScreen: { screen: ActivityListScreen },
  ActivityDisplayScreen: { screen: ActivityDisplayScreen },
  ActivityAddScreen: { screen: ActivityAddScreen },
  TodoListScreen: { screen: TodoListScreen },
  TodoAddScreen: { screen: TodoAddScreen },
  InterlocutorListScreen: { screen: InterlocutorListScreen }
}, {
  headerMode: 'none',
});

export default Routes
