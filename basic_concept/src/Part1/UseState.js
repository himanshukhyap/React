import React, { useState } from 'react'

export default function UseState() {
    const [Fname, setFname] = useState("")
    const [Lname, setLname] = useState("")
  return (
<>
<input type="text" placeholder='FName' onChange={(event)=>{setFname(event.target.value)}}/>
<input type="text" placeholder='LName' onChange={(event)=>{setLname(event.target.value)}}/>
<h1>{Fname} {Lname}</h1>
</>
  )
}
