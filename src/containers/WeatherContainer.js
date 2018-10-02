import React from 'react'
import { connect } from 'react-redux'
import WeatherBox from '../components/WeatherBox';
import {getWeatherByCoordinate, getLocation} from '../api/index';
import { CHANGE_INDEX_VUE } from '../store/actions/actions';

/**
 *
 * @param state
 * @returns {{currentCity: (string|string), currentCountry: (string|string)}}
 */
const mapStateToProps = state => {
    return {
        currentCity             : state.current.city,
        currentCountry          : state.current.country,
        currentLat              : state.current.lat,
        currentLong             : state.current.long,
        currentConditionName    : state.current.conditionName,
        currentTemp             : state.current.temperature,
        currentHumidity         : state.current.humidity,
        currentImg              : state.current.icon,
    }
};

/**
 *
 * @param dispatch
 * @returns {{dispatch: *}}
 */
const mapDispatchToProps = dispatch => {
    return {
        goToVue: (i) => dispatch({type: CHANGE_INDEX_VUE, index: i}),
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
        getUserPosition: () => getLocation(propsFromDispatch.dispatch),
        getWeather: () => getWeatherByCoordinate(currentLat, currentLong, propsFromDispatch.dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(WeatherBox)
