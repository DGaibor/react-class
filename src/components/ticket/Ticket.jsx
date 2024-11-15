import {Welcome} from "../welcome/Welcome";
import React, {useState} from "react";
import './Ticket.css';

export const Ticket = (props) =>{

    const [count, setCount] = useState(0);
    const [clicked, setClicked] = useState(40000)


    
  
    const handleBuyTicket = () => {
        console.log('Ticket bought', count);
        setCount(count + 1)
        setClicked((prevState)=>{
            return prevState + 1
        })
    }
    
    
    return(
        <>

            <Welcome nickName={props.nickName}/>
            <div>Count: {count}</div>
            <div>Clicked: {clicked}</div>
            <h1 className={'new'}>Ticket Details</h1>
            <div>Name: {props.fullName}</div>
            <div>Destination: {props.destination}</div>
            <p>Gender: {props.gender}</p>
            <p>Seat: {props.seat}</p>

            <button onClick={handleBuyTicket}>
                Buy Ticket
            </button>


        </>
    )
}

