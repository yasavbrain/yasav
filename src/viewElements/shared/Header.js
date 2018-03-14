import React from 'react';

import { Header, Button, Right, Left, Icon, Body, Title, Item, Input, Text, Content } from 'native-base';
import Style from 'yasav/src/styles/Header';

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
 * Header Component with NativeBase design that contains an arrow to go back
 * one screen, a title and a menu on the rigth
 * Props :
 * - title : String
 * - goBack : Callback that must be navigation.goBack() from the Navigator
 * - menu : Component that will be rendered on the right
 */
export class MenuHeader extends React.Component {
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
        <Right>
          {this.props.menu}
        </Right>
      </Header>
    );
  }
}

/**
 * Home Header Component with NativeBase design that a title and a menu on the rigth
 * Props :
 * - title : String
 * - navigateToGraphTagDisplay : Callback to navigate to graph display screen
 */
export class HomeHeader extends React.Component {
  constructor(props) {
    super(props);
    this.navigateToGraphTagDisplay = this.navigateToGraphTagDisplay.bind(this);
  }

  navigateToGraphTagDisplay() {
    this.props.navigateToGraphTagDisplay();
  }

  render() {
    return (
      <Header style={Style.simpleHeader}>
        <Left />
        <Body>
          <Title style={Style.simpleHeaderTitle}>{this.props.title}</Title>
        </Body>
        <Right>
          <Button onPress={this.navigateToGraphTagDisplay} transparent>
            <Icon name="git-network" />
          </Button>
        </Right>
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
      <Header style={Style.simpleHeader} >
        <Left />
        <Body>
          <Title style={Style.simpleHeaderTitle}>{this.props.title}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}