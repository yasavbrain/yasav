import React from 'react';
import { Dimensions } from 'react-native';
import * as shape from 'd3-shape';
import * as hierarchy from 'd3-hierarchy';
import * as force from 'd3-force';
import * as zoom from 'd3-zoom';
import GraphActivityDisplayView from '../views/GraphActivityDisplayView';

const d3 = {
  shape,
  hierarchy,
  force,
  zoom,
};

class GraphActivityDisplayContainer extends React.Component {
  constructor(props) {
    super(props);
    this.toARTNodes = this.toARTNodes.bind(this);
    this.toARTEdges = this.toARTEdges.bind(this);
    this.ticked = this.ticked.bind(this);
    this.reset = this.reset.bind(this);
    this.width = Dimensions.get('window').width;
    this.height = Dimensions.get('window').height;
    this.data = [
      { x: 0, y: 0, r: 50, label: 'jean', id: 1 },
      { x: 200, y: 420, r: 50, label: 'marc', id: 2 },
      { x: 200, y: 200, fx: this.width / 2, fy: this.height / 2, r: 50, label: 'john', id: 3 },
      { x: 253, y: 126, r: 50, label: 'georges', id: 4 },
      { x: 325, y: 463, r: 50, label: 'georges5', id: 5 },
      { x: 320, y: 26, r: 50, label: 'georges6', id: 6 },
      { x: 120, y: 256, r: 50, label: 'georges7', id: 7 },
      { x: 420, y: 126, r: 50, label: 'georges8', id: 8 },
    ];

    this.links = [
      { id: 1, source: this.data[1], target: this.data[2] },
      { id: 2, source: this.data[0], target: this.data[2] },
      { id: 3, source: this.data[3], target: this.data[2] },
      { id: 4, source: this.data[4], target: this.data[2] },
      { id: 5, source: this.data[5], target: this.data[2] },
      { id: 6, source: this.data[6], target: this.data[2] },
      { id: 7, source: this.data[7], target: this.data[2] },
    ];
    this.state = {
      data: this.data,
      links: this.links,
      centralNodeId: this.props.centralNodeId,
    };
  }

  componentDidMount() {
    this.force = d3.force.forceSimulation(this.data)
      .force('charge', d3.force.forceManyBody(-300).distanceMax(this.height / 2))
      .force('link', d3.force.forceLink(this.links).distance(200))
      // .force('radial', d3.force.forceRadial(500, this.width / 2, this.height / 2))
      // .force('center', d3.force.forceCenter(this.width / 2, this.height / 2))
      // .force('x', d3.force.forceX().strength(0.2))
      // .force('y', d3.force.forceY().strength(0.2))
      .force('collide', d3.force.forceCollide().strength(1).radius(d => d.r))
      .on('tick', this.ticked);
  }

  // inspired from https://bl.ocks.org/mbostock/1129492
  ticked() {
    this.data.forEach((node) => {
      node.x = Math.max(node.r, Math.min(this.width - node.r, node.x))
      node.y = Math.max(node.r, Math.min(this.height - node.r, node.y))
    })
    this.setState({ data: this.data });
  }

  reset(newCenteralNodeId) {
    this.force.stop();

    // gets new data
    this.data = [{ x: 0, y: 0, r: 50, label: 'jean', id: 1 },
      { x: 200, y: 420, r: 50, label: 'marc', id: 2 },
      { x: 200, y: 200, r: 50, label: 'john', id: 3 },
      { x: 253, y: 126, r: 50, label: 'georges', id: 4 },
      { x: 325, y: 463, r: 50, fx: this.width / 2, fy: this.height / 2, label: 'georges5', id: 5 },
    ];

    this.links = [
      { id: 1, source: this.data[0], target: this.data[4] },
      { id: 2, source: this.data[1], target: this.data[4] },
      { id: 3, source: this.data[2], target: this.data[4] },
      { id: 4, source: this.data[3], target: this.data[4] },
    ];

    this.force = d3.force.forceSimulation(this.data)
      .force('charge', d3.force.forceManyBody(-300).distanceMax(this.height / 2))
      .force('link', d3.force.forceLink(this.links).distance(200))
      .force('collide', d3.force.forceCollide().strength(1).radius(d => d.r))
      .on('tick', this.ticked);

    this.setState({
      data: this.data,
      links: this.links,
      centralNodeId: newCenteralNodeId,
    });
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
      <GraphActivityDisplayView
        goBack={this.props.goBack}
        width={this.width}
        height={this.height}
        nodes={nodes}
        edges={edges}
        reset={this.reset}
        navigateToActivityDisplayScreen={this.props.navigateToActivityDisplayScreen}
        navigateToInterlocutorDisplayScreen={this.props.navigateToInterlocutorDisplayScreen}
        centralNodeId={this.state.centralNodeId}
      />
    );
  }
}

export default GraphActivityDisplayContainer;
