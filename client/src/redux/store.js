import {createStore, combineReducers, applyMiddleware} from 'redux';

import {composeWithDevTools} from 'redux-devtools-extension';
import {thunk} from 'redux-thunk';
import { getProductReducer , getProductDetailsReducer} from './reducers/pruductReduce';
import { cartReducer } from './reducers/CartrReducer';

const reducer=combineReducers({
    getProducts : getProductReducer,
    getProductDetails: getProductDetailsReducer,
    cartItems: cartReducer
})

const middleware=[thunk];

const store= createStore(
     reducer,
     composeWithDevTools(applyMiddleware(...middleware))
)
export default store;