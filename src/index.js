import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/configStore';
import registerServiceWorker from './registerServiceWorker';
import generateInitialState from './store/initState';

const run = () => {
    let store = configureStore(generateInitialState());
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
};

document.addEventListener('DOMContentLoaded', () => {
    run();
    registerServiceWorker();
});

