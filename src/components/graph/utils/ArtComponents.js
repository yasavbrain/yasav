import React from 'react';
import { ART } from 'react-native';

// from https://github.com/facebook/react-native/issues/13894
export default class Circle extends React.Component {
  render() {
    const { radius, ...rest } = this.props;

    const circle = ART.Path()
      .move(radius, 0)
      .arc(0, radius * 2, radius)
      .arc(0, radius * -2, radius);

    return <ART.Shape {...rest} d={circle} />;
  }
}
