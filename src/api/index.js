import axios from 'axios';
import {UPDATE_POSITION, UPDATE_WEATHER, UPDATE_AUTOCOMPLETE, ADD_SAVED_ITEM} from '../store/actions/actions';

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
        getWeatherByCoordinate(latPos, longPos, dispatch)
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
            dispatch({type: UPDATE_WEATHER, datas: response.data})
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
            dispatch({type: UPDATE_WEATHER, datas: response.data})
        })
        .catch((error) => {
            console.log(error.message);
            throw error;
        });
};

export const getAutoComplete = (value, dispatch) => {
    // Normalize accents
    const normalizeCity = value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    axios.get(`http://api.apixu.com/v1/search.json?key=${API_KEY}&lang=fr&q=${normalizeCity}`)
    .then((response) => {
        console.log('getAutoComplete', response.data);
        dispatch({type: UPDATE_AUTOCOMPLETE, datas: response.data})
    })
    .catch((error) => {
        console.log(error.message);
        throw error;
    });
};

export const addSavedItem = (city, country, dispatch) => {
    const newItem = city;
    localStorage.setItem('savedItems', newItem);
    dispatch({type: ADD_SAVED_ITEM, item: newItem})
};





export default getLocation;
