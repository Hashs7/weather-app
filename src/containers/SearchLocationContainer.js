import React from 'react'
import { connect } from 'react-redux'
import SearchLocationVue from '../components/Search/SearchLocationVue';
import { getWeatherByCity, getAutoComplete } from '../api/index';

/**
 *
 * @param state
 * @returns {{autoCompleteData: *}}
 */
const mapStateToProps = state => {
    return {
        autoCompleteData: state.current.autoComplete
    }
};

/**
 *
 * @param dispatch
 * @returns {{autoCompleteHandle: (function(*=): void), dispatch: *}}
 */
const mapDispatchToProps = dispatch => {
    return {
        autoCompleteHandle: (value) => getAutoComplete(value, dispatch),
        dispatch: dispatch,
    }
};

/**
 *
 * @param propsFromState
 * @param propsFromDispatch
 * @returns {{getWeather: (function(*=): void)}}
 */
const mergeProps  = (propsFromState, propsFromDispatch) => {
    return {
        ...propsFromState,
        ...propsFromDispatch,
        getWeather: (city) => getWeatherByCity(city, propsFromDispatch.dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(SearchLocationVue)
