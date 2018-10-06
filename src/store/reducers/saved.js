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
            console.log(state);
            if(!state.items){
                return {
                    ...state,
                    items: [action.item]
                }
            }
            return {
                ...state,
                items: [...state.items, action.item]
            }
    }
    return state
};

export default saved;
