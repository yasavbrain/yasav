import React from 'react';
import { Container, Content, Text, Form, Item, Input, Label, Button, Badge, Icon } from 'native-base';
import { KeyboardAvoidingView, Platform, StatusBar } from 'react-native';
import InterlocutorAddContainer from 'yasav/src/components/interlocutor/screens/InterlocutorAdd/containers/InterlocutorAddContainer';

import I18n from 'yasav/locales/i18n';
import Style from '../styles/style.js';
import HeaderStyle from 'yasav/src/styles/Header';
import { GenericHeader, MenuHeader } from 'yasav/src/viewElements/shared/Header';

import { ActivityTypeEnum } from 'yasav/src/const';

export default class ActivityAddView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selectedInput: '' };

    this.renderTags = this.renderTags.bind(this);
    this.getTitle = this.getTitle.bind(this);
    this.renderSaveButton = this.renderSaveButton.bind(this);
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
      <Button primary full style={{ marginTop: 20 }} onPress={this.props.addTodoActivity} disabled={!this.props.isFormValid}>
        <Text>{I18n.t('activity.activityAddEdit.addTodoButton')}</Text>
      </Button>
    );
  }

  renderSaveButton() {
    if (this.props.isEdit) {
      return (
        <Button transparent onPress={this.props.editActivity} disabled={!this.props.isFormValid}>
          <Text>Save</Text>
        </Button>
      );
    }
    return (
      <Button transparent onPress={this.props.addActivity} disabled={!this.props.isFormValid} style={HeaderStyle.saveButtonRight}>
        <Icon name="md-checkmark" style={this.props.isFormValid ? HeaderStyle.saveButtonRightValid : HeaderStyle.saveButtonRightInvalid} />
      </Button>
    );
  }

  renderSaveButton() {
    if (this.props.isEdit) {
      return (
        <Button transparent onPress={this.props.editActivity} disabled={!this.props.isFormValid}>
          <Text>Save</Text>
        </Button>
      );
    }
    return (
      <Button transparent onPress={this.props.addActivity} disabled={!this.props.isFormValid} style={HeaderStyle.saveButtonRight}>
        <Icon name="md-checkmark" style={this.props.isFormValid ? HeaderStyle.saveButtonRightValid : HeaderStyle.saveButtonRightInvalid} />
      </Button>
    );
  }
  /*
  renderTags() {
    return this.props.activity.tags.map((tag, index) => (
      <Badge primary key={index}>
        <Text onPress={() => this.props.removeTag(tag)}>{tag}</Text>
      </Badge>
    ));
  }
  */

  renderSpecificFields() {
    if (this.props.activity.type === ActivityTypeEnum.CONTENT) {
      return (
        <Item floatingLabel style={this.state.selectedInput === 'contentSource' ? Style.inputWrapperSelected : Style.inputWrapper}>
          <Label>{I18n.t('activity.activityAddEdit.form.contentSource')}</Label>
          <Input
            onChangeText={this.props.setContentSource}
            value={this.props.activity.contentSource}
            style={Style.input}
            onFocus={() => this.setState({ selectedInput: 'contentSource' })}
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
          <Content>
            <Form>
              { this.renderSpecificFields() }
              <Item floatingLabel style={this.state.selectedInput === 'title' ? Style.inputWrapperSelected : Style.inputWrapper}>
                <Label>{I18n.t('activity.activityAddEdit.form.title')}</Label>
                <Input
                  onChangeText={this.props.setTitle}
                  value={this.props.activity.title}
                  style={Style.input}
                  onFocus={() => this.setState({ selectedInput: 'title' })}
                />
              </Item>
              <Item floatingLabel style={Style.inputWrapperLight}>
                <Label>{I18n.t('activity.activityAddEdit.form.content')}</Label>
                <Input
                  onChangeText={this.props.setDescription}
                  multiline
                  blurOnSubmit={false}
                  numberOfLines={5}
                  returnKeyType="none"
                  style={Style.textarea}
                  value={this.props.activity.description}
                  onFocus={() => this.setState({ selectedInput: 'content' })}
                />
              </Item>
              <Item
                style={{ flex: 1, flexDirection: 'row', marginLeft: 0, display: 'none' }}
                contentContainerStyle={{ alignItems: 'flex-start' }}
              >
                {this.renderTags()}
              </Item>

              <Item floatingLabel style={{ display: 'none' }}>
                <Label>Tags</Label>
                <Input onChangeText={this.props.manageTag} value={this.props.tagInput} />
              </Item>

              {this.renderValidationButtons()}
            </Form>
          </Content>
        </Container>
      </KeyboardAvoidingView>
    );
  }
}
