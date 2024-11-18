import {useEffect, useState} from "react";

export const CounterTitle = (props) => {
    
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = `Counter: ${counter}`;
    }, [counter]);
    
    return (
        <>
            <h1> Count: {counter}</h1>
            
            <button onClick={()=>setCounter((prev)=>prev+1)}>Click</button>
        </>
    )
}
