import React from 'react'
import { useDispatch } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import { LoaderAction } from '../../Redux/Actions/LoaderAction'
import TaskShow from './TaskShow'

function AfterLogin() {
    let navigate = useNavigate();
    const disptach = useDispatch()
    const logout = ()=>{
        disptach(LoaderAction(true))
        sessionStorage.clear();
        
        if (sessionStorage.length==0) {
            navigate("/", { replace: true });
            setTimeout(() => {
                disptach(LoaderAction(false))  
            }, 1000);
        }
      
    }
    
  return (
    <>
    <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">To Do</a>
      <button className="btn btn-danger" type="submit" onClick={logout}>LogOut</button>
  </div>
</nav>
    <div className="container">
    <TaskShow/>
    </div>
    
    </>
   
  )
}

export default AfterLogin