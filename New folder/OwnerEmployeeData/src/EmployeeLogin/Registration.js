import React from 'react'

import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import $ from "jquery"
function Registration() {
const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => { 
  
    $.ajax({
                
      url: "https://localhost:44388/api/ownerdata/NewData",
      type: 'POST',
data:data,
      success: function (result) {navigate("/Login")},
      error: function () {
        alert("error");
      }
    });
  
  }
  return (
  <>

  <div className="container">
<div className="row">

<div className="col-5 m-auto">

<form onSubmit={handleSubmit(onSubmit)} >
                        <label className="form-label">First Name</label>
                        {errors.Fname && <span className='text-danger ms-2'>This First Name is required</span>}
                        <input className='form-control mb-3' {...register("Fname", { required: true })} />
                     
                        <label className="form-label">Last Name</label>
                        {errors.Lname && <span className='text-danger ms-2 '>This field is required</span>}
                        <input className='form-control  mb-3' {...register("Lname", { required: true })} />
                      
                        <label className="form-label">DOB</label>
                        {errors.DOB && <span className='text-danger ms-2 '>This field is required</span>}
                        <input className='form-control  mb-3' type="date" {...register("DOB", { required: true })} />
                        <label className="form-label">Email</label>
                        {errors.Email && <span className='text-danger ms-2 '>This field is required</span>}
                        <input className='form-control  mb-3' type="" {...register("Email", { required: true })} />
                        <label className="form-label">User Name</label>
                        {errors.UserName && <span className='text-danger ms-2'>This field is required</span>}
                        <input  className='form-control  mb-3' {...register("UserName", { required: true })} />
                        <label className="form-label">Password</label>
                        {errors.Password && <span className='text-danger ms-2'>This field is required</span>}
                        <input  className='form-control  mb-3' {...register("Password", { required: true })} />
                   
                        <div className='d-flex justify-content-center'>  
                          <button className=' btn btn-primary mx-3 my-3' type="submit" >
                          Register
                        </button>
                        </div>
                     
                    </form>
{/* <form>
  
<div className="mb-3 mt-3">
    <label htmlFor="name" className="form-label">Owner Name:</label>
    <input type="text" className="form-control" id="name" placeholder="Enter Your Name" name="name"/>
  </div>

<div className="mb-3 mt-3">
    <label htmlFor="email" className="form-label">Email:</label>
    <input type="email" className="form-control" id="email" placeholder="Enter Email" name="email"/>
  </div>
  <div className="mb-3 mt-3">
    <label htmlFor="phone" className="form-label">Phone:</label>
    <input type="text" className="form-control" id="phone" placeholder="Enter Your mobile number" name="phone"/>
  </div>

  <div className="mb-3 mt-3">
    <label htmlFor="firm" className="form-label">Firm Name:</label>
    <input type="text" className="form-control" id="firm" placeholder="Enter Business Name" name="Firm_Name"/>
  </div>

  <div className="mb-3 mt-3">
    <label htmlFor="add" className="form-label">Address:</label>
    <input type="text" className="form-control" id="add" placeholder="Enter firm Address" name="address"/>
  </div>

  <div className="mb-3 mt-3">
   
  
  
  <label htmlFor="cat">Category:</label>
  <select className="form-control" id="cat" name="cat">
  <option>Select Category</option>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
  </select>
</div>
 



  <div className="mb-3 mt-3">
    <label htmlFor="gst" className="form-label">GST NO:</label>
    <input type="text" className="form-control" id="gst" placeholder="Enter GST Number" name="gst"/>
  </div>

  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">Password:</label>
    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
  </div>

  <div className="mb-3">
    <label htmlFor="cpwd" className="form-label">Confirm Password:</label>
    <input type="password" className="form-control" id="cpwd" placeholder="confirm password" name="cpswd"/>
  </div>
 
  <button type="submit" id="submit" className="btn btn-primary">Register</button>
</form> */}
</div>
</div>
</div>

  </>
  )
}

export default Registration