import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// import redux

import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


// storeInstance goes here
//reducers also go in here
const storeInstance = createStore(
    combineReducers({
        //feeling
        //understanding
        //support
        //comments
    }),
    applyMiddleware(logger),
);

// TODO: add Provider to App
ReactDOM.render(
<Provider store=
{storeInstance}>
    <App />
    </Provider>,
 document.getElementById('root'));