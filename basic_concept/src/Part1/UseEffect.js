import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
  
    useEffect(() => {
      alert("clicked");
    }, [count]);
  
    return (
      <>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click
        </button>
        <h1>{count1}</h1>
        <button
          onClick={() => {
            setCount1(count1 + 1);
          }}
        >
          Click
        </button>
      </>
    );
}
