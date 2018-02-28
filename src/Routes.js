import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import { Platform, StatusBar } from 'react-native';

import HomeScreen from './components/Home/HomeScreen';
import ActivityListScreen from './components/activity/screens/ActivityList/ActivityListScreen';
import ActivityDisplayScreen from './components/activity/screens/ActivityDisplay/ActivityDisplayScreen';
import ActivityAddScreen from './components/activity/screens/ActivityAddEdit/ActivityAddScreen';
import ActivityEditScreen from './components/activity/screens/ActivityAddEdit/ActivityEditScreen';
import TodoListScreen from './components/todo/screens/TodoList/TodoListScreen';
import TodoAddScreen from './components/todo/screens/TodoAdd/TodoAddScreen';
import InterlocutorListScreen from './components/interlocutor/screens/InterlocutorList/InterlocutorListScreen';
import InterlocutorDisplayScreen from './components/interlocutor/screens/InterlocutorDisplay/InterlocutorDisplayScreen';

const OldRoutes = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  ActivityListScreen: { screen: ActivityListScreen },
  ActivityDisplayScreen: { screen: ActivityDisplayScreen },
  ActivityAddScreen: { screen: ActivityAddScreen },
  ActivityEditScreen: { screen: ActivityEditScreen },
  TodoListScreen: { screen: TodoListScreen },
  TodoAddScreen: { screen: TodoAddScreen },
  InterlocutorListScreen: { screen: InterlocutorListScreen },
  InterlocutorDisplayScreen: { screen: InterlocutorDisplayScreen },
}, {
  headerMode: 'none',
  cardStyle: {
    paddingTop: Platform.OS === 'ios' || Platform.Version > 20 ? 0 : StatusBar.currentHeight,
  },

});

const TodoStack = StackNavigator({
  TodoListScreen: { screen: TodoListScreen },
  TodoAddScreen: { screen: TodoAddScreen },
}, {
  headerMode: 'none',
});

const HomeStack = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  ActivityAddScreen: { screen: ActivityAddScreen },
  ActivityEditScreen: { screen: ActivityEditScreen },
}, {
  headerMode: 'none',
});

const ActivityStack = StackNavigator({
  ActivityListScreen: { screen: ActivityListScreen },
  ActivityDisplayScreen: { screen: ActivityDisplayScreen },
  InterlocutorListScreen: { screen: InterlocutorListScreen },
  InterlocutorDisplayScreen: { screen: InterlocutorDisplayScreen },
}, {
  headerMode: 'none',
});

const Routes = TabNavigator(
{
  TodosTab: { screen: TodoStack },
  HomeTab: { screen: HomeStack },
  ActivityTab: { screen: ActivityStack },
},
{
  headerMode: 'none',
  cardStyle: {
    paddingTop: Platform.OS === 'ios' || Platform.Version > 20 ? 0 : StatusBar.currentHeight,
  },
},
);

export default Routes;

