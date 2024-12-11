import React from 'react'

const Filter = () => {
    const users = [
        {
            id: 1, name: 'Spiderman', active: true
        },
        {
            id: 2, name: 'Superman', active: false
        },
        {
            id: 3, name: 'Batman', active: true
        },
        {
            id: 4, name: 'Shaktiman', active: false
        },
        {
            id: 5, name: 'Krish', active: true
        }
    ]

    const activeUsers = users.filter((user) => user.active)
    return (
        <div className='bg-green-200 p-4'>
            <h1 className='text-4xl py-2'>Filter Active Users</h1>
            {
                activeUsers.map((active) => (
                    <h1 key={active.id}>{active.name}</h1>
                ))
            }
        </div>
    )
}

export default Filter