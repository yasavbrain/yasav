import React from 'react';
import { Container, Content, Text, Form, Item, Input, Label, Button, Badge, Icon, ListItem } from 'native-base';
import { KeyboardAvoidingView, Platform, StatusBar, FlatList } from 'react-native';
import InterlocutorAddContainer from 'yasav/src/components/interlocutor/screens/InterlocutorAdd/containers/InterlocutorAddContainer';

import I18n from 'yasav/locales/i18n';
import Style from '../styles/style.js';
import FormStyle from 'src/styles/Forms';
import HeaderStyle from 'yasav/src/styles/Header';
import { GenericHeader, MenuHeader } from 'yasav/src/viewElements/shared/Header';

import { ActivityTypeEnum } from 'yasav/src/const';

export default class ActivityAddView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selectedInput: '' };

    this.getTitle = this.getTitle.bind(this);
    this.renderSaveButton = this.renderSaveButton.bind(this);
    this.renderTagItem = this.renderTagItem.bind(this);
    this.scrollViewFromTop = this.scrollViewFromTop.bind(this);
  }

  getTitle() {
    let title = '';

    if (this.props.isEdit) {
      title += I18n.t('activity.activityAddEdit.edit');
    } else {
      title += I18n.t('activity.activityAddEdit.add');
    }
    title += ' ';
    if (this.props.activity.type === ActivityTypeEnum.CONTENT) {
      title += I18n.t('activity.activityAddEdit.content');
    } else if (this.props.activity.type === ActivityTypeEnum.EVENT) {
      title += I18n.t('activity.activityAddEdit.event');
    } else if (this.props.activity.type === ActivityTypeEnum.MEETING) {
      title += I18n.t('activity.activityAddEdit.meeting');
    }
    return title;
  }

  renderValidationButtons() {
    if (this.props.isEdit) {
      return null;
    }
    return (
      <Button primary full style={Style.addTodoButton} onPress={this.props.addTodoActivity} disabled={!this.props.isFormValid}>
        <Text>{I18n.t('activity.activityAddEdit.addTodoButton')}</Text>
      </Button>
    );
  }

  renderSaveButton() {
    if (this.props.isEdit) {
      return (
        <Button transparent onPress={this.props.editActivity} disabled={!this.props.isFormValid} style={HeaderStyle.saveButtonRight}>
          <Icon name="md-checkmark" style={this.props.isFormValid ? HeaderStyle.saveButtonRightValid : HeaderStyle.saveButtonRightInvalid} />
        </Button>
      );
    }
    return (
      <Button transparent onPress={this.props.addActivity} disabled={!this.props.isFormValid} style={HeaderStyle.saveButtonRight}>
        <Icon name="md-checkmark" style={this.props.isFormValid ? HeaderStyle.saveButtonRightValid : HeaderStyle.saveButtonRightInvalid} />
      </Button>
    );
  }

  renderSpecificFields() {
    if (this.props.activity.type === ActivityTypeEnum.CONTENT) {
      return (
        <Item floatingLabel style={this.state.selectedInput === 'contentSource' ? FormStyle.inputWrapperSelected : FormStyle.inputWrapper}>
          <Label>{I18n.t('activity.activityAddEdit.form.contentSource')}</Label>
          <Input
            onChangeText={this.props.setContentSource}
            value={this.props.activity.contentSource}
            style={Style.input}
            onFocus={() => this.setState({ selectedInput: 'contentSource' })}
            onBlur={() => this.setState({ selectedInput: '' })}
          />
        </Item>
      );
    } else if (this.props.activity.type === ActivityTypeEnum.MEETING) {
      return (
        <InterlocutorAddContainer
          getInterlocutorState={this.props.getInterlocutorState}
        />
      );
    }
    return null;
  }

  renderTagItem({ item }) {
    return (
      <ListItem
        onPress={() => {
          this.props.selectTag(item.name);
          this.descriptionInput._root.focus();
        }}
        style={{ height: 30, backgroundColor: 0 }}
      >
        <Text>{item.name}</Text>
      </ListItem>
    );
  }

  scrollViewFromTop() {
    if (this.scrollView !== undefined) {
      this.scrollView.props.scrollToPosition(0, 75);
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' || Platform.Version < 21 ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' || Platform.Version > 20 ? 0 : StatusBar.currentHeight}
      >
        <Container>
          <MenuHeader
            goBack={this.props.goBack}
            title={this.getTitle()}
            menu={this.renderSaveButton()}
          />
          <Content innerRef={(ref) => { this.scrollView = ref; }} keyboardShouldPersistTaps="always">
            <Form>
              { this.renderSpecificFields() }
              <Item floatingLabel style={this.state.selectedInput === 'title' ? FormStyle.inputWrapperSelected : FormStyle.inputWrapper}>
                <Label>{I18n.t('activity.activityAddEdit.form.title')}</Label>
                <Input
                  onChangeText={this.props.setTitle}
                  value={this.props.activity.title}
                  style={Style.input}
                  onFocus={() => this.setState({ selectedInput: 'title' })}
                  onBlur={() => this.setState({ selectedInput: '' })}
                />
              </Item>
              <Item floatingLabel style={FormStyle.inputWrapperLight}>
                <Label>{I18n.t('activity.activityAddEdit.form.content')}</Label>
                <Input
                  getRef={(ref) => { this.descriptionInput = ref; }}
                  onChangeText={this.props.setDescription}
                  multiline
                  blurOnSubmit={false}
                  numberOfLines={5}
                  returnKeyType="none"
                  style={Style.textarea}
                  value={this.props.activity.description}
                  onFocus={() => {
                    this.scrollViewFromTop();
                    this.setState({ selectedInput: 'content' });
                  }}
                  onBlur={() => this.setState({ selectedInput: '' })}
                  onSelectionChange={this.props.onSelectionChange}
                />
              </Item>
              <FlatList
                data={this.props.autocompleteTagList}
                renderItem={this.renderTagItem}
                keyExtractor={item => item.id}
              />
              {this.renderValidationButtons()}
            </Form>
          </Content>
        </Container>
      </KeyboardAvoidingView>
    );
  }
}
