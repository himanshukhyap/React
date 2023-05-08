import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

export default function Input() {
    const [text, settext] = useState("See your result")
    const myChangeHandler = (event) => {

        console.log(event.target.value)
        settext(event.target.value)
    }
    return (
        <div>
            <Form className="mt-5 text-center">
                <input onChange={myChangeHandler}
                    type="text"
                />
            </Form>
            <br />

            <h5>{text}</h5>
        </div>
    )
}
