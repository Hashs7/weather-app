// import { SELECT_MAILBOX } from '../actions/actions'

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
export const saved = (state = {}, action) => {
    switch(action.type) {
        case 'SELECT_MAILBOX':
            return {
                ...state,
/*                mailbox: action,
                userMailbox:  action.userMailbox*/
            }
    }
    return state
};

export default saved;
