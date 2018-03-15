import React from 'react';
import { Header, Item, Icon, Input, Button, Text, Container, Content, ListItem, List, View } from 'native-base';
import { FlatList } from 'react-native';
import I18n from 'yasav/locales/i18n';
import StyleList from 'yasav/src/styles/List'
import { ActivityTypeEnum } from 'yasav/src/const';

export default class ListView extends React.Component {  

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }

  i = 0

  componentWillUpdate(){
    this.i = 0
  }
    
  shortenedDescription(description){
    i = 120
    if(description.length <= i){
      return description
    }
    while(description.substring(i, i+1) != ' '){
      i -= 1
    }
    return description.substring(0, i) + "..."
  }
  // TODO : Find a way to remove that arrow function in the render
  renderRow(item) {
    this.i = this.i + 1
    console.log(item)
      return (
        <ListItem
          style={[StyleList.listItemGeneric, (this.i%2 == 0)? StyleList.listItemEven: StyleList.listItemOdd]}
          onPress={() => this.props.navigateToDisplayScreen((item.activity) ? item : item)}
        >
          <View style={StyleList.containerHeadText}>
            <Icon style={StyleList.listItemIcon} name={(item.activity)? ((item.activity.type == ActivityTypeEnum.CONTENT)? "book":((item.activity.type == ActivityTypeEnum.MEETING)? "person":"calendar")) : "person"} />
            <View>
              <Text style={StyleList.listItemTitle}>{(item.activity)? item.activity.title: item.interlocutor.name}</Text>
              <Text style={StyleList.listItemDescription}>{ this.shortenedDescription((item.activity)? item.activity.description: item.interlocutor.link_to_me)}</Text>
            </View>
          </View>
        </ListItem>
      );
  }
  
  render() {
    return (
        <Content>
          <List
            style={StyleList.list}
            dataArray={this.props.displayList}
            renderRow={this.renderRow}
          />
        </Content>
    );
  }
}