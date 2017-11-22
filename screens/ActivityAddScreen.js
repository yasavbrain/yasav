import React from 'react';
import { Text, Form, Item, Input, Label, Textarea, Button, Content } from 'native-base';
import { View, TextInput } from 'react-native';
import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');

export default class ActivityAddScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: "",
      description: "",
      date: moment()
    }
  }

  render() {
    const { navigate } = this.props.navigation;

    return(
      <Form>
        <Item floatingLabel>
          <Label>Titre</Label>
          <Input onChangeText={(title) => this.setState({title})} />
        </Item>
        <Item floatingLabel>
          <Label>Contenu</Label>
          <Input 
            onChangeText={(description) => this.setState({description})}
            multiline
            blurOnSubmit={false}
            numberOfLines={5}
            returnKeyType='none'
            style={{
              textAlignVertical: "top",
              height: 200,
              marginTop: 5,
              marginBottom: 10
            }}
            
          />
        </Item>
        <Button primary full onPress={ (e) => navigate("ActivityListScreen", { newElement: this.state })}>
          <Text>Ajouter l'activité</Text>
        </Button>


        <Content>
        <Button primary onPress={() => navigate('TodoAddScreen')}>
          <Text>Ajouter un todo correspondant</Text>
        </Button>
        <Text>En tant quutilisateur, je veux créer une activité générique
          qui contient un contenu et un titre</Text>
      </Content>
      </Form>
    );
  }
}
ActivityAddScreen.navigationOptions = () => ({
  title: 'Ajouter une activité'
})
