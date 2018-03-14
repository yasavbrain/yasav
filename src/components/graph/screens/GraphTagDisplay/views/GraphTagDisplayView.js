import React from 'react';
import { Container, Content, Text } from 'native-base';
import I18n from 'yasav/locales/i18n'
import { GenericHeader } from 'yasav/src/viewElements/shared/Header';
import { ART } from 'react-native';

export default class GraphTagDisplayView extends React.Component {
  render() {
    const x = 150 / 2;
    const y = 150 / 2;
    return (
      <Container>
        <GenericHeader
          goBack={this.props.goBack}
          title={I18n.t('activity.activityDisplay.title')}
        />
        <Content>
          <ART.Surface width={1000} height={600}>
            <ART.Group x={x} y={y}>
              {
                this.props.paths.map((item, index) => (
                  <ART.Shape
                    key={'circle_' + index}
                    d={item.path}
                    stroke="#2ca02c"
                    strokeWidth={3}
                  />
                ))
              }
            </ART.Group>
          </ART.Surface>
        </Content>
      </Container>
    );
  }
}
