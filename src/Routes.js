import React from 'react';
import { StackNavigator, TabNavigator, TabBarTop } from 'react-navigation';

import { Platform, StatusBar } from 'react-native';

import Colors from 'yasav/src/styles/Colors';
import Styles from 'yasav/src/styles/Header'
import I18n from 'yasav/locales/i18n';
import { HomeHeader } from 'yasav/src/viewElements/shared/Header';

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
import SearchScreen from './components/search/screens/Search/SearchScreen';
import GraphActivityDisplayScreen from './components/graph/screens/GraphActivityDisplay/GraphActivityDisplayScreen';

/*
const TodoStack = StackNavigator({
  TodoListScreen: { screen: TodoListScreen },
}, {
  headerMode: 'none',
});*/

const TabNav = TabNavigator(
  {
    TodosTab: {
      screen: TodoListScreen,
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
    navigationOptions: ({ navigation }) => ({
      header: <HomeHeader
        title={I18n.t('home.title')}
        navigateToGraphTagDisplay={() => {
            navigation.navigate('GraphTagDisplayScreen');
          }}
        navigateToSearchScreen={(type) => {
          navigation.navigate('SearchScreen',type)
        }}
      />,
    }),
  },
  ActivityAddScreen: {
    screen: ActivityAddScreen,
    navigationOptions: {
      header: null,
    },
  },
  ActivityEditScreen: {
    screen: ActivityEditScreen,
    navigationOptions: {
      header: null,
    },
  },
  ActivityDisplayScreen: {
    screen: ActivityDisplayScreen,
    navigationOptions: {
      header: null,
    },
  },
  InterlocutorListScreen: {
    screen: InterlocutorListScreen,
    navigationOptions: {
      header: null,
    },
  },
  InterlocutorDisplayScreen: {
    screen: InterlocutorDisplayScreen,
    navigationOptions: {
      header: null,
    },
  },
  GraphTagDisplayScreen: {
    screen: GraphTagDisplayScreen,
    navigationOptions: {
      header: null,
    },
  },
  TodoAddScreen: { 
    screen: TodoAddScreen,
    navigationOptions: {
      header: null,
    },
  },
  SearchScreen: {
    screen: SearchScreen,
    navigationOptions: {
      header: null,
    },
  },
  GraphActivityDisplayScreen: {
    screen: GraphActivityDisplayScreen,
    navigationOptions: {
      header: null,
    },
  },
}, {
  headerMode: 'screen',
  cardStyle: {
    paddingTop: Platform.OS === 'ios' || Platform.Version > 20 ? 0 : StatusBar.currentHeight,
  },
});

export default Routes;
