import {combineReducers, createStore} from "redux";
import drugsReducer from "./reducers/drugs-reducer";
import { reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
   drugsPage: drugsReducer,
   form: formReducer
});

let store = createStore(reducers);

export default store;