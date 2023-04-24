import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './CounterSlice'



export default function IndexRedux() {
    const mystate = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
const [myvalue, setmyvalue] = useState(0)
    return (
        <div className="container d-flex justify-content-center mt-5 ">
            <button
            
                className="py-2 border px-3 bg-dark text-white text-decoration-none shadow"
                onClick={() => dispatch(decrement())}
            >
                <span className="fw-bold fs-4">-</span>
            </button>
            <input
                name="quantity"
                className="py-2 border px-3 bg-light text-dark text-center shadow"
                value={mystate}
               onChange={e=>setmyvalue(e.target.value)}
               
            />
          
            <button
                className="py-2 border px-3 bg-dark text-white text-decoration-none shadow"
                onClick={() => dispatch(increment())}
            >
                <span className="fw-bold fs-4">+</span>
            </button>
        </div>
    )
}
