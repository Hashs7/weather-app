import { combineReducers } from 'redux';
import current from './reducers/current';
import saved from './reducers/saved';

const rootReducer = combineReducers({
    current,
    settings: saved
});

export default rootReducer;
