import React from 'react'
import { useSelector } from 'react-redux';

function Loader() {
 

  

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  )
}

export default Loader