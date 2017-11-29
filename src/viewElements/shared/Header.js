import React from 'react';

import { Container, Header, Content, Button, Left, Icon, Body,
  Title, Right } from 'native-base';

export default class CustomHeader extends React.Component {

  render() {

    const { navigation, title } = this.props;

    return(
      <Header>
        {navigation.state.routeName === 'HomeScreen' ?
          <Container />
        :
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
        }

        <Body>
          <Title>{title}</Title>
        </Body>
        <Right />
      </Header>
    )
  }
}
