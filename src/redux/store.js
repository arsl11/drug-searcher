import {combineReducers, createStore} from "redux";
import drugsReducer from "./reducers/drugs-reducer";

let reducers = combineReducers({
   drugsPage: drugsReducer,
});

let store = createStore(reducers);

export default store;