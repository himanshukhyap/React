import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteTask, GetTaskList, PostTask, TaskStatus, TaskUpdate } from '../../API/Api';
import { DeleteIcon, DoneIcon, EditIcon } from '../../Assest/Icon';
import { GetTaskList1, GetTaskList2 } from '../../Redux/Actions/GetTaskListAction';
import { LoaderAction } from '../../Redux/Actions/LoaderAction';
var uniqid = require('uniqid');

function TaskShow() {
  const disptach = useDispatch()
  const [status, setstatus] = useState(false)
  const [IsEdit, setIsEdit] = useState(false)
  const [AddTask, setAddTask] = useState(false)
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const TaskList = useSelector((state) => state.GettaskListReducer);
  const onSubmit = data => { debugger; TaskUpdate(disptach, data); setIsEdit(false) }
  const ADDonSubmit = data => { PostTask(disptach, data); setAddTask(false) }
  if (TaskList == null) {
    disptach(LoaderAction(true))
  }

  useEffect(() => {

    GetTaskList(disptach, sessionStorage.getItem("UserLogin"))
  }, [])





  return (
    <>
      {AddTask == false && (<button className='btn btn-primary my-2' onClick={() => { setAddTask(true) }}>Add Task</button>)}
      <form onSubmit={handleSubmit(ADDonSubmit)} key={uniqid()}>
        <div className='w-50 d-flex my-2'>
          {AddTask == true && (<input type="text" placeholder='Write Task here' {...register("Task")} className="form-control" aria-label="Text input with radio button" key={uniqid()} />)}
          {AddTask == true && (<button className='btn' type='sumbit'>{DoneIcon}</button>)}
        </div>
      </form>

      <h1>Pending</h1>
      {TaskList != null && TaskList.filter(f => f.Complete == false).map((x) => {

        return (


          <form onSubmit={handleSubmit(onSubmit)} key={uniqid()}>
            <div className="input-group w-50 my-2" key={uniqid()}>
              <div className="input-group-text" key={uniqid()}>
                <input className='form-check-input' type='radio' onClick={() => TaskStatus(disptach, x)} key={uniqid()} />

              </div>
              {IsEdit == x.TaskId ? <input type="text" {...register("Task" + x.TaskId)} className="form-control" aria-label="Text input with radio button" defaultValue={x.Task} key={uniqid()} /> :
                <input type="text" className="form-control" aria-label="Text input with radio button" value={x.Task} readOnly key={uniqid()} />}

              <button type='button' onClick={() => { DeleteTask(disptach, x.TaskId) }} key={uniqid()} className="btn">{DeleteIcon}</button>
              {IsEdit == x.TaskId ? <button onClick={() => { setValue("PreData", x); setValue("TaskName", "Task" + x.TaskId) }} key={uniqid()} className="btn" type='submit'>{DoneIcon}</button> : <button onClick={() => { setIsEdit(x.TaskId) }} key={uniqid()} className="btn" >{EditIcon}</button>}
            </div>
          </form>

        )
      })

      }


    
<h1>Complete</h1>
      {TaskList != null && TaskList.filter(f => f.Complete == true).map((x) => {
        return (

          <form onSubmit={handleSubmit(onSubmit)} key={uniqid()}>
            <div className="input-group w-50 my-2" key={uniqid()}>
              <div className="input-group-text" key={uniqid()}>
                <input className='form-check-input' type='radio' onClick={() => TaskStatus(disptach, x)} key={uniqid()} />

              </div>
              {IsEdit == x.TaskId ? <input type="text" {...register("Task" + x.TaskId)} className="form-control" aria-label="Text input with radio button" defaultValue={x.Task} key={uniqid()} /> :
                <input type="text" className="text-decoration-line-through form-control" aria-label="Text input with radio button" value={x.Task} readOnly key={uniqid()} />}

              <button type='button' onClick={() => { DeleteTask(disptach, x.TaskId) }} key={uniqid()} className="btn btn-outline">{DeleteIcon}</button>
              {IsEdit == x.TaskId ? <button onClick={() => { setValue("PreData", x); setValue("TaskName", "Task" + x.TaskId) }} key={uniqid()} className="btn" type='submit'>{DoneIcon}</button> : <button onClick={() => { setIsEdit(x.TaskId) }} key={uniqid()} className="btn" >{EditIcon}</button>}
            </div>
          </form>

        )
      })

      }



    </>

  )
}

export default TaskShow