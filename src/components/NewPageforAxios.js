import React, { useEffect, useState } from 'react';
import axios from 'axios';

 var id = 11;
 function Callaxiosfunc() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState();


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => setUsers(res.data))
    }, [])


//for update or delete 
    
// useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/users/1').then(res => setUsers(res.data))
    // }, [])

    const handlenameadd = () => {
        debugger
        axios.post('https://jsonplaceholder.typicode.com/users', { id: id++, name: name }).then(res => setUsers([...users, res.data], console.log(res.data)), )
    }

    // const handleupdate = () => {
    //     axios.put(`https://jsonplaceholder.typicode.com/users/${1}`, { name: name }).then(res => setUsers(res.data))

    // }
    return (
        <>
            <h1>Axios error </h1>
            {
                users.map((x, index) => {
                    return (

                        <div key={index}>
                            {x.name}
                            {x.username}
                            {x.email}
                        </div>
                    )
                }
                )
            }

            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={handlenameadd}>Add Name</button>
            {/* {users.name}
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={handleupdate}>update</button> */}
        </>
    )

}
export default Callaxiosfunc;


