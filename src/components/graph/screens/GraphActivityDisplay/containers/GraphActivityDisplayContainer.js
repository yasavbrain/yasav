import React from 'react';
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';
import * as shape from 'd3-shape';
import * as hierarchy from 'd3-hierarchy';
import * as force from 'd3-force';
import * as zoom from 'd3-zoom';
import { GraphNodeType } from 'yasav/src/const';
import GraphActivityDisplayView from '../views/GraphActivityDisplayView';
import { getAdjacentNodes } from '../actions';

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
    this.data = [];
    this.links = [];
    this.state = {
      data: this.data,
    };
  }

  componentDidMount() {
    this.props.getAdjacentNodes(this.props.centerNodeId, GraphNodeType.TAG)
      .then(() => {
        this.data = this.props.nodesList;
        this.links = this.props.linksList;
        this.force = d3.force.forceSimulation(this.data)
          .force('charge', d3.force.forceManyBody(-300).distanceMax(this.height / 2))
          .force('link', d3.force.forceLink(this.links).distance(200))
          // .force('radial', d3.force.forceRadial(500, this.width / 2, this.height / 2))
          // .force('center', d3.force.forceCenter(this.width / 2, this.height / 2))
          // .force('x', d3.force.forceX().strength(0.2))
          // .force('y', d3.force.forceY().strength(0.2))
          .force('collide', d3.force.forceCollide().strength(1).radius(d => d.r))
          .on('tick', this.ticked);
      });
  }

  // inspired from https://bl.ocks.org/mbostock/1129492
  ticked() {
    this.data.forEach((node) => {
      node.x = Math.max(node.r, Math.min(this.width - node.r, node.x))
      node.y = Math.max(node.r, Math.min(this.height - node.r, node.y))
    })
    this.setState({ data: this.data });
  }

  reset(newCenteralNodeId, nodeType) {
    this.force.stop();

    // gets the new data
    this.props.getAdjacentNodes(newCenteralNodeId.slice(2), nodeType)
      .then(() => {
        this.data = this.props.nodesList;
        this.links = this.props.linksList;
        this.force = d3.force.forceSimulation(this.data)
          .force('charge', d3.force.forceManyBody(-300).distanceMax(this.height / 2))
          .force('link', d3.force.forceLink(this.links).distance(200))
          .force('collide', d3.force.forceCollide().strength(1).radius(d => d.r))
          .on('tick', this.ticked);

        this.setState({
          data: this.data,
        });
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
      nodeType: item.nodeType,
      color: item.color,
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
    const edges = this.toARTEdges(this.links);
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
        centerNodeId={this.props.centerNodeId}
      />
    );
  }
}

const COLORS = ['#78A5A3', '#E1B16A', '#CE5A57'];
function mapStateToProps(state, ownProps) {

  const centerNodeId = state.graph.centerNodeId || ownProps.centerNodeId;
  const centerNodeType = state.graph.centerNodeType || GraphNodeType.TAG; // tag at the launch

  let adjacentNodesList = [];
  let linksList = [];

  const centralNode = {
    id: GraphNodeType.TAG + '_' + centerNodeId,
    label: 'CENTER',
    r: 50,
    x: Math.random() * Dimensions.get('window').width,
    y: Math.random() * Dimensions.get('window').height,
    fx: Dimensions.get('window').width / 2,
    fy: Dimensions.get('window').height / 2,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    nodeType: centerNodeType,
  };

  switch (centerNodeType) {
    case GraphNodeType.TAG:
      adjacentNodesList = state.graph.adjacentActivitiesList.map(activity => ({
        id: GraphNodeType.ACTIVITY + '_' + activity.id,
        label: activity.title,
        r: 50,
        x: Math.random() * Dimensions.get('window').width,
        y: Math.random() * Dimensions.get('window').height,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        nodeType: activity.nodeType,
      }));
      linksList = state.graph.adjacentActivitiesList.map(activity => ({
        id: activity.linkId,
        source: adjacentNodesList.find(node => node.id === GraphNodeType.ACTIVITY + '_' + activity.id),
        target: centralNode,
      }));
      break;

    case GraphNodeType.ACTIVITY: {
      const adjacentInterlocutorsList = state.graph.adjacentInterlocutorsList.map(interlocutor => ({
        id: GraphNodeType.INTERLOCUTOR + '_' + interlocutor.id,
        label: interlocutor.name,
        r: 50,
        x: Math.random() * Dimensions.get('window').width,
        y: Math.random() * Dimensions.get('window').height,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        nodeType: interlocutor.nodeType,
      }));
      const linksInterlocutorList = state.graph.adjacentInterlocutorsList.map(interlocutor => ({
        id: interlocutor.linkId,
        source: adjacentInterlocutorsList.find(node => node.id === GraphNodeType.INTERLOCUTOR + '_' + interlocutor.id),
        target: centralNode,
      }));

      const adjacentTagsList = state.graph.adjacentTagsList.map(tag => ({
        id: GraphNodeType.TAG + '_' + tag.id,
        label: tag.name,
        r: 50,
        x: Math.random() * Dimensions.get('window').width,
        y: Math.random() * Dimensions.get('window').height,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        nodeType: tag.nodeType,
      }));
      const linksTagList = state.graph.adjacentTagsList.map(tag => ({
        id: tag.linkId,
        source: adjacentTagsList.find(node => node.id === GraphNodeType.TAG + '_' + tag.id),
        target: centralNode,
      }));

      adjacentNodesList = adjacentInterlocutorsList.concat(adjacentTagsList);
      linksList = linksInterlocutorList.concat(linksTagList);
      break;
    }

    case GraphNodeType.INTERLOCUTOR:
      adjacentNodesList = state.graph.adjacentActivitiesList.map(activity => ({
        id: GraphNodeType.ACTIVITY + '_' + activity.id,
        label: activity.title,
        r: 50,
        x: Math.random() * Dimensions.get('window').width,
        y: Math.random() * Dimensions.get('window').height,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        nodeType: activity.nodeType,
      }));
      linksList = state.graph.adjacentActivitiesList.map(activity => ({
        id: activity.linkId,
        source: adjacentNodesList.find(node => node.id === GraphNodeType.ACTIVITY + '_' + activity.id),
        target: centralNode,
      }));
      break;

    default:
      break;
  }

  // adding the central node
  const fullNodesList = adjacentNodesList.concat(centralNode);

  return {
    nodesList: fullNodesList,
    linksList,
    centerNodeId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAdjacentNodes: (nodeId, nodeType) => dispatch(getAdjacentNodes(nodeId, nodeType)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GraphActivityDisplayContainer);
