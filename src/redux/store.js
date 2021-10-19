import {applyMiddleware, combineReducers, createStore} from "redux";
import drugsReducer from "./reducers/drugs-reducer";
import { reducer as formReducer} from 'redux-form'
import {cartReducer} from "./reducers/cart-reducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
   drugsPage: drugsReducer,
   form: formReducer,
   cartPage: cartReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;