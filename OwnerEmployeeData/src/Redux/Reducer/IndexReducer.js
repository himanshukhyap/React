import { combineReducers } from "redux";
import Reducer, { wrongInput, loader,  OwnerData } from "./Reducer";

const IndexReducer = combineReducers({ Reducer , OwnerData, loader, wrongInput});
export default IndexReducer;
