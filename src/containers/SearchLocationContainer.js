import React from 'react'
import { connect } from 'react-redux'
import SearchLocation from '../components/SearchLocation';
import { getWeatherByCity } from '../api/index';

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
        getWeather: (city) => getWeatherByCity(city, propsFromDispatch.dispatch),
    }
};

export default connect(null, mapDispatchToProps, mergeProps)(SearchLocation)
