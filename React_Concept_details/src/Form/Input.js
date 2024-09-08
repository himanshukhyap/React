import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

export default function Input() {
    // const [text, settext] = useState("See your result")
    var formValue = {}
    const myChangeHandler = (event) => {

        console.log(event.target.value)
        // settext(event.target.value)
        formValue.text=event.target.value;
        console.log(formValue)
    
    }
  
    return (
        <div>
            <Form className="mt-5 text-center">
                <input onChange={myChangeHandler}
                    type="text"
                    GetData={formValue}
                />
            </Form>
            <br />

            <h5>{formValue.text}</h5>
        </div>
    )
}
