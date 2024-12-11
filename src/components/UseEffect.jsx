import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = count;
    }, [count]);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            console.log(data);
            setUsers(data);
        };

        fetchUsers();

    }, []);
    return (
        <div className='bg-pink-200 p-4'>
            <div>
                <h1 className='text-2xl py-2'>UseEffect Example</h1>
                <button onClick={() => setCount((prev) => prev + 1)} className='bg-blue-500 text-white py-1 px-4 rounded-md'>Change Document Title</button>
            </div>

            <div>
                <h1 className='mt-5 text-2xl font-semibold'>Fetching API using useEffect</h1>
                {
                    users.map((user) => (
                        <div className='bg-red-500 p-2 m-2 rounded-lg ' key={user.id}>
                            <h3 className='text-xl'>UserID: {user.id}</h3>
                            <h1 className='text-2xl'>UserName: {user.name}</h1>
                            <h1 className='text-xl'>UserPhone: {user.phone}</h1>
                            <h1 className='text-xl'>UserWebsite: {user.website}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default UseEffect