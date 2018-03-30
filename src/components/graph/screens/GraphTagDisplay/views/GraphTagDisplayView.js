import React from 'react';
import { Container, View } from 'native-base';
import I18n from 'yasav/locales/i18n'
import { GenericHeader } from 'yasav/src/viewElements/shared/Header';
import { ART, PanResponder } from 'react-native';
import { ARTNode } from '../../../utils/ArtComponents';
import { calcDistance, calcCenter, isInCircle } from '../../../utils/geometry';

// based on https://snack.expo.io/@msand/svg-pinch-to-pan-and-zoom
export default class GraphTagDisplayView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 1,
      left: 0,
      top: 0,
    };
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onPanResponderGrant: () => {},
      onPanResponderTerminate: () => {},
      onMoveShouldSetPanResponder: () => true,
      onStartShouldSetPanResponder: () => true,
      onShouldBlockNativeResponder: () => true,
      onPanResponderTerminationRequest: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onPanResponderMove: (evt) => {
        const { touches } = evt.nativeEvent;
        const { length } = touches;
        if (length === 1) {
          const [{ locationX, locationY }] = touches;
          this.processTouch(locationX, locationY);
        } else if (length === 2) {
          const [touch1, touch2] = touches;
          this.processPinch(
            touch1.locationX,
            touch1.locationY,
            touch2.locationX,
            touch2.locationY,
          );
        }
      },
      onPanResponderRelease: ({ nativeEvent }) => {
        if (!this.state.isMoving) {
          this.handleSelect(nativeEvent.locationX, nativeEvent.locationY);
        }
        this.setState({
          isZooming: false,
          isMoving: false,
        });
      },
    });
  }

  handleSelect(locationX, locationY) {
    // locationX, locationY : location of the user touch input in the disaplyed
    // scale and current translation
    // we need to convert it into the "original" coordinates, independant from
    // scale and translation
    const xOrigCoord = (locationX - this.state.left) / this.state.zoom;
    const yOrigCoord = (locationY - this.state.top) / this.state.zoom;

    // do not forget, in the original & independant coordinate system, the x and
    // y node properties corresponds to the top left corner of a square
    // surrounding the node
    this.props.nodes.forEach((node) => {
      const inCircle = isInCircle(
        xOrigCoord,
        yOrigCoord,
        node.x + node.radius,
        node.y + node.radius,
        node.radius,
      );
      if (inCircle) {
        this.props.navigateToGraphActivityDisplayScreen(node.id, node.label);
      }
    });
  }

  processPinch(x1, y1, x2, y2) {
    const distance = calcDistance(x1, y1, x2, y2);
    const { x, y } = calcCenter(x1, y1, x2, y2);

    if (!this.state.isZooming) {
      const { top, left, zoom } = this.state;
      this.setState({
        isZooming: true,
        initialX: x,
        initialY: y,
        initialTop: top,
        initialLeft: left,
        initialZoom: zoom,
        initialDistance: distance,
      });
    } else {
      const {
        initialX,
        initialY,
        initialTop,
        initialLeft,
        initialZoom,
        initialDistance,
      } = this.state;

      let touchZoom = distance / initialDistance;
      // we prevent from zooming too far
      const zoom = Math.max(0.1, initialZoom * touchZoom);
      touchZoom = zoom / initialZoom

      const dx = x - initialX;
      const dy = y - initialY;

      const left = ((initialLeft + dx - x) * touchZoom) + x;
      const top = ((initialTop + dy - y) * touchZoom) + y;

      this.setState({
        zoom,
        left,
        top,
      });
    }
  }

  processTouch(x, y) {
    if (!this.state.isMoving || this.state.isZooming) {
      const { top, left } = this.state;
      this.setState({
        isMoving: true,
        isZooming: false,
        initialLeft: left,
        initialTop: top,
        initialX: x,
        initialY: y,
      });
    } else {
      const { initialX, initialY, initialLeft, initialTop } = this.state;
      const dx = x - initialX;
      const dy = y - initialY;
      this.setState({
        left: initialLeft + dx,
        top: initialTop + dy,
      });
    }
  }

  render() {
    return (
      <Container>
        <GenericHeader
          goBack={this.props.goBack}
          title={I18n.t('graph.graphTagDisplay.title')}
        />
        <View {...this._panResponder.panHandlers}>
          <ART.Surface width={this.props.width} height={this.props.height}>
            <ART.Group
              x={this.state.left}
              y={this.state.top}
              scaleX={this.state.zoom}
              scaleY={this.state.zoom}
            >
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
      </Container>
    );
  }
}
