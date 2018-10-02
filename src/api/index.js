import axios from 'axios';
import { UPDATE_POSITION, UPDATE_WEATHER } from '../store/actions/actions';

export const getLocation = (dispatch) => {
    let startPos, latPos, longPos = null;

    const geoSuccess = (position) => {
        startPos = position;
        latPos = startPos.coords.latitude;
        longPos = startPos.coords.longitude;
        console.log('currentPosition', latPos, longPos);
        dispatch({type: UPDATE_POSITION, payload: {latPos, longPos}});
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

export const getCurrentWeather = (lat, long, dispatch) => {
    axios.get(`http://api.apixu.com/v1/current.json?key=4037fd54a5d149739a173015180210&lang=fr&q=${lat},${long}`)
        .then((response) => {
            console.log(response.data);
            dispatch({type: UPDATE_WEATHER, datas: response.data})
        })
        .catch((error) => {
            console.log(error.message);
            throw error;
        })
};




export default getLocation;
