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

const totalReducer = (state = 0, action) => {
    console.log("totalReducer payload", action.payload)
    switch(action.type) {
        case 'ORDER_TOTAL':
            return action.payload
        default: 
            return state;
        }

}


const cartReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_PIZZA_TO_CART':
            return [...state, {name: action.payload.name, price: action.payload.price}];

        case 'DELETE_PIZZA_ORDER':
            console.log('trying to delete cart item');
            const newState = state.filter((pizza, index) => {
                return index !== parseInt(action.payload)
            })
            return newState
        default: 
            return state;
    }

}

const storeInstance = createStore(
    combineReducers({
        pizzaReducer,
        cartReducer, 
        totalReducer
    }),
    applyMiddleware(logger)
)
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
