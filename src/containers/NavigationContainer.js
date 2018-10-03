import React from 'react'
import { connect } from 'react-redux'
import Navigation from '../ui/Navigation';
import { CHANGE_INDEX_VUE } from '../store/actions/actions'

/**
 *
 * @param state
 * @returns {{vueIndex: *}}
 */
const mapStateToProps = state => {
    return {
        vueIndex: state.current.vueIndex
    }
};

/**
 *
 * @param dispatch
 * @returns {{dispatch: *}}
 */
const mapDispatchToProps = dispatch => {
    return {
        changeIndexHandle: (i) => dispatch({type: CHANGE_INDEX_VUE, index: i}),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
