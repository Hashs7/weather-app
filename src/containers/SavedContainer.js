import React from 'react'
import { connect } from 'react-redux'
import SavedVue from '../components/Saved/SavedVue';
import {getWeatherByCoordinate, getLocation} from '../api/index';

/**
 *
 * @param state
 * @returns {{currentCity: (string|string), currentCountry: (string|string)}}
 */
const mapStateToProps = state => {
    return {
        currentCity : state.current.city,
        allSavedCity : state.saved.items
    }
};

/**
 *
 * @param dispatch
 * @returns {{dispatch: *}}
 */
const mapDispatchToProps = dispatch => {
    return {
        dispatch: dispatch
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
    const { currentLat, currentLong } = propsFromState;
    return {
        ...propsFromState,
        ...propsFromDispatch,
    }
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(SavedVue)
