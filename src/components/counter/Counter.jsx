import {useEffect, useState} from "react";

export const Counter = () => {
    
    const [seconds, setSeconds] = useState(0);

    const addSeconds =()=>{
       const intervalId =  setInterval(()=>{
            setSeconds((prev)=>prev +1)
        },1000)
        return intervalId;
    
    }
    useEffect(() => {
        
      const intervalId = addSeconds();
      
      
         return ()=>{
           //se va a ejecutar cuanto el componte se desmonte  
             
             clearInterval(intervalId);
             
         }
    }, []);
    
    return (
        <>
            <h1>Second Counter {seconds}</h1>
        </>
    )
}
