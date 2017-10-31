import React from 'react';
import Style from './Styles/Main.js';
import { Container, Header, Content, Button, Text, Left, Body, Right, Icon, Title } from 'native-base';


export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ fontLoaded: true });    
  }

  render() {
    if(this.state.fontLoaded){
      return (
        <Container>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Header</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Right>
          </Header>
          <Content>
            <Text style={Style.home.alex}>Alexandre, t'es gentil</Text>
            <Button primary><Text> Primary </Text></Button>
          </Content>
        </Container>
      );
    }else{
      return null;
    }
  }
}

