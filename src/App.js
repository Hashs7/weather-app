import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import NavigationContainer from './containers/NavigationContainer';
import { getLocation } from './api/index';

const WeatherApp = styled.div`
    height: 100vh;
    background-color: #6ca3ff;
    font-size: 62,5%;
    font-family: 'Barlow', sans-serif;
    color: #3C3440;
`;

class App extends Component {
    componentDidMount(){
        this.props.getUserPosition();
    }
    render() {
        return (
          <WeatherApp>
            <NavigationContainer />
          </WeatherApp>
        );
    }
}

/**
 *
 * @param dispatch
 * @returns {{dispatch: *}}
 */
const mapDispatchToProps = dispatch => {
    return {
        dispatch: dispatch,
    }
};

/**
 *
 * @param propsFromState
 * @param propsFromDispatch
 * @param ownProps
 * @returns {{getUserPosition: (function(): void)}}
 */
const mergeProps  = (propsFromState, propsFromDispatch, ownProps) => {
    return {
        ...propsFromState,
        ...propsFromDispatch,
        getUserPosition: () => getLocation(propsFromDispatch.dispatch),
    }
};
export default connect(null, mapDispatchToProps, mergeProps)(App);
