
export const getdataReducer = (state = null, action) => {

  switch (action.type) {
    case "fetchdata":
      return action.payload;
   
    default:
      return state;
  }
};