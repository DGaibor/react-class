import {useContext} from "react";
import UserContext from "../../context/UserContext";

export const EditUser = () => {
    
    const {user, setUser} = useContext(UserContext);
    
    return (<>
        <h1>User Form</h1>
        <div>

            <input type="text" placeholder="Name" value={user.name} onChange={(e)=>setUser((prev)=> ({...prev,name: e.target.value}) ) }/>
            <input type="email" placeholder="Email" value={user.email} onChange={(e)=>setUser((prev)=> ({...prev,email: e.target.value}) ) }/>
            <input type="number" placeholder="Age" value={user.age} onChange={(e)=>setUser((prev)=> ({...prev,age: e.target.value})) }/>
            
        </div>
    </>)
}
