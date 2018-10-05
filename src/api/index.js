import axios from 'axios';
import { UPDATE_POSITION, UPDATE_WEATHER, UPDATE_AUTOCOMPLETE, UPDATE_FORECAST, ADD_SAVED_ITEM } from '../store/actions/actions';

const API_KEY = '4037fd54a5d149739a173015180210';

export const getLocation = (dispatch) => {
    console.log('trigger');
    let startPos, latPos, longPos = null;

    const geoSuccess = (position) => {
        startPos = position;
        latPos = startPos.coords.latitude;
        longPos = startPos.coords.longitude;
        console.log('currentPosition', latPos, longPos);
        dispatch({type: UPDATE_POSITION, payload: {latPos, longPos}});
        getWeatherByCoordinate(latPos, longPos, dispatch);
        console.log('dispatch');

    };

    const geoError = (error) => {
        switch(error.code) {
            case error.TIMEOUT:
                // The user didn't accept the callout
                console.log('he said NOOOO');
                break;
        }
    };

    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
};

export const getWeatherByCoordinate = (lat, long, dispatch) => {
    axios.get(`http://api.apixu.com/v1/current.json?key=${API_KEY}&lang=fr&q=${lat},${long}`)
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
    // Normalize accents
    const normalizeCity = city.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    axios.get(`http://api.apixu.com/v1/current.json?key=${API_KEY}&lang=fr&q=${normalizeCity}`)
        .then((response) => {
            console.log(response.data);
            dispatch({type: UPDATE_WEATHER, data: response.data})
        })
        .catch((error) => {
            console.log(error.message);
            throw error;
        });

    getForecast(city, dispatch);
};

export const getAutoComplete = (value, dispatch) => {
    // Normalize accents
    const normalizeCity = value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    axios.get(`http://api.apixu.com/v1/search.json?key=${API_KEY}&lang=fr&q=${normalizeCity}`)
    .then((response) => {
        console.log('getAutoComplete', response.data);
        dispatch({type: UPDATE_AUTOCOMPLETE, data: response.data})
    })
    .catch((error) => {
        console.log(error.message);
        throw error;
    });
};

export const getForecast = (city, dispatch) => {
    axios.get(`http://api.apixu.com/v1/forecast.json?key=${API_KEY}&lang=fr&q=${city}&days=5`)
        .then((response) => {
            console.log('getForecast', response.data);
            dispatch({type: UPDATE_FORECAST, data: response.data})
        })
        .catch((error) => {
            console.log(error.message);
            throw error;
        });
    console.log('forecast')
};

export const addSavedItem = (city, country, dispatch) => {
    const newItem = city;
    localStorage.setItem('savedItems', newItem);
    dispatch({type: ADD_SAVED_ITEM, item: newItem})
};
