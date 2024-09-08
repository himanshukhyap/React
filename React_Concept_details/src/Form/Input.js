import React, { useState } from 'react'
import EmailValidation from './EmailValidation';

export default function Input() {

    var formValue = {
        Email:{Email:"",IsValid:0}
    }
    const handleSubmit = (e) => {
        e.preventDefault();
            console.log(formValue.Email.IsValid)
        
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="App">
                <EmailValidation getdata={formValue} />
            </div>
            <button type='Submit'>Submit</button>
        </form>
    )
}
