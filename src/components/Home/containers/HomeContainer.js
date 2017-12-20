import React from 'react';
import HomeView from '../views/HomeView'

export default class HomeContainer extends React.Component {

  render() {
    return(
      <HomeView
        navigateToActivityList={this.props.navigateToActivityList}
        navigateToTodoList={this.props.navigateToTodoList}
        navigateToActivityAdd={this.props.navigateToActivityAdd}
        navigateToTodoAdd={this.props.navigateToTodoAdd}
        />
    );
  }
}