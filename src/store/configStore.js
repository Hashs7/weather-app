import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import persistState, {mergePersistedState} from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import rootReducer from './reducers/rootReducer';


const middlewares = window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
    : applyMiddleware(thunk);


const configureStore = (initialState) => {
    const reducer = compose(
        mergePersistedState()
    )(rootReducer, initialState);

    const storage = adapter(window.localStorage);

    const createPersistentStore = compose(
        middlewares,
        persistState(storage, 'state')
    )(createStore);

    const store = createPersistentStore(reducer);


    /*if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default;
            store.replaceReducer(nextReducer);
        });
    }*/

    return store;

    /*return createStore(
        rootReducer,
        initialState,
        middlewares
    )*/
};

export default configureStore;
