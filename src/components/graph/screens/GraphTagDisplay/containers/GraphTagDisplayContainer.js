import React from 'react';
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';
import * as shape from 'd3-shape';
import * as hierarchy from 'd3-hierarchy';
import * as force from 'd3-force';
import * as zoom from 'd3-zoom';
import Colors from 'yasav/src/styles/Colors';
import GraphTagDisplayView from '../views/GraphTagDisplayView';
import { getAllWeightedTags } from '../actions';

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
    this.ticked = this.ticked.bind(this);
    this.width = Dimensions.get('window').width;
    this.height = Dimensions.get('window').height;
    this.data = [];
    this.state = {
      data: this.data,
    };
  }

  componentDidMount() {
    this.props.getAllWeightedTags()
      .then(() => {
        this.data = this.props.tagList; // we do not want to write to props
        this.force = d3.force.forceSimulation(this.data)
        // .force('charge', d3.force.forceManyBody(-300))
        // .force('link', d3.force.forceLink(this.state.links))
          .force('center', d3.force.forceCenter(this.width / 2, this.height / 2))
          .force('x', d3.force.forceX().strength(0.2))
          .force('y', d3.force.forceY().strength(0.2))
          .force('collide', d3.force.forceCollide().radius(d => d.r))
          .on('tick', this.ticked);
      });
  }

  componentWillUnmount() {
    this.force.stop();
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
      color: item.color,
    }));
    return nodes;
  }

  render() {
    const nodes = this.toARTNodes(this.state.data);
    return (
      <GraphTagDisplayView
        goBack={this.props.goBack}
        width={this.width}
        height={this.height}
        nodes={nodes}
        navigateToGraphActivityDisplayScreen={this.props.navigateToGraphActivityDisplayScreen}
      />
    );
  }
}

function pickColor(weight) {
  if (weight < 2) {
    return Colors.tagLight;
  } else if (weight >= 2 && weight < 5) {
    return Colors.tag;
  }
  return Colors.tagDark;
}

function mapStateToProps(state) {
  const tagList = state.graph.weightedTagList.map(tag => ({
    id: tag.id,
    label: tag.name,
    r: Math.max(0, 1 + Math.log10(tag.weight)) * 50,
    x: Math.random() * Dimensions.get('window').width,
    y: Math.random() * Dimensions.get('window').height,
    color: pickColor(tag.weight),
  }));
  return {
    tagList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllWeightedTags: () => dispatch(getAllWeightedTags()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GraphTagDisplayContainer);
