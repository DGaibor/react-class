export const User = () => {
    const users =[
        { name: 'Alice'},
        {name: 'Bob'},
        {name: 'Charlie'},
    ]
    
    const flats = [
        {
            city: 'New York',
            streetName: 'Broadway',
            streetNumber: 123,
            areaSize: 100,
            rentPrice: 1000000
        },
        {
            city: 'Quit',
            streetName: 'Broadway',
            streetNumber: 124,
            areaSize: 200,
            rentPrice: 2000000
        },
        {
            city: 'Ibarra',
            streetName: 'Broadway',
            streetNumber: 125,
            areaSize: 300,
            rentPrice: 3000000
        },
    ]
    

    
    return(
        <>
            <h1>Users: </h1>
            <div>
                {users.map((item, index) => (
                        <h2 key={index}>{item.name}</h2>
                    )
                )}
            </div>
            
            <h1>Flats: </h1>
            <table border={2 }>
                <thead>
                <tr>
                    <th>City</th>
                    <th>Street Name</th>
                    <th>Street Number</th>
                    <th>Area Size</th>
                    <th>Rent Price</th>
                </tr>
                </thead>
                <tbody>
                {flats.map((flat,index)=>(
                    <tr key={index}>
                        <td>{flat.city}</td>
                        <td>{flat.streetName}</td>
                        <td>{flat.streetNumber}</td>
                        <td>{flat.areaSize}</td>
                        <td>{flat.rentPrice}</td>
                    </tr>
                    )
                )}
                </tbody>
            </table>
        </>
    )
}
