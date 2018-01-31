import React from 'react';
import I18n from 'yasav/locales/i18n';
import HomeContainer from './containers/HomeContainer';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.navigateToActivityList = this.navigateToActivityList.bind(this);
    this.navigateToTodoList = this.navigateToTodoList.bind(this);
    this.navigateToActivityAdd = this.navigateToActivityAdd.bind(this);
    this.navigateToTodoAdd = this.navigateToTodoAdd.bind(this);
    this.navigateToInterlocutorList = this.navigateToInterlocutorList.bind(this);
  }

  navigateToActivityList() {
    this.props.navigation.navigate('ActivityListScreen');
  }

  navigateToTodoList() {
    this.props.navigation.navigate('TodoListScreen');
  }

  navigateToActivityAdd() {
    this.props.navigation.navigate('ActivityAddScreen');
  }

  navigateToTodoAdd() {
    this.props.navigation.navigate('TodoAddScreen');
  }

  navigateToInterlocutorList() {
    this.props.navigation.navigate('InterlocutorListScreen');
  }

  render() {
    return (
      <HomeContainer
        navigateToActivityList={this.navigateToActivityList}
        navigateToTodoList={this.navigateToTodoList}
        navigateToActivityAdd={this.navigateToActivityAdd}
        navigateToTodoAdd={this.navigateToTodoAdd}
        navigateToInterlocutorList={this.navigateToInterlocutorList}
      />
    );
  }
}
