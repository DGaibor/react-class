import {useEffect, useState} from "react";
import {click} from "@testing-library/user-event/dist/click";

export const Welcome = (props) => {

    const [count , setCount] = useState(0);
    const [superClick , setSuperClick] = useState(0);
    
    
    useEffect(() => {
        console.log('Welcome component mounted');
    },[superClick,count]);
    
    return (
        <>
            <h1>Count: {count}</h1>
            <h1>SuperClick: {superClick}</h1>
            
            <button onClick={()=>setCount((prev)=>prev+1)}>Click</button>
            
            <button onClick={()=>setSuperClick((prev)=>prev+1)}> Super Click</button>
        </>

    )
}
