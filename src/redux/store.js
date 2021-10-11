import {combineReducers, createStore} from "redux";
import drugsReducer from "./reducers/drugs-reducer";
import { reducer as formReducer} from 'redux-form'
import {cartReducer} from "./reducers/cart-reducer";

let reducers = combineReducers({
   drugsPage: drugsReducer,
   form: formReducer,
   cartPage: cartReducer
});

let store = createStore(reducers);

export default store;