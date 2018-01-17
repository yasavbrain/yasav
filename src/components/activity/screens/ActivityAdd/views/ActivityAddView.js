import React from 'react';
import { Container, Content, Text, Form, Item, Input, Label, Textarea, Button, Radio, ListItem, Right } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {RadioBlock} from 'yasav/src/viewElements/shared/radioSelection/RadioBlock'
import ActivityAddSpecificFieldsContainer from '../containers/ActivityAddSpecificFieldsContainer'

import I18n from 'yasav/locales/i18n';
import Style from '../styles/style.js';
import { GenericHeader } from 'yasav/src/viewElements/shared/Header';

export default class ActivityAddView extends React.Component {

  render() {
    return(
      <Container>
        <GenericHeader
          goBack={this.props.goBack}
          title={I18n.t('activity.activityAdd.title')}
        />
        <Content>
          <Form>
            <Content>
              <Grid>
                <Col style={{ height: 50 }}>
                  <RadioBlock
                    title={I18n.t('activity.activityAdd.type.event')}
                    onPress={this.props.setTypeEvent}
                    selected={this.props.type == "event"}
                  />
                </Col>
                <Col style={{ height: 50 }}>
                  <RadioBlock
                      title={I18n.t('activity.activityAdd.type.content')}
                      onPress={this.props.setTypeContent}
                      selected={this.props.type == "content"}
                    />
                </Col>
                <Col style={{ height: 50 }}>
                  <RadioBlock
                      title={I18n.t('activity.activityAdd.type.meeting')}
                      onPress={this.props.setTypeMeeting}
                      selected={this.props.type == "meeting"}
                    />
                </Col>
              </Grid>
            </Content>
            <ActivityAddSpecificFieldsContainer
              type={this.props.type}
              setContentSource={this.props.setContentSource}
              setEventWhat={this.props.setEventWhat}
              setMeetingWho={this.props.setMeetingWho}
              contentSource={this.props.contentSource}
              eventWhat={this.props.eventWhat}
              meetingWho={this.props.meetingWho}

            />
            <Item floatingLabel>
              <Label>{I18n.t('activity.activityAdd.activityTitle')}</Label>
              <Input onChangeText={this.props.setTitle} />
            </Item>
            <Item floatingLabel>
              <Label>{I18n.t('activity.activityAdd.content')}</Label>
              <Input
                onChangeText={this.props.setDescription}
                multiline
                blurOnSubmit={false}
                numberOfLines={5}
                returnKeyType='none'
                style={Style.textarea}

              />
            </Item>
            <Button primary full onPress={this.props.addActivity}>
              <Text>{I18n.t('activity.activityAdd.addActivityButton')}</Text>
            </Button>
            <Content>
            <Button primary full style={{ marginTop: 20 }} onPress={this.props.addTodoActivity}>
              <Text>{I18n.t('activity.activityAdd.addTodoButton')}t</Text>
            </Button>
          </Content>
          </Form>
        </Content>
      </Container>
    );
  }
}
