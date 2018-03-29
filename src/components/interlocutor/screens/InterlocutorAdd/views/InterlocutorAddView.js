import React from 'react';
import { Form, ListItem, Item, Input, Label, Text } from 'native-base';
import { FlatList } from 'react-native';
import Style from 'src/styles/Forms';

import I18n from 'yasav/locales/i18n';

export default class InterlocutorAddView extends React.Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.renderLinkToMe = this.renderLinkToMe.bind(this);
    this.state = { selectedInput: '' };
  }

  renderItem({ item }) {
    return (
      <ListItem
        style={{ height: 30, backgroundColor: 0 }}
        onPress={() => this.props.selectInterlocutor(item)}
      >
        <Text>{item.name}</Text>
      </ListItem>
    );
  }

  renderLinkToMe() {
    // display this only if we do not know the interlocutor and then we need to
    // create another one
    if (this.props.interlocutorListAutocomplete && this.props.interlocutorListAutocomplete.length === 0) {
      return (
        <Item floatingLabel style={this.state.selectedInput === 'linkToMe' ? Style.inputWrapperSelected : Style.inputWrapper}>
          <Label>{I18n.t('interlocutor.interlocutorAdd.linkToMe')}</Label>
          <Input
            onChangeText={linkToMe => this.props.setLinkToMe(linkToMe)}
            onFocus={() => this.setState({ selectedInput: 'linkToMe' })}
            onBlur={() => this.setState({ selectedInput: '' })}
          />
        </Item>
      );
    }
    return null;
  }

  render() {
    return (
      <Form>
        <Item floatingLabel style={this.state.selectedInput === 'name' ? Style.inputWrapperSelected : Style.inputWrapper}>
          <Label>{I18n.t('interlocutor.interlocutorAdd.name')}</Label>
          <Input
            onChangeText={name => this.props.setName(name)}
            value={this.props.name}
            onFocus={() => this.setState({ selectedInput: 'name' })}
            onBlur={() => this.setState({ selectedInput: '' })}
          />
        </Item>
        <FlatList
          data={(this.props.displayInterlocutorListAutocomplete) ? this.props.interlocutorListAutocomplete : []}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
        {this.renderLinkToMe()}
      </Form>
    );
  }
}
