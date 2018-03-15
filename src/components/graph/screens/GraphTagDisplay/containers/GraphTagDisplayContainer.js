import React from 'react';
import { ART, Dimensions } from 'react-native';
import * as shape from 'd3-shape';
import * as hierarchy from 'd3-hierarchy';
import * as force from 'd3-force';
import GraphTagDisplayView from '../views/GraphTagDisplayView';

const d3 = {
  shape,
  hierarchy,
  force,
};


class GraphTagDisplayContainer extends React.Component {
  constructor(props) {
    super(props);
    this.createD3Nodes = this.createD3Nodes.bind(this);
    this.createD3Edges = this.createD3Edges.bind(this);
    this.ticked = this.ticked.bind(this);
    this.width = Dimensions.get('window').width;
    this.height = Dimensions.get('window').height;
    this.data = [
      { x: 0, y: 0, r: 10, label: 'jean', id: 1 },
      { x: 200, y: 0, r: 5, label: 'marc', id: 2 },
      { x: 0, y: 300, r: 25, label: 'john', id: 3 }
    ];

    this.links = [
      { id: 1, source: this.data[0], target: this.data[1] },
      { id: 2, source: this.data[0], target: this.data[2] },
    ];
    this.state = {
      data: this.data,
      links: this.links,
    };
  }

  componentDidMount() {
    this.force = d3.force.forceSimulation(this.data)
      // .force('charge', d3.force.forceManyBody(-300))
      // .force('link', d3.force.forceLink(this.state.links))
      .force('center', d3.force.forceCenter(this.width / 2, this.height / 2))
      .force('x', d3.force.forceX().strength(0.2))
      .force('y', d3.force.forceY().strength(0.2))
      .force('collide', d3.force.forceCollide().radius(d => d.r))
      .on('tick', this.ticked);
  }


  ticked() {
    this.setState({ data: this.data });
  }

  createD3Nodes(data) {
    let nodes = [];
    nodes = data.map(item => ({
      x: item.x,
      y: item.y,
      radius: item.r,
      label: item.label,
      id: item.id,
    }));
    return nodes;
  }


  createD3Edges(links) {
    let edges = [];
    // we want the line to link the center of the sources and targets
    edges = links.map(item => ({
      x1: item.source.x + item.source.r,
      y1: item.source.y + item.source.r,
      x2: item.target.x + item.target.r,
      y2: item.target.y + item.target.r,
      id: item.id,
    }));
    return edges;
  }

  render() {
    const nodes = this.createD3Nodes(this.state.data);
    const edges = this.createD3Edges(this.state.links);
    return (
      <GraphTagDisplayView
        goBack={this.props.goBack}
        width={this.width}
        height={this.height}
        nodes={nodes}
        edges={edges}
      />
    );
  }
}

export default GraphTagDisplayContainer;
