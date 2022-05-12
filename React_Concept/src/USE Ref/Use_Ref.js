import React, { useRef } from 'react'
import ForwardRefff from './ForwardRef'

export default function Use_Ref() {
    const inputRef = useRef(null)
    const inputRef2 = useRef(null)
   
    return (
        <div className="">
            <input type="text" ref={inputRef}  />
            


            <ForwardRefff ref={inputRef2}/>

            <button onClick={() => {
                console.warn(inputRef.current.value)
              //  console.warn(inputRef)
                console.warn(inputRef2.current.value)
              
            }}>Click</button>
        </div>
    )
}
