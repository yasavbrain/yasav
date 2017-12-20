import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');

import ActivityAddView from '../views/ActivityAddView';
import { addActivity } from '../actions/index';


class ActivityAddContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: "",
      description: "",
      date: moment(),
      key: this.props.lastID + 1
    }
    this.addActivity = this.addActivity.bind(this)
  }

  addActivity() {
    this.props.addActivity(this.state)
    this.props.goBack()
  }

  render() {
    return(
      <ActivityAddView
        goBack={this.props.goBack}
        navigateToTodoAddScreen={this.props.navigateToTodoAddScreen}
        addActivity={this.addActivity}
        setTitle={(title) => this.setState({title})}
        setDescription={(description) => this.setState({description})}
      />
    );
  }
}


function mapStateToProps(state) {
  return {
    lastID: state.activity.lastID
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addActivity: (activity) => dispatch(addActivity(activity))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityAddContainer)
