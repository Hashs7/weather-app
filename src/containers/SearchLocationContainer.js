import { connect } from 'react-redux'
import SearchLocationVue from '../components/Search/SearchLocationVue';
import { getWeatherByCity, getAutoComplete } from '../api/index';
import {CHANGE_INDEX_VUE, DELETE_SUGGESTION} from "../store/actions/actions";

/**
 *
 * @param state
 * @returns {{autoCompleteData: *}}
 */
const mapStateToProps = state => {
    return {
        autoCompleteData: state.current.autoComplete
    }
};

/**
 *
 * @param dispatch
 * @returns {{autoCompleteHandle: (function(*=): void), dispatch: *}}
 */
const mapDispatchToProps = dispatch => {
    return {
        autoCompleteHandle: (value) => getAutoComplete(value, dispatch),
        goToVue: (i) => dispatch({type: CHANGE_INDEX_VUE, index: i}),
        deleteSuggest: () => dispatch({type: DELETE_SUGGESTION}),
        dispatch: dispatch,
    }
};

/**
 *
 * @param propsFromState
 * @param propsFromDispatch
 * @returns {{getWeather: (function(*=): void)}}
 */
const mergeProps  = (propsFromState, propsFromDispatch) => {
    return {
        ...propsFromState,
        ...propsFromDispatch,
        getWeather: (city) => getWeatherByCity(city, propsFromDispatch.dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(SearchLocationVue)
