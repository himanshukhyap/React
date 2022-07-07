import { Auth } from "../../API/Api";
import {   UserdataType } from "../Type";

// export const GetAuth = (data) => {

//   return (dispatch)=>{  Auth(dispatch,data)  }
 
// };


export const GetAuth1 = (data)=>{
  
  return {
    type: UserdataType,
    payload: data
  };
}