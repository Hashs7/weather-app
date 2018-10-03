import { ADD_SAVED_ITEM, REMOVE_SAVED_ITEM } from '../actions/actions'

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
export const saved = (state = {}, action) => {
    switch(action.type) {
        case ADD_SAVED_ITEM:
            const newItem = action.item;

            return {
                ...state,
                items: {...state.items, newItem}
            }
    }
    return state
};

export default saved;
