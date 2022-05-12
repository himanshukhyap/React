import React,{ useState } from 'react';
import classNames from 'classnames/bind';
function ClassnameCom() {
    const [open, setopen] = useState(false)
const click=()=>{
    console.log(open)
    setopen(!open)
}
  return (
      <>
      <button onClick={click}>Click to Chnage text Color</button>
    <div className={classNames('bg-dark', {"text-white":open}) }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsa, consequatur omnis officia voluptas odit exercitationem esse deleniti quis eum vitae eveniet, suscipit ullam eos aliquid! Dolore, ratione nisi! Harum?</div>
</>
  )
}

export default ClassnameCom