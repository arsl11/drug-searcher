import {combineReducers, createStore} from "redux";
import drugsReducer from "./reducers/drugs-reducer";
import {cartReducer} from "./reducers/cart-reducer";

let reducers = combineReducers({
   drugsPage: drugsReducer,
   cartPage: cartReducer
});

let store = createStore(reducers);

store.subscribe(() => {
   localStorage.setItem('cartState', JSON.stringify(store.getState().cartPage))
})

export default store;