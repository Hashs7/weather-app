import { combineReducers } from 'redux';
import current from './current';
import settings from './settings';

const rootReducer = combineReducers({
    current,
    settings
});

export default rootReducer
