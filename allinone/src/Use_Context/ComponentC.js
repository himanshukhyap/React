import React, { useContext } from 'react'
import {  firstName, lastName, test } from './IndexComponent'

export default function ComponentC() {
    const fname = useContext(firstName);
    const lname = useContext(lastName);

    return (
        <div>

            <h1>This is component C  {fname} {lname} {test}</h1>

        </div>
    )
}
