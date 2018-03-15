import React from 'react';
import { Container, Content } from 'native-base';
import I18n from 'yasav/locales/i18n'
import { GenericHeader } from 'yasav/src/viewElements/shared/Header';
import { ART } from 'react-native';
import { ARTNode, ARTLine } from '../../../utils/ArtComponents';

export default class GraphTagDisplayView extends React.Component {
  render() {
    return (
      <Container>
        <GenericHeader
          goBack={this.props.goBack}
          title={I18n.t('activity.activityDisplay.title')}
        />
        <Content>
          <ART.Surface width={this.props.width} height={this.props.height}>
            <ART.Group x={0} y={0}>
              {
                this.props.nodes.map(item => (
                  <ARTNode
                    key={item.id}
                    x={item.x}
                    y={item.y}
                    radius={item.radius}
                    label={item.label}
                  />
                ))
              }
              {
                this.props.edges.map(item => (
                  <ARTLine
                    key={item.id}
                    x1={item.x1}
                    y1={item.y1}
                    x2={item.x2}
                    y2={item.y2}
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
