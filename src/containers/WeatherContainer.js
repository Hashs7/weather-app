import React from 'react'
import { connect } from 'react-redux'
import WeatherBox from '../components/WeatherBox';
import getLocation from '../api/index';

/**
 *
 * @param state
 * @returns {{currentCity: (string|string), currentCountry: (string|string)}}
 */
const mapStateToProps = state => {
    return {
        currentCity: state.current.city,
        currentCountry: state.current.country,
    }
};

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
        getUserPosition: () => getLocation(propsFromDispatch.dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(WeatherBox)
