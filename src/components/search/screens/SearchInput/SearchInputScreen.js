import React from 'react';
import { GenericHeader } from 'yasav/src/viewElements/shared/Header';
import SearchInputContainer from './containers/SearchInputContainer'

export default class SearchInputScreen extends React.Component{
    render () {
        console.log('SearchInputScreen')
        const { goBack, state } = this.props.navigation
        console.log(this.props.navigation.state.params)
        return (
            <SearchInputContainer
            goBack = {this.props.navigation.goBack}
            requestType = {this.props.navigation.state.params}
            />

        );
    }
}

