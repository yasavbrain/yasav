import React from 'react';
import { View, Button } from 'react-native';

export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Welcome'
    };

    render() {

        const { navigate } = this.props.navigation

        return(
            <View>
                <Button
                    title="Liste d'activités"
                    onPress={() => navigate('ActivityListScreen')}
                />
                <Button
                    title="Liste de Todos"
                    onPress={() => navigate('TodoListScreen')}
                />
                <Button
                    title="Vue d'une activité"
                    onPress={() => navigate('ActivityViewScreen')}
                />
                <Button
                    title="vue d'un Todo"
                    onPress={() => navigate('TodoViewScreen')}
                />
            </View>

        );
    }
}
