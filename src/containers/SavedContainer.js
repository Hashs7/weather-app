import { connect } from 'react-redux'
import SavedVue from '../components/Saved/SavedVue';
import { getWeatherByCity } from '../api/index';
import {CHANGE_INDEX_VUE, REMOVE_SAVED_ITEM} from "../store/actions/actions";

/**
 *
 * @param state
 * @returns {{currentCity: (string|*|string), allSavedCity: *}}
 */
const mapStateToProps = state => {
    return {
        currentCity : state.current.city,
        allSavedCity : state.saved.items
    }
};

/**
 *
 * @param dispatch
 * @returns {{dispatch: *, getWeather: (function(*=): void), deleteSavedItem: (function(*): *)}}
 */
const mapDispatchToProps = dispatch => {
    return {
        dispatch: dispatch,
        goToVue: (i) => dispatch({type: CHANGE_INDEX_VUE, index: i}),
        getWeather: (city) => getWeatherByCity(city, dispatch),
        deleteSavedItem: (item) => dispatch({type: REMOVE_SAVED_ITEM, item})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedVue)
