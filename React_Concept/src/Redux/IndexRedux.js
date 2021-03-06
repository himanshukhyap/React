import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { decrement, Increment } from './ActionWhat'


export default function IndexRedux() {
    const mystate = useSelector(state => state.Reducer)
    const dispatch = useDispatch()

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
                type="text"
                className="py-2 border px-3 bg-light text-dark text-center shadow"
                value={mystate}
            />
            <button
                className="py-2 border px-3 bg-dark text-white text-decoration-none shadow"
                onClick={() => dispatch(Increment())}
            >
                <span className="fw-bold fs-4">+</span>
            </button>
        </div>
    )
}
