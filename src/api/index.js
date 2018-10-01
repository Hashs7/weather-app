import { UPDATE_POSITION } from '../store/actions/actions';

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

export default getLocation;
