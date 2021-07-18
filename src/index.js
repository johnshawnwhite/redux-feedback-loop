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

const feelingReducer = ( state =[], action) => {
    if (action.type === "ADD_NEW_FEELING") {
        console.log(`The feeling added is ${action.payload}`);
        return action.payload;
    }
    return state;
}
const understandingReducer = ( state =[], action) => {
    if (action.type === "ADD_NEW_UNDERSTANDING") {
        console.log(`The understanding added is ${action.payload}`);
        return action.payload;
    }
    return state;
}
const supportReducer = ( state =[], action) => {
    if (action.type === "ADD_NEW_SUPPORT") {
        console.log(`The support added is ${action.payload}`);
        return action.payload;
    }
    return state;
}
const commentsReducer = ( state =[], action) => {
    if (action.type === "ADD_NEW_COMMENT") {
        console.log(`The comment added is ${action.payload}`);
        return action.payload;
    }
    return state;
}
// storeInstance goes here
//reducers also go in here
const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer
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