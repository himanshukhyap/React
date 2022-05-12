
import React, { useState } from "react";
import moment from 'moment';




export default function Time() {

  const [time, settime] = useState(0);
  setInterval(() => {
    settime(new Date().toLocaleTimeString())
  }, 1000);
  return (

      
    <div className="text-center my-5">

      <div className="shadow d-inline  display-1 bg-dark text-light">{time}</div>
      <br/>
      <br/>
     <div className="shadow d-inline  display-1 bg-dark text-light">{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</div> 
    </div>


  );
}

