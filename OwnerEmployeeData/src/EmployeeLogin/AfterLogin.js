import React, { useEffect, useState } from 'react'
import AddEmployeeModel from './AddEmployeeModel';
import EditModel from '../EditModel';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { Allemployeedata, GetOwnerData, loader } from '../Redux/Action';
import Swal from 'sweetalert2';



function AfterLogin() {

  const Employee = useSelector((state) => state.Reducer);
  const Owner = useSelector((state) => state.OwnerData);
  const loaderstate = useSelector((state) => state.loader);
  const dispatch = useDispatch();

  const [d, setd] = useState(false)

  const axios = require('axios');
  async function getemployee() {
    try {
      const response = await axios.get('https://localhost:44388/api/employee/GetAllEmployee');
  
      
      dispatch(Allemployeedata(response.data))
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    return()=>{
      getOwner()
      getemployee()
    }
   
  },[d])
  async function getOwner() {
    
    try {
      const response = await axios.get('https://localhost:44388/api/ownerdata/OwnerByUsername?username='+ sessionStorage.getItem('OwnerLogin'));
// console.log(response.data)
     dispatch(GetOwnerData(response.data))
    } catch (error) {
      console.error(error);
    }
  }
   function deletehandler(index) {
    
    try {

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {  
          
           axios.delete("https://localhost:44388/api/employee/delete/" + index)
         
           .then( () => {  setd(!d) })
           
        }
      
      })

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <AddEmployeeModel fun={() => { setd(!d) }} />

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Employee Id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">DOB</th>
              <th scope="col">Owner Name</th>
              <th scope='col' className='bg-light'>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* {data.filter(z => z.OwnerId === ownerdata.OwnerId).map((x, y) => { */}
            {Employee.filter(z => z.OwnerId === Owner.OwnerId).map((x, y) => {
              return (
                <tr key={y.toString() + "gdf"}>
                  <th scope="row">{y + 1}</th>
                  <td >{x.EmpId}</td>
                  <td className='text-uppercase'>{x.Fname}</td>
                  <td className='text-uppercase'>{x.Lname}</td>
                  <td >{moment(x.DOB).format("DD-MMMM-YYYY")}</td>
                  <td >{Owner.Fname + " " + Owner.Lname}</td>
                  <td>
                    <div className="btn-group" role="group" aria-label="Basic example">
                      <button type="button" className="btn btn-outline-danger" onClick={() => { deletehandler(x.EmpId) }}>Delete</button>
                      <EditModel fun={() => { setd(!d)}}  data={x} />

                    </div>

                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}


export default AfterLogin;