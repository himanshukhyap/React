import React, { createContext } from 'react'
import ComponentA from './ComponentA'
const firstName = createContext();
const lastName = createContext();
const test = "test"
export default function IndexComponent() {

    return (
        <div>
            <firstName.Provider value="Himanshu">
                <lastName.Provider value="kashyap">
                    <ComponentA />
                </lastName.Provider>
            </firstName.Provider>
        </div>
    )
}
export { firstName, lastName, test }