import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// import redux
//import logger
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';



function feedbackReducer( state ={}, action) {
    return state;
}
// storeInstance goes here
//reducers also go in here
const storeInstance = createStore(
    combineReducers({
        feedbackReducer
        //feeling
        //understanding
        //support
        //comments
    }),
    //apply logger here
    applyMiddleware(logger),
);

// TODO: add Provider to App
ReactDOM.render(
<Provider store=
{storeInstance}>
    <App />
    </Provider>,
 document.getElementById('root'));