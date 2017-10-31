import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import ActivityListScreen from './screens/ActivityListScreen';
import TodoListScreen from './screens/TodoListScreen';
import ActivityViewScreen from './screens/ActivityViewScreen';
import TodoViewScreen from './screens/TodoViewScreen';

const App = StackNavigator({
    HomeScreen: { screen: HomeScreen },
    ActivityListScreen: { screen: ActivityListScreen },
    TodoListScreen: { screen: TodoListScreen },
    ActivityViewScreen: { screen: ActivityViewScreen },
    TodoViewScreen: { screen: TodoViewScreen },
});

export default App
