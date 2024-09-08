import { createStore } from "redux";
import RootReducer from "./Reducer/RootReducer";

 const Store= createStore(RootReducer)
 export default Store;