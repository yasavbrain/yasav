import React from 'react';
import { Text, Form, Item, Input, Label, Textarea, Button, Content } from 'native-base';
import { View, TextInput } from 'react-native';
import Style from '../styles/style.js';

export default class ActivityAddContainer extends React.Component {
  render() {

    return(
      <Form>
        <Item floatingLabel>
          <Label>Titre</Label>
          <Input onChangeText={(title) => this.props.setTitle(title)} />
        </Item>
        <Item floatingLabel>
          <Label>Contenu</Label>
          <Input 
            onChangeText={(description) => this.props.setDescription(description)}
            multiline
            blurOnSubmit={false}
            numberOfLines={5}
            returnKeyType='none'
            style={Style.textarea}
            
          />
        </Item>
        <Button primary full onPress={() => this.props.navigateToActivityListScreen()}>
          <Text>Ajouter l'activité</Text>
        </Button>

        <Content>
        <Button primary onPress={() => this.props.navigateToTodoAddScreen()}>
          <Text>Ajouter un todo correspondant</Text>
        </Button>
        <Text>En tant quutilisateur, je veux créer une activité générique
          qui contient un contenu et un titre</Text>
      </Content>
      </Form>
    );
  }
}