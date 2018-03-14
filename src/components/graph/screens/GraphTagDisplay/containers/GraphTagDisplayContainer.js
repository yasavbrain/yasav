import React from 'react';
import { ART } from 'react-native';
import * as shape from 'd3-shape';
import * as hierarchy from 'd3-hierarchy';
import GraphTagDisplayView from '../views/GraphTagDisplayView';

const d3 = {
  shape,
  hierarchy,
};

class GraphTagDisplayContainer extends React.Component {
  constructor(props) {
    super(props);
    this.createD3GRaph = this.createD3GRaph.bind(this);
    this.generateCirclePath = this.generateCirclePath.bind(this);
    this.createD3Nodes = this.createD3Nodes.bind(this);

    // this.data = [
    //   { 'number': 8, 'name': 'Fun activities'},
    //   { 'number': 7, 'name': 'Dog'},
    //   { 'number': 16, 'name': 'Food'},
    //   { 'number': 23, 'name': 'Car'},
    //   { 'number': 42, 'name': 'Rent'},
    //   { 'number': 4, 'name': 'Misc'},
    // ];
    this.data = {
      'name': 'Eve',
      'children': [
        { 'name': 'Cain' },
        { 'name': 'John' },
        { 'name': 'Louis' },
      ],
    }
  }

  generateCirclePath(x, y, radius) {
    const circle = ART.Path()
      .move(radius, 0)
      .arc(0, radius * 2, radius)
      .arc(0, radius * -2, radius);
    return circle
  }

  createD3GRaph(data) {
    // const arcs = d3.shape.pie()
    //   .value(item => item.number)(this.data);
    // console.log('ARCS', arcs);

    // let root = d3.hierarchy.hierarchy(this.data);
    // let pack = d3.hierarchy.pack()
    //   .size(10, 10)
    //   .padding(3);
    // let ret = pack(root)
    // console.log("RET", ret);
    // let myC = this.circleGen()
    //   .x(function(d) { return d.x; })
    //   .y(function(d) { return d.y; })
    //   .r(function(d) { return d.r; });

    let paths = []
    paths = paths.concat({
      path: this.generateCirclePath(data[0].x, data[0].y, data[0].r),
      x: data[0].x,
      y: data[0].y,
      label: data[0].label,
    });
    paths = paths.concat({
      path: this.generateCirclePath(data[1].x, data[1].y, data[1].r),
      x: data[1].x,
      y: data[1].y,
      label: data[1].label,
    });
    paths = paths.concat({
      path: this.generateCirclePath(data[2].x, data[2].y, data[2].r),
      x: data[2].x,
      y: data[2].y,
      label: data[2].label,
    });
    // path += this.generateCirclePath(data[1].x, data[1].y, data[1].r)
    // path += this.generateCirclePath(data[2].x, data[2].y, data[2].r)
    console.log(paths)
    return paths;
  }

  createD3Nodes(data) {
    let nodes = []
    nodes = nodes.concat({
      x: data[0].x,
      y: data[0].y,
      radius: data[0].r,
      label: data[0].label,
    });

    nodes = nodes.concat({
      x: data[1].x,
      y: data[1].y,
      radius: data[1].r,
      label: data[1].label,
    });

    nodes = nodes.concat({
      x: data[2].x,
      y: data[2].y,
      radius: data[2].r,
      label: data[2].label,
    });
    return nodes;
  }

  render() {
    const data = [
      {x: 50, y: 50, r: 10, fill: "green", label: "jean"},
      {x: 150, y: 150, r: 5, fill: "red", label: "marc"},
      {x: 70, y: 70, r: 25, fill: "blue", label: "john"}
    ];
    const paths = this.createD3GRaph(data);
    const nodes = this.createD3Nodes(data);
    return (
      <GraphTagDisplayView
        goBack={this.props.goBack}
        nodes={nodes}
      />
    );
  }
}

export default GraphTagDisplayContainer;
