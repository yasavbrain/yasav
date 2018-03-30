import React from 'react';
import { Container, View } from 'native-base';
import I18n from 'yasav/locales/i18n'
import { GenericHeader } from 'yasav/src/viewElements/shared/Header';
import { ART, TouchableWithoutFeedback } from 'react-native';
import { ARTNode, ARTLine } from '../../../utils/ArtComponents';
import { isInCircle } from '../../../utils/geometry';


// based on https://snack.expo.io/@msand/svg-pinch-to-pan-and-zoom
export default class GraphActivityDisplayView extends React.Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress({ nativeEvent }) {
    // do not forget, in the original & independant coordinate system, the x and
    // y node properties corresponds to the top left corner of a square
    // surrounding the node
    this.props.nodes.forEach((node) => {
      const inCircle = isInCircle(
        nativeEvent.locationX,
        nativeEvent.locationY,
        node.x + node.radius,
        node.y + node.radius,
        node.radius,
      );

      if (inCircle) {
        this.props.handleNodePress(node.id, node.nodeType);
      }
    });
  }

  render() {
    return (
      <Container>
        <GenericHeader
          goBack={this.props.goBack}
          title={I18n.t('activity.activityDisplay.title')}
        />
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <View>
            <ART.Surface width={this.props.width} height={this.props.height}>
              <ART.Group x={0} y={0}>
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
                {
                  this.props.nodes.map(item => (
                    <ARTNode
                      key={item.id}
                      x={item.x}
                      y={item.y}
                      radius={item.radius}
                      label={item.label}
                      color={item.color}
                    />
                  ))
                }
              </ART.Group>
            </ART.Surface>
          </View>
        </TouchableWithoutFeedback>
      </Container>
    );
  }
}
