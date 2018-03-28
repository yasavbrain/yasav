import React from 'react';
import { Container, Content, View } from 'native-base';
import I18n from 'yasav/locales/i18n'
import { GenericHeader } from 'yasav/src/viewElements/shared/Header';
import { ART, PanResponder } from 'react-native';
import { ARTNode, ARTLine } from '../../../utils/ArtComponents';
import * as zoom from 'd3-zoom';
import * as scale from 'd3-scale';

const d3 = {
  zoom,
  scale,
}

export default class GraphTagDisplayView extends React.Component {
  constructor(props) {
    super(props);
    mainScaleX = d3.scale.scaleLinear()
        .domain([0, 400])
        .range([0, 400]);
    mainScaleY = d3.scale.scaleLinear()
      .domain([0, 400])
      .range([0, 400]);
    this.state = {
      x: 0,
      y: 0,
      mainScaleX: mainScaleX,
      mainScaleY: mainScaleY,
      scale: 1,
      rescaledX: d3.zoom.zoomIdentity.rescaleX(mainScaleX),
      rescaledY: d3.zoom.zoomIdentity.rescaleY(mainScaleY),
    }
    this.touch = {
      x: null,
      y: null,
    }
  }
  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true, //Tell iOS that we are allowing the movement
      onMoveShouldSetPanResponderCapture: () => true, // Same here, tell iOS that we allow dragging
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (evt, { x0, y0 }) => {
        console.log("touch")
        this.touch = {
          x: x0,
          y: y0
        };
      },
      onPanResponderMove: (event, {stateID, vx, vy, moveX, moveY, pinch, numberActiveTouches}) => {
        xDiff = moveX - this.touch.x
        yDiff = moveY - this.touch.y
        // console.log("MOVE", xDiff, yDiff)
        this.touch = {
          x: moveX,
          y: moveY,
        }
        this.setState({ x: this.state.x + xDiff, y: this.state.y + yDiff});
        console.log(event.nativeEvent.touches)

        if (numberActiveTouches >= 2) {
          let touch1 = event.nativeEvent.touches[0];
          let touch2 = event.nativeEvent.touches[1];
          console.log(Math.ceil(yDiff) / this.props.height)
          this.setState({ scale: this.state.scale - Math.ceil(yDiff) / this.props.height})
          // const direction = yDiff > 0 ? 'out' : 'in';
          // if (direction === 'in') {
          //   this.setState({ scale: this.state.scale + yDiff / })
          // } else {
          //   this.setState({ scale: this.state.scale - 0.05})
          // }
        }


        // console.log("onPanResponderMove", dx, dy)
        // if (numberActiveTouches >= 2) {
        //   const scaleX = this.state.scale - (dx / this.props.height) * this.state.scale
        //   const scaleY = this.state.scale - (dy / this.props.width) * this.state.scale
        //   max = Math.min(scaleX, scaleY)
        // } else {
        //   max = this.state.scale
        // }
        //
        // console.log("max", max)
        // const zoomIdentity = d3.zoom.zoomIdentity.translate(dx, dy).scale(1)
        // this._onDrag(zoomIdentity, max)
      },
    });
  }

  _onDrag(zoomIdentity, newScale){
    console.log("DRAGGING", zoomIdentity)
    const rescaledX = zoomIdentity.rescaleX(this.state.mainScaleX)
    const rescaledY = zoomIdentity.rescaleY(this.state.mainScaleY)
    this.setState({
      rescaledX: zoomIdentity.rescaleX(this.state.mainScaleX),
      rescaledY: zoomIdentity.rescaleY(this.state.mainScaleY),
      scale: newScale,
    })
  }

  render() {
    return (
      <Container>
        <GenericHeader
          goBack={this.props.goBack}
          title={I18n.t('activity.activityDisplay.title')}
        />
        <View {...this._panResponder.panHandlers}>
          <ART.Surface width={this.props.width} height={this.props.height}>
            <ART.Group x={this.state.x} y={this.state.y} scaleX={this.state.scale} scaleY={this.state.scale}>
              {
                // this.props.nodes.map(item => (
                //   <ARTNode
                //     key={item.id}
                //     x={this.state.rescaledX(item.x)}
                //     y={this.state.rescaledY(item.y)}
                //     radius={this.state.rescaledX(item.radius)}
                //     label={item.label}
                //   />
                // ))
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
                // this.props.edges.map(item => (
                //   <ARTLine
                //     key={item.id}
                //     x1={this.state.rescaledX(item.x1)}
                //     y1={this.state.rescaledY(item.y1)}
                //     x2={this.state.rescaledX(item.x2)}
                //     y2={this.state.rescaledY(item.y2)}
                //   />
                // ))
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
        </View>
      </Container>
    );
  }
}
