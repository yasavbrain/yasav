import React from 'react';
import I18n from 'yasav/locales/i18n';
import TodoAddContainer from './containers/TodoAddContainer';

export default class TodoAddScreen extends React.Component {

  render() {
    const { goBack } = this.props.navigation;
    return(
      <TodoAddContainer 
        goBackToTodoListScreen={() => goBack()}
      />    
    );
  }
}

 TodoAddScreen.navigationOptions = () => ({
   title: I18n.t('todo.todoAddScreen.title')
})
