import { LoaderStatus } from "../Type";

export const LoaderAction = (data)=>{
  
    return {
      type: LoaderStatus,
      payload: data
    };
  }