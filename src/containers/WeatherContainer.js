import React from 'react'
import { connect } from 'react-redux'
import WeatherVue from '../components/Weather/WeatherVue';
import { getWeatherByCoordinate, getLocation, addSavedItem} from '../api/index';
import { CHANGE_INDEX_VUE } from '../store/actions/actions';

/**
 *
 * @param state
 * @returns {{currentCity: (string|*|string), currentCountry: (string|string), currentLat: string, currentLong: string, currentConditionName: (*|string), currentTemp: *, currentHumidity, currentImg: (string|string), currentWind: *, currentTempFeel: *}}
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
        currentImgCode          : state.current.icon,
        currentWind             : state.current.wind,
        currentForecast         : state.current.forecast
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
    const { currentLat, currentLong, currentCity, currentCountry } = propsFromState;
    return {
        ...propsFromState,
        ...propsFromDispatch,
        getUserPosition: () => getLocation(propsFromDispatch.dispatch),
        getWeather: () => getWeatherByCoordinate(currentLat, currentLong, propsFromDispatch.dispatch),
        addSavedPosition: () => addSavedItem(currentCity, currentCountry, propsFromDispatch.dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(WeatherVue)
