import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { loadState, saveState} from "./localStorage";

const middlewares = window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
    : applyMiddleware(thunk);


const configureStore = () => {
    const persistedState = loadState();
    const store = createStore(
        rootReducer,
        persistedState,
        middlewares,
    );
    store.subscribe(() => {
        saveState(store.getState());
    });

    return store
};

export default configureStore;
