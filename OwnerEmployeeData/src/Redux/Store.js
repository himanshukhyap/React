import { createStore } from "redux";
import IndexReducer from "./Reducer/IndexReducer";

const Store = createStore(IndexReducer);
export default Store;
