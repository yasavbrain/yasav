import React from 'react';
import { Container, Content } from 'native-base';
import I18n from 'yasav/locales/i18n'
import { GenericHeader } from 'yasav/src/viewElements/shared/Header';
import { ART } from 'react-native';
import { ARTNode } from '../../../utils/ArtComponents';

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
                this.props.nodes.map((item, index) => (
                  <ARTNode
                    x={item.x}
                    y={item.y}
                    radius={item.radius}
                    label={item.label}
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
