import axios from 'axios';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { GetTaskList2 } from '../Redux/Actions/GetTaskListAction';
import { LoaderAction } from '../Redux/Actions/LoaderAction';
import { GetAuth1 } from '../Redux/Actions/UserAction';
import { AuthUrl, DeleteTaskUrl, GetTaskListUrl, PostTaskUrl, UpdateTaskurl } from './Url';


async function Auth(dispatch, data) {
  dispatch(LoaderAction(true))
  axios.post(AuthUrl, data)
    .then(function (response) {
      if (response.data == null) {
        dispatch(GetAuth1(false))
        sessionStorage.setItem("UserLogin", JSON.stringify(null));
      }
      if (response.data != null) {
        dispatch(GetAuth1(response.data))
        sessionStorage.setItem("UserLogin", response.data.UserId);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Login Success',
          showConfirmButton: false,
          timer: 2000
        })
        
       

      }
      dispatch(LoaderAction(false))
    })
    .catch(function (error) {
      dispatch(LoaderAction(false))
      Swal.fire(
        'The Internet?',
        'That thing is still around?',
        'question'
      )
    
    });
}

async function GetTaskList(dispatch,id) {

 
  try {
    const response = await axios.get(GetTaskListUrl+id);

    dispatch(GetTaskList2(response.data))
    dispatch(LoaderAction(false))
  } catch (error) {
    dispatch(LoaderAction(false))
    console.error(error);
  }
}

async function DeleteTask(dispatch ,id) {

axios.delete(DeleteTaskUrl+id)
    .then(response =>GetTaskList(dispatch, JSON.parse(sessionStorage.getItem("UserLogin"))))
    .catch(error => {
        
        console.error('There was an error!', error);
    });
}


async function TaskStatus(dispatch, data) {

let obj = {...data, Complete : !data.Complete}
 
  axios.put(UpdateTaskurl, obj)
    .then(function (response) {
      
      GetTaskList(dispatch,sessionStorage.getItem("UserLogin"))

      }
     
    )
    .catch(function (error) {
    
    
    });
}

async function TaskUpdate(dispatch, data) {
  // console.log(data);
  // console.log(data[`${data.TaskName}`]);
  let obj =  {...data.PreData,Task:data[`${data.TaskName}`]}
// console.log(obj);
    axios.put(UpdateTaskurl, obj)
      .then(function (response) {
        
        GetTaskList(dispatch,sessionStorage.getItem("UserLogin"))
  
        }
       
      )
      .catch(function (error) {
      console.log(error);
      
      });
  }


  async function PostTask(dispatch, data) {
  // console.log(data);
    // console.log(data[`${data.TaskName}`]);
    let obj =  {...data,Complete:false,UserId:sessionStorage.getItem("UserLogin")}
  // console.log(obj);
      axios.post(PostTaskUrl, obj)
        .then(function (response) {
          
          GetTaskList(dispatch,sessionStorage.getItem("UserLogin"))
    
          }
         
        )
        .catch(function (error) {
        console.log(error);
        
        });
    }

export {  Auth,GetTaskList ,DeleteTask,TaskStatus,TaskUpdate,PostTask}