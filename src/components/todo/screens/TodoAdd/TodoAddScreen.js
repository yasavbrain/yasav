import React from 'react';
import I18n from 'yasav/locales/i18n';
import TodoAddContainer from './containers/TodoAddContainer';

export default class TodoAddScreen extends React.Component {

  render() {
    return(
      <TodoAddContainer
        goBack={this.props.navigation.goBack}
      />
    );
  }
}
