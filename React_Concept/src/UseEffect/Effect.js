import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Effect() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    useEffect(() => {

     alert("clicked")
    },[count]);

    return (
        <div className="text-center mt-5">
            <h1>{count}</h1>
            
            <Button onClick={() => { setCount(count + 1) }}>Click</Button>
            <h1>{count1}</h1>
            <Button onClick={() => { setCount1(count1 + 1) }}>Click</Button>
          
        </div>
    )
}