import React from 'react'
import { connect } from 'react-redux'
import WeatherVue from '../components/Weather/WeatherVue';
import { getWeatherByCoordinate, getLocation, addSavedItem, removeSavedItem } from '../api/index';
import { CHANGE_INDEX_VUE } from '../store/actions/actions';

/**
 *
 * @param state
 * @returns {{currentCity: (string|string), currentCountry: (string|string), currentLat: string, currentLong: string, currentConditionName: string, currentTemp: *, currentHumidity: *, currentImgCode: (string|string), currentWind: *, currentForecast: *, savedCities: *}}
 */
const mapStateToProps = state => {
    return {
        currentCity          : state.current.city,
        currentCountry       : state.current.country,
        currentLat           : state.current.lat,
        currentLong          : state.current.long,
        currentConditionName : state.current.conditionName,
        currentTemp          : state.current.temperature,
        currentHumidity      : state.current.humidity,
        currentImgCode       : state.current.icon,
        currentWind          : state.current.wind,
        currentForecast      : state.current.forecast,
        savedCities          : state.saved.items
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
 * @returns {{getUserPosition: (function(): void), getWeather: (function(): void), toggleSavedPosition: toggleSavedPosition}}
 */
const mergeProps  = (propsFromState, propsFromDispatch, ownProps) => {
    const { currentLat, currentLong, currentCity, savedCities } = propsFromState;
    return {
        ...propsFromState,
        ...propsFromDispatch,
        getUserPosition: () => getLocation(propsFromDispatch.dispatch),
        getWeather: () => getWeatherByCoordinate(currentLat, currentLong, propsFromDispatch.dispatch),
        toggleSavedPosition: () => {
            // Check if is already saved
            if(!savedCities || !savedCities.filter(city => city === currentCity).length){
                addSavedItem(currentCity, propsFromDispatch.dispatch);
            }else{
                removeSavedItem(currentCity, propsFromDispatch.dispatch);
            }
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(WeatherVue)
