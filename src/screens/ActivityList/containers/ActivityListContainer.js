import React from 'react';
import ActivityListView from '../views/ActivityListView'

export default class ActivityListContainer extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            //Get the status of ActivityList when Redux will be implemented
            activityList: []
        }
    }



    render() {

        return(
            <ActivityListView
            navigateToActivityAddScreen = {() => this.props.navigateToActivityAddScreen }
            navigateToActivityListScreen = {(e) => this.props.navigateToActivityListScreen({activity: e}) }
            displayActivityList = {this.state.activityList}
            />
        );

    }
}
