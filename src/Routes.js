import React from 'react';
import { StackNavigator, TabNavigator, TabBarTop } from 'react-navigation';

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
import GraphTagDisplayScreen from './components/graph/screens/GraphTagDisplay/GraphTagDisplayScreen';

import Colors from 'yasav/src/styles/Colors';
import Styles from 'yasav/src/styles/Header'
import I18n from 'yasav/locales/i18n';
import { SimpleHeader } from 'yasav/src/viewElements/shared/Header';

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

const TabNav = TabNavigator(
  {
    TodosTab: {
      screen: TodoStack,
      navigationOptions: {
        tabBarLabel: I18n.t('navigation.todoTab'),
      },
    },
    HomeTab: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: I18n.t('navigation.quickAddTab'),
      },
    },
    ActivityTab: {
      screen: ActivityListScreen,
      navigationOptions: {
        tabBarLabel: I18n.t('navigation.activitiesTab'),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.header.active,
      inactiveTintColor: Colors.header.inactive,
      style: {
        backgroundColor: Colors.header.background,
      },
      indicatorStyle: {
        backgroundColor: Colors.header.active,
      },
    },
    swipeEnabled: true,
    tabBarPosition: 'top',
    tabBarComponent: TabBarTop,
    initialRouteName: 'HomeTab',
  },
);

const Routes = StackNavigator({
  Home: {
    screen: TabNav,
    navigationOptions: {
      header: <SimpleHeader title={I18n.t('home.title')} />,
    },
  },
  ActivityAddScreen: {
    screen: ActivityAddScreen,
    navigationOptions: {
      header: null,
      headerStyle: Styles.hiddenHeader,
    },
  },
  ActivityEditScreen: {
    screen: ActivityEditScreen,
    navigationOptions: {
      header: null,
      headerStyle: Styles.hiddenHeader,
    },
  },
  ActivityDisplayScreen: {
    screen: ActivityDisplayScreen,
    navigationOptions: {
      header: null,
      headerStyle: Styles.hiddenHeader,
    },
  },
  InterlocutorListScreen: {
    screen: InterlocutorListScreen,
    navigationOptions: {
      header: null,
      headerStyle: Styles.hiddenHeader,
    },
  },
  InterlocutorDisplayScreen: {
    screen: InterlocutorDisplayScreen,
    navigationOptions: {
      header: null,
      headerStyle: Styles.hiddenHeader,
    },
  },
  GraphTagDisplayScreen: {
    screen: GraphTagDisplayScreen,
    navigationOptions: {
      header: null,
      headerStyle: Styles.hiddenHeader,
    },
  },
}, {
  headerMode: 'screen',
  cardStyle: {
    paddingTop: Platform.OS === 'ios' || Platform.Version > 20 ? 0 : StatusBar.currentHeight,
  },
});

export default Routes;
