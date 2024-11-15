export const Ticket = (props) =>{
    return(
        <>
            <h1>Ticket Details</h1>
            <div>Name: {props.fullName}</div>
            <div>Destination: {props.destination}</div>
            <p>Gender: {props.gender}</p>
            <p>Seat: {props.seat}</p>
        </>
    )
}

