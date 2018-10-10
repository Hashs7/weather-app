import {
    UPDATE_POSITION,
    UPDATE_WEATHER,
    CHANGE_INDEX_VUE,
    VUE_HOME,
    UPDATE_AUTOCOMPLETE
} from '../actions/actions'

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
export const current = (state = {}, action) => {
    switch(action.type) {
        case UPDATE_POSITION:
            return {
                ...state,
                lat: action.payload.latPos,
                long: action.payload.longPos,
                isLocation: true
            };

        case UPDATE_WEATHER:
            return {
                ...state,
                city: action.data.location.name,
                country: action.data.location.country,
                conditionName: action.data.current.condition.text,
                temperature: action.data.current.temp_c,
                humidity: action.data.current.humidity,
                icon: action.data.current.condition.code,
                wind: action.data.current.wind_kph,
                vueIndex: VUE_HOME,
                forecast: action.data.forecast.forecastday
            };

        case CHANGE_INDEX_VUE:
            return {
                ...state,
                vueIndex: action.index
            };

        case UPDATE_AUTOCOMPLETE:
            return {
                ...state,
                autoComplete: action.data
            };
        default:
            return state;
    }
};

export default current;
