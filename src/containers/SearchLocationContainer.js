import React from 'react'
import { connect } from 'react-redux'
import SearchLocationVue from '../components/Search/SearchLocationVue';
import { getWeatherByCity, getAutoComplete } from '../api/index';


const mapStateToProps = state => {
    return {
        autoCompleteData: state.current.autoComplete
    }
};

/**
 *
 * @param dispatch
 * @returns {{dispatch: *}}
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

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(SearchLocationVue)
