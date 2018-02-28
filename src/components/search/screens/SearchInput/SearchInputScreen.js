import React from 'react';
import SearchInputContainer from './containers/SearchInputContainer';

export default class SearchInputScrenn extends React.Component {
  
  render() {
    return (
      <SearchInputContainer
        requestType={this.props.requestType}
      />
    );
  }
}
