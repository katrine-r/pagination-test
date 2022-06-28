import { combineReducers } from "redux";
import { appReducer } from "./products";

export default combineReducers({
    products: appReducer
})