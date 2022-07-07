import { combineReducers } from "redux";
import { getdataReducer } from "./Reducer";
import { LoaderReducer } from "./LoaderReducer"
import { GettaskListReducer } from "./GetTaskReducer"
import {UserReducer} from "./UserReducer"
const RootReducer = combineReducers({ getdataReducer, LoaderReducer,UserReducer,GettaskListReducer });
export default RootReducer;
