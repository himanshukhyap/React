import { UserdataType } from "../Type";

export const UserReducer = (state = null , action) => {

    switch (action.type) {
      case UserdataType:
        return action.payload;
      default:
        return state;
    }
  };