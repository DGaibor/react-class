import {useContext} from "react";
import UserContext from "../../context/UserContext";

export const UserDisplay = () => {
    const {user} =  useContext(UserContext)
    return (
        <div>
            <h1>User Data</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
        </div>
    )
}
