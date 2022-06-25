import React, {  useState } from 'react'
import { Button,  Modal } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import {  useSelector } from 'react-redux';
import axios from 'axios';
function AddEmployeeModel(props) {
  //  const dispatch = useDispatch();
    // const Employee = useSelector((state) => state.Reducer);
    const Owner = useSelector((state) =>  state.OwnerData);
  //  console.log(Owner)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);
    const { register, handleSubmit, formState: { errors } , setValue} = useForm();
    const onSubmit = (data) => {   

        axios.post('https://localhost:44388/api/employee/NewData', data)
          .then(function (response) {
         //   console.log(response);
            props.fun(true)
          })
          .catch(function (error) {
            console.log(error);
          });

   
         setShow(false) 
   
       
          }
       
    return(
        <div className='container'>
            <Button className='px-3 py-2 btn btn-dark text-white my-3'  onClick={handleShow}>
                Add Employee
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <label className="form-label">First Name</label>
                        {errors.Fname && <span className='text-danger ms-2'>This field is required</span>}
                        <input className='form-control mb-3' {...register("Fname", { required: true })} />
                     
                        <label className="form-label">Last Name</label>
                        {errors.Lname && <span className='text-danger ms-2 '>This field is required</span>}
                        <input className='form-control  mb-3' {...register("Lname", { required: true })} />
                      
                        <label className="form-label">DOB</label>
                        {errors.DOB && <span className='text-danger ms-2 '>This field is required</span>}
                        <input className='form-control  mb-3' type="date" {...register("DOB", { required: true })} />
                      
             
                   
                        <div className='d-flex justify-content-center'>  
                          <Button className=' btn btn-primary mx-3 my-3' type="submit" onClick={()=>{setValue("OwnerId",Owner.OwnerId)}}>
                            Add Employee
                        </Button>
                        </div>
                       
                    </form>
                </Modal.Body>
               
            </Modal>
        </div>
    )
}

export default AddEmployeeModel