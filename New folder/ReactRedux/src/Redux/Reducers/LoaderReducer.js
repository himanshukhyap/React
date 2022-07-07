import { LoaderStatus } from "../Type";

export const LoaderReducer = (state = false, action) => {

    switch (action.type) {
      case LoaderStatus:
        return action.payload;
     
      default:
        return state;
    }
  };