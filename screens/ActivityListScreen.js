import React from 'react';
import { Content, Button, Text } from 'native-base';
import { View, ListView } from 'react-native';
import ActivityAdd from './ActivityAddScreen';

export default class ActivityListScreen extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            activityList: [ { title: "lol", content: "pascontent"} ],
            adding: false
        }
        this.addElementToList = this.addElementToList.bind(this);


    }

    addElementToList (e) {
        let activities = this.state.activityList;
        activities.push(e)
       
        this.setState( { activityList: activities, adding: false });
    }

    render() {
        const { navigate } = this.props.navigation;
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        if(this.state.adding){
            return <ActivityAdd callback={this.addElementToList}/>
        }else{
            return(
                <View>
                    <ListView dataSource={ds.cloneWithRows(this.state.activityList)} 
                renderRow={(row, j, k) => <Text node={row} index={parseInt(k,10)}>{row.title} </Text> } />
                    <Button primary onPress={() => navigate('ActivityViewScreen')}>
                            <Text>Voir une activité</Text>
                    </Button>

                    <Button full primary onPress={() => this.setState({adding: true})}><Text>Ajouter une activité</Text></Button>
                </View>
            );
        }

    }
}

 ActivityListScreen.navigationOptions = () => ({
   title: 'Activités'
})
