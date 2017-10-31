import React from 'react';
import { Text } from 'react-native';

export default class ActivityViewScreen extends React.Component {

    render() {
        return(
            <Text>ActivityViewScreen</Text>
        );
    }
}

ActivityViewScreen.navigationOptions = () => ({
  title: 'ActivityViewScreen Title'
})
