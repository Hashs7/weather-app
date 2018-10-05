import {UPDATE_POSITION, UPDATE_WEATHER, CHANGE_INDEX_VUE, VUE_HOME, UPDATE_AUTOCOMPLETE, UPDATE_FORECAST} from '../actions/actions'

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
                long: action.payload.longPos
            };

        case UPDATE_WEATHER:
            const locationName      = action.data.location.name;
            const locationCountry   = action.data.location.country;
            const currentImg        = action.data.current.condition.icon;
            const currentCondition  = action.data.current.condition.text;
            const currentTemp       = action.data.current.temp_c;
            const currentWind       = action.data.current.wind_kph;
            const currentHumidity   = action.data.current.humidity;
            const currentForecast   = action.data.forecast.forecastday;

            return {
                ...state,
                city: locationName,
                country: locationCountry,
                conditionName: currentCondition,
                temperature: currentTemp,
                humidity: currentHumidity,
                icon: currentImg,
                wind: currentWind,
                vueIndex: VUE_HOME,
                forecast: currentForecast
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

        case UPDATE_FORECAST:
            return {
                ...state,
            };

        default:
            return state;
    }
    return state
};

export default current;
