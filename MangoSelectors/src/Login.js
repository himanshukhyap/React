import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
var email = []
export default function Login() {
  let history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => 
  {
   console.log(data)
  email.push(data)
  history.push("/mango");
  }
  console.log(errors);
  return (

    <div classNameName="container">

        <form className="row g-3 needs-validation mt-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex justify-content-center">
          <input className='form-control w-25' type="email" placeholder="Email" {...register("Email", {required: true, pattern: "/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i"})} /> 
          </div>
          <div className='d-flex justify-content-center'>

          <button className='btn btn-primary' type="submit" >Submit</button>
          </div>
 
        </form>
      </div>
  )
}
