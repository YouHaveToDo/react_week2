import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import word from "./modules/word";

const middleWares = [thunk];
const rootReducer = combineReducers({ word });
const enhancer = applyMiddleware(...middleWares);
const store = createStore(rootReducer, enhancer);

export default store;
