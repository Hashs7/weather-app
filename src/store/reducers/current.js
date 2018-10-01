import { UPDATE_POSITION } from '../actions/actions'

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
/*                mailbox: action,
                userMailbox:  action.userMailbox*/
            }
    }
    return state
};

export default current;
