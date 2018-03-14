import React from 'react';
import { ART } from 'react-native';

// from https://github.com/facebook/react-native/issues/13894
export class ARTCircle extends React.Component {
  render() {
    const { radius, ...rest } = this.props;

    const circle = ART.Path()
      .move(radius, 0)
      .arc(0, radius * 2, radius)
      .arc(0, radius * -2, radius);

    return <ART.Shape d={circle} stroke="#2ca02c" strokeWidth={3} {...rest} />;
  }
}

export class ARTLine extends React.Component {
  render() {
    const { x1, x2, y1, y2, ...rest } = this.props;

    const line = ART.Path()
      .move(x1, y1)
      .line(x2, y2);

    return <ART.Shape {...rest} d={line} />;
  }
}

export class ARTText extends React.Component {
  render() {
    return (
      <ART.Text font={'13px "Helvetica Neue", "Helvetica", Arial'} fill="#000000">
        {this.props.label}
      </ART.Text>
    );
  }
}

export class ARTNode extends React.Component {
  render() {
    const { x, y, radius, label, ...rest } = this.props;
    return (
      <ART.Group x={x} y={y}>
        <ARTCircle radius={radius} />
        <ARTText label={label} />
      </ART.Group>
    );
  }
}
