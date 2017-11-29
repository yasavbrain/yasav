import React from 'react';
import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');
import ActivityAddView from '../views/ActivityAddView';

export default class ActivityAddContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: "",
      description: "",
      date: moment()
    }
  }

  render() {

    return(
      <ActivityAddView 
        navigateToTodoAddScreen={this.props.navigateToTodoAddScreen}
        navigateToActivityListScreen={(e) => this.props.navigateToActivityListScreen({ newElement: this.state })}

        setTitle={(title) => this.setState({title})}
        setDescription={(description) => this.setState({description})}
      />
    );
  }
}