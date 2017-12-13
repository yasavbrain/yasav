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
      date: moment()
    }
    this.addActivity = this.addActivity.bind(this)
  }

  addActivity(activity) {
    this.props.addActivity(activity)
    this.props.goBackToActivityListScreen()
  }

  render() {
    return(
      <ActivityAddView
        addActivity={this.addActivity}
        setTitle={(title) => this.setState({title})}
        setDescription={(description) => this.setState({description})}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addActivity: (activity) => dispatch(addActivity(activity))
  }
}

export default connect(null, mapDispatchToProps)(ActivityAddContainer)
