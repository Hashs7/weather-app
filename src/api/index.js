import axios from 'axios';
import { UPDATE_POSITION, UPDATE_WEATHER, UPDATE_AUTOCOMPLETE, REMOVE_SAVED_ITEM, ADD_SAVED_ITEM } from '../store/actions/actions';
import { API_URL_FORECAST, API_URL_SEARCH } from "../constantes";

export const getLocation = (dispatch) => {
    const geoSuccess = (position) => {
        const latPos = position.coords.latitude;
        const longPos = position.coords.longitude;
        dispatch({type: UPDATE_POSITION, payload: {latPos, longPos}});
        getWeatherByCoordinate(latPos, longPos, dispatch);
    };

    const geoError = (error) => {
        if (error.TIMEOUT){
            // The user didn't accept the callout
            console.log('User said NOOOO');
        }
    };

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, options);
};

export const getWeatherByCoordinate = (lat, long, dispatch) => {
    axios.get(API_URL_FORECAST + lat + ',' + long)
        .then((response) => {
            console.log(response.data);
            dispatch({type: UPDATE_WEATHER, data: response.data})
        })
        .catch((error) => {
            console.log(error.message);
            throw error;
        });
};

export const getWeatherByCity = (city, dispatch) => {
    if (!city){return}
    // Normalize accents
    const normalizeCity = city.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    axios.get(API_URL_FORECAST + normalizeCity)
        .then((response) => {
            console.log(response.data);
            dispatch({type: UPDATE_WEATHER, data: response.data})
        })
        .catch((error) => {
            console.log(error.message);
            throw error;
        });
};

export const getAutoComplete = (value, dispatch) => {
    if (!value) { return }
    // Normalize accents
    const normalizeCity = value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    axios.get(API_URL_SEARCH + normalizeCity)
        .then((response) => {
            console.log('getAutoComplete', response.data);
            dispatch({type: UPDATE_AUTOCOMPLETE, data: response.data})
        })
        .catch((error) => {
            console.log(error.message);
            throw error;
        });
};

export const addSavedItem = (item, dispatch) => {
    dispatch({type: ADD_SAVED_ITEM, item})
};

export const removeSavedItem = (item, dispatch) => {
    dispatch({type: REMOVE_SAVED_ITEM, item})
};
