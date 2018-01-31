import React from 'react';
import { Container, Content, Text, Form, Item, Input, Label, Button, Badge } from 'native-base';
import { KeyboardAvoidingView } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import { RadioBlock } from 'yasav/src/viewElements/shared/radioSelection/RadioBlock';
import ActivityAddEditSpecificFieldsContainer from '../containers/ActivityAddEditSpecificFieldsContainer';

import I18n from 'yasav/locales/i18n';
import Style from '../styles/style.js';
import { GenericHeader } from 'yasav/src/viewElements/shared/Header';

import { ActivityTypeEnum } from 'yasav/src/const';

export default class ActivityAddView extends React.Component {
  constructor(props) {
    super(props);

    this.renderTags = this.renderTags.bind(this);
  }

  renderTags() {
    return this.props.activity.tags.map((tag, index) => (
      <Badge primary key={index}>
        <Text onPress={() => this.props.removeTag(tag)}>{tag}</Text>
      </Badge>
    ));
  }

  renderValidationButtons() {
    if (this.props.isEdit) {
      return (
        <Button primary full onPress={this.props.editActivity} disabled={!this.props.isFormValid}>
          <Text>{I18n.t('activity.activityAddEdit.edit.button')}</Text>
        </Button>
      );
    }
    return (
      <Content>
        <Button primary full onPress={this.props.addActivity} disabled={!this.props.isFormValid}>
          <Text>{I18n.t('activity.activityAddEdit.add.button')}</Text>
        </Button>
        <Button primary full style={{ marginTop: 20 }} onPress={this.props.addTodoActivity} disabled={!this.props.isFormValid}>
          <Text>{I18n.t('activity.activityAddEdit.addTodoButton')}</Text>
        </Button>
      </Content>
    );
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1 }}
      >
        <Container>
          <GenericHeader
            goBack={this.props.goBack}
            title={this.props.isEdit ? I18n.t('activity.activityAddEdit.edit.title') : I18n.t('activity.activityAddEdit.add.title')}
          />
          <Content>
            <Form>
              <Content>
                <Grid>
                  <Col style={{ height: 50 }}>
                    <RadioBlock
                      title={I18n.t('activity.activityAddEdit.type.event')}
                      onPress={this.props.setTypeEvent}
                      selected={this.props.activity.type === ActivityTypeEnum.EVENT}
                    />
                  </Col>
                  <Col style={{ height: 50 }}>
                    <RadioBlock
                      title={I18n.t('activity.activityAddEdit.type.content')}
                      onPress={this.props.setTypeContent}
                      selected={this.props.activity.type === ActivityTypeEnum.CONTENT}
                    />
                  </Col>
                  <Col style={{ height: 50 }}>
                    <RadioBlock
                      title={I18n.t('activity.activityAddEdit.type.meeting')}
                      onPress={this.props.setTypeMeeting}
                      selected={this.props.activity.type === ActivityTypeEnum.MEETING}
                    />
                  </Col>
                </Grid>
              </Content>
              <ActivityAddEditSpecificFieldsContainer
                type={this.props.activity.type}
                setContentSource={this.props.setContentSource}
                contentSource={this.props.activity.contentSource}
                eventWhat={this.props.activity.eventWhat}
                getInterlocutorState={this.props.getInterlocutorState}

              />
              <Item floatingLabel>
                <Label>{I18n.t('activity.activityAddEdit.activityTitle')}</Label>
                <Input onChangeText={this.props.setTitle} value={this.props.activity.title} />
              </Item>
              <Item floatingLabel>
                <Label>{I18n.t('activity.activityAddEdit.content')}</Label>
                <Input
                  onChangeText={this.props.setDescription}
                  multiline
                  blurOnSubmit={false}
                  numberOfLines={5}
                  returnKeyType="none"
                  style={Style.textarea}
                  value={this.props.activity.description}
                />
              </Item>
              <Item
                style={{ flex: 1, flexDirection: 'row', marginLeft: 0 }}
                contentContainerStyle={{ alignItems: 'flex-start' }}
              >
                {this.renderTags()}
              </Item>

              <Item floatingLabel>
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
