import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const pizzaReducer = (state = [], action) => {
    if (action.type === 'ADD_PIZZA_TO_STORE') {
        return action.payload
    }
    return state
}

const cartReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_PIZZA_TO_CART':
            return [...state, {name: action.payload.name, price: action.payload.price}];
        default: 
            return state;
    }
}

const storeInstance = createStore(
    combineReducers({
        pizzaReducer,
        cartReducer
    }),
    applyMiddleware(logger)
)
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
