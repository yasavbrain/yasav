import React from 'react';

<<<<<<< HEAD
import { Header, Button, Right, Left, Icon, Body, Title } from 'native-base';
import Style from 'yasav/src/styles/Header';
=======
import { Header, Button, Right, Left, Icon, Body, Title, Item, Input, Text, Content } from 'native-base';
>>>>>>> Added the display of search bar input

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

/**
 * Header Component with NativeBase design that contains a search bar
 */
export class SearchHeader extends React.Component {
  
    render() {
      return (
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      );
    }
  }