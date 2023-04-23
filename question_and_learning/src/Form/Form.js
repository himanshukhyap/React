import React, { useState } from 'react'

function Form() {

    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
      
      if (name.charAt(0)!="") {
        
          console.log(name)
      }
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <input type="submit" />
        </form>
    )
}

export default Form