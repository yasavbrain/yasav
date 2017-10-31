import React from 'react';
import { Text } from 'react-native';

export default class ActivityListScreen extends React.Component {

    render() {
        return(
            <Text>ActivityListScreen</Text>
        );
    }
}

 ActivityListScreen.navigationOptions = () => ({
   title: 'ActivityListScreen Title'
})
