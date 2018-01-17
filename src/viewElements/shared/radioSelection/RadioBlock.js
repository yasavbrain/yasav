import React from 'react';

import { ListItem, Text } from 'native-base';

import Style from 'yasav/src/styles/Shared'

/**
 * Header Component with NativeBase design that contains an arrow to go back
 * one screen and a title.
 * Props :
 * - title : String
 * - goBack : Callback that must be navigation.goBack() from the Navigator
 */
export class RadioBlock extends React.Component {
  render() {
    if(this.props.selected){
      return (
        <ListItem style={Style.radioBlockSelected} onPress={this.props.onPress}>
          <Text style={Style.radioBlockText}>{this.props.title}</Text>
        </ListItem>
      )
    }else{
      return (
        <ListItem style={Style.radioBlockUnselected} onPress={this.props.onPress}>
          <Text style={Style.radioBlockText}>{this.props.title}</Text>
        </ListItem>
      )
    }
  }
}
