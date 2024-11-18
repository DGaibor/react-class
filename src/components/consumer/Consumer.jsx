import UserContext from "../../userContext";
import userContext from "../../userContext";
import {useContext} from "react";
export const ConsumerComponent = () => {
    
    const userName = useContext(userContext)
    
    
    return (
        <div style={{backgroundColor: 'red'}}>
         
            <h1>Componente Consumer: {userName}</h1>
            <h1>Consumer</h1>
        </div>
    )
}
