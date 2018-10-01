import { combineReducers } from 'redux';
import current from './reducers/current';
import settings from './reducers/settings';

const rootReducer = combineReducers({
    current,
    settings
});

export default rootReducer;
