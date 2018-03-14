import React from 'react';
import { Container, Content, Text } from 'native-base';
import I18n from 'yasav/locales/i18n'
import { GenericHeader } from 'yasav/src/viewElements/shared/Header';
import { ART } from 'react-native';

export default class GraphTagDisplayView extends React.Component {
  render() {
    return (
      <Container>
        <GenericHeader
          goBack={this.props.goBack}
          title={I18n.t('activity.activityDisplay.title')}
        />
        <Content>
          <ART.Surface width={1000} height={600}>
            <ART.Group>
              <ART.Shape
                d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
                stroke="#000"
                strokeWidth={1}
              />
            </ART.Group>
          </ART.Surface>
        </Content>
      </Container>
    );
  }
}
