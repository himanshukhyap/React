import axios from 'axios'
import React, { useEffect, useState, useRef   } from 'react'
import { useMemo } from 'react'
import { Form } from 'react-bootstrap'

// https://pokeapi.co/api/v2/pokemon/1
export default function Axiom() {
    const inputRef = useRef(null)

    const [optionmenu, setoptionmenu] = useState("")
    const [option, setoption] = useState(1)
 // useMemo(async function() {
  // console.log("useMemo")
  //       try {
  //         const response = await axios.get('https://pokeapi.co/api/v2/pokemon/'+option);
  //        setoptionmenu(response.data.name)
  //    return response.data.name;
  //       } catch (error) {
  //      console.error(error);
  //        return error;
  //       }
  //     },[option])
      useEffect(async function() {
      
        try {
          const response = await axios.get('https://pokeapi.co/api/v2/pokemon/'+option);
          setoptionmenu(response.data.name)
     console.log( response.data.name)

        } catch (error) {
          console.error(error);
         return error
        }
      },[option])
// console.log("outside")
function change() {

  var value = inputRef.current.value;
  setoption(value)
}

    return (
        <div className="container mt-5">
            <h1>Name: {optionmenu}</h1>
            <Form.Select onChange={change} ref={inputRef} className="px-5 py-2 mt-5 w-auto border shadow border-secondary">
         
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </Form.Select>
        </div>
    )
}
