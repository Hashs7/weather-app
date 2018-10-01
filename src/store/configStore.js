import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

const middlewares = window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
    : applyMiddleware(thunk);


const configureStore = (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        middlewares
    )
};

export default configureStore;
