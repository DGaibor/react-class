import {useState} from "react";
import {Welcome} from "../welcome/Welcome";
import {Counter} from "../counter/Counter";
import UserContext from "../../userContext";

export const Loading = () => {
    
    const [isLoading, setLoading] = useState(true);
    // const [role, setRole] = useState('client');

    return (
        <div style={{ backgroundColor: 'green' }}>
            {isLoading? <p>Loading</p>:<Counter/>}
            <br></br>
            <button onClick={()=>setLoading((prev)=>!prev)}>Toggle Loading</button>
            <UserContext.Consumer>
                {
                    (item)=> {
                        return <h1>Componente Loading: {item}</h1>
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}
