import React from 'react';
import { Container, Content, Text, Form, Item, Input, Label, Textarea, Button, Radio, ListItem, Right } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {RadioBlock} from 'yasav/src/viewElements/shared/radioSelection/RadioBlock'

import I18n from 'yasav/locales/i18n';
import Style from '../styles/style.js';
import { GenericHeader } from 'yasav/src/viewElements/shared/Header';

export default class ActivityAddContainer extends React.Component {

  // TODO : Remove the arrow functions from the render
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
                      title="Event"
                      onPress={this.props.setTypeEvent}
                      selected={this.props.type == "event"}
                    />
                  </Col>
                  <Col style={{ height: 50 }}>
                    <RadioBlock
                        title="Contenu"
                        onPress={this.props.setTypeContent}
                        selected={this.props.type == "content"}
                      />
                  </Col>
                  <Col style={{ height: 50 }}>
                    <RadioBlock
                        title="Rencontre"
                        onPress={this.props.setTypeMeeting}
                        selected={this.props.type == "meeting"}
                      />
                  </Col>
                </Grid>
              </Content>
            <Item floatingLabel>
              <Label>{I18n.t('activity.activityAdd.title')}</Label>
              <Input onChangeText={(title) => this.props.setTitle(title)} />
            </Item>
            <Item floatingLabel>
              <Label>{I18n.t('activity.activityAdd.content')}</Label>
              <Input
                onChangeText={(description) => this.props.setDescription(description)}
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
