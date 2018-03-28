import React from 'react';
import { Dimensions } from 'react-native';
import * as shape from 'd3-shape';
import * as hierarchy from 'd3-hierarchy';
import * as force from 'd3-force';
import * as zoom from 'd3-zoom';
import GraphTagDisplayView from '../views/GraphTagDisplayView';

const d3 = {
  shape,
  hierarchy,
  force,
  zoom,
};


class GraphTagDisplayContainer extends React.Component {
  constructor(props) {
    super(props);
    this.toARTNodes = this.toARTNodes.bind(this);
    this.toARTEdges = this.toARTEdges.bind(this);
    this.ticked = this.ticked.bind(this);
    this.width = Dimensions.get('window').width;
    this.height = Dimensions.get('window').height;
    this.data = [
      { x: 0, y: 0, r: 50, label: 'jean', id: 1 },
      { x: 200, y: 0, r: 75, label: 'marc', id: 2 },
      { x: 0, y: 300, r: 125, label: 'john', id: 3 }
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

  toARTNodes(data) {
    let nodes = [];
    nodes = data.map(item => ({
      x: item.x - item.r,
      y: item.y - item.r,
      radius: item.r,
      label: item.label,
      id: item.id,
    }));
    return nodes;
  }


  toARTEdges(links) {
    let edges = [];
    // we want the line to link the center of the sources and targets
    edges = links.map(item => ({
      x1: item.source.x,
      y1: item.source.y,
      x2: item.target.x,
      y2: item.target.y,
      id: item.id,
    }));
    return edges;
  }

  render() {
    const nodes = this.toARTNodes(this.state.data);
    const edges = this.toARTEdges(this.state.links);
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
