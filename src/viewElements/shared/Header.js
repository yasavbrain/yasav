import React from 'react';

import { Header, Button, Right, Left, Icon, Body, Title } from 'native-base';

/**
 * Header Component with NativeBase design that contains an arrow to go back
 * one screen and a title.
 * Props :
 * - title : String
 * - goBack : Callback that must be navigation.goBack() from the Navigator
 */
export class GenericHeader extends React.Component {

  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.goBack();
  }

  render() {
    return (
      <Header>
        <Left>
          <Button transparent onPress={this.goBack}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

/**
 * Header Component with NativeBase design that contains only a title.
 * Props :
 * - title : String
 */
export class SimpleHeader extends React.Component {

  render() {
    return (
      <Header>
        <Left />
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}
