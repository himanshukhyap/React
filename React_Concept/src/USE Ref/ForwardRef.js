import React, { forwardRef } from 'react'
 function ForwardRefff(props,ref) {

    return (
        <div className="mx-auto">
           <input type="text" ref={ref}/>
           
        </div>
    )
}
export default forwardRef(ForwardRefff);