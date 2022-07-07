import { GetTaskList } from "../../API/Api";
import { GetTaskType } from "../Type";


export const GetTaskList1 = (data) => {

  return (dispatch)=>{  GetTaskList(dispatch,data)  }
 
};


export const GetTaskList2 = (data)=>{
  
  return {
    type: GetTaskType,
    payload: data
  };
}