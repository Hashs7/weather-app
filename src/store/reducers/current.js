import {UPDATE_POSITION, UPDATE_WEATHER, CHANGE_INDEX_VUE, VUE_HOME, UPDATE_AUTOCOMPLETE} from '../actions/actions'

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
            const locationName      = action.datas.location.name;
            const locationCountry   = action.datas.location.country;
            const currentImg        = action.datas.current.condition.icon;
            const currentCondition  = action.datas.current.condition.text;
            const currentTemp       = action.datas.current.temp_c;
            const currentHumidity   = action.datas.current.humidity;

            return {
                ...state,
                city: locationName,
                country: locationCountry,
                conditionName: currentCondition,
                temperature: currentTemp,
                humidity: currentHumidity,
                icon: currentImg,
                vueIndex: VUE_HOME
            };

        case CHANGE_INDEX_VUE:
            return {
                ...state,
                vueIndex: action.index
            };

        case UPDATE_AUTOCOMPLETE:
            return {
                ...state,
                autoComplete: action.datas
            };

        default:
            return state;
    }
    return state
};

export default current;
