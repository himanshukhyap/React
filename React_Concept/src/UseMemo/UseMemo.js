import React, { useMemo, useState } from 'react'

export default function UseMemo() {
    const [Count, setCount] = useState(0)
    const [item, setitem] = useState(0)


    let useeffect = useMemo(() => {
     //   console.log(Count)
        return Count
    }, [item])


    return (
        <div>
            <h1>   usememo : {useeffect}</h1>
            <br />
            <br />
            <h1> Count :  {Count}</h1>
            <button onClick={() => { setCount(Count + 1) }}>Click</button>
            <button onClick={() => { setitem(item + 1) }}>Memo</button>
        </div>
    )
}
