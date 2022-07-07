import { GetTaskType } from "../Type";
let initialstate = [{TaskId: "", Task: '', Date: '', EditDate: '', Complete: "", UserId: ""}]

export const GettaskListReducer = (state = null , action) => {
    switch (action.type) {
        case GetTaskType:
          return action.payload;
        default:
          return state;
      }

    
  };
  
