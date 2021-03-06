import React from 'react';
import { ART } from 'react-native';

// from https://github.com/facebook/react-native/issues/13894
export class ARTCircle extends React.Component {
  render() {
    const { radius, color, ...rest } = this.props;
    // move(x, y)
    // arc(x2, y2, arc_r) : from current point to point (x2, y2), using radius = arc_r
    // Here we want the circle to in a squarre, with origin as a upper left corner
    const circle = ART.Path()
      .move(radius, 0)
      .arc(0, radius * 2, radius)
      .arc(0, radius * -2, radius);

    return <ART.Shape d={circle} stroke="#020202" strokeWidth={1} opacity={1} fill={color} {...rest} />;
  }
}

export class ARTLine extends React.Component {
  render() {
    const { x1, x2, y1, y2, ...rest } = this.props;

    const line = ART.Path()
      .move(x1, y1)
      .lineTo(x2, y2);
    return <ART.Shape {...rest} stroke="#020202" strokeWidth={1} d={line} />;
  }
}

export class ARTText extends React.Component {
  render() {
    // 13pt = 17px
    // 14pt = 19px
    return (
      <ART.Text
        font={{
          fontFamily: 'Helvetica Neue',
          fontSize: 14,
        }}
        alignment="center"
        fill="#000000"
        x={this.props.x}
        y={this.props.y}
      >
        {this.props.label}
      </ART.Text>
    );
  }
}

export class ARTNode extends React.Component {
  render() {
    const { x, y, radius, label, color, ...rest } = this.props;
    // For the label the upper left corner is the reference
    const xLabel = radius;
    const yLabel = radius - 7;
    // FIXME : multiline does not work for now
    // for doc, see https://github.com/facebook/react-native/blob/master/Libraries/ART/ReactNativeART.js
    const multiLineLabel = label.split(' ').join('\n');
    return (
      <ART.Group x={x} y={y}>
        <ARTCircle radius={radius} color={color} />
        <ARTText label={multiLineLabel} x={xLabel} y={yLabel} />
      </ART.Group>
    );
  }
}
