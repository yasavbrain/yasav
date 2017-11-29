import React from 'react';
import { Content, Button, Text } from 'native-base';
import { View, ListView } from 'react-native';
import ActivityAdd from '../ActivityAdd/ActivityAddScreen';

export default class ActivityListScreen extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            activityList: []
        }
        this.addElementToList = this.addElementToList.bind(this);
    }

    componentDidMount(){
        const { state } = this.props.navigation;
        if(state.params && state.params.newElement){
            this.addElementToList(state.params.newElement);
        }
    }

    addElementToList (e) {
        // TODO: When redux is here. Save the activitylist in redux (not persisted for now)

        let activities = this.state.activityList;
        activities.push(e);
       
        this.setState( { activityList: activities });
    }

    render() {
        const { navigate } = this.props.navigation;
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        return(
            <View>
                <ListView   
                    dataSource={ds.cloneWithRows(this.state.activityList)} 
                    renderRow={(row, j, k) => 
                        <Text node={row} index={parseInt(k,10)} style={{height: 75, fontSize: 50}}
                            onPress={() => navigate("ActivityViewScreen", {activity: row})}> {row.title} </Text>
                    }
                />
                <Button primary onPress={() => navigate('ActivityViewScreen')}>
                    <Text>Voir une activité</Text>
                </Button>

                <Button full primary onPress={() => navigate("ActivityAddScreen")}>
                    <Text>Ajouter une activité</Text>
                </Button>
            </View>
        );

    }
}

 ActivityListScreen.navigationOptions = () => ({
   title: 'Activités'
})
