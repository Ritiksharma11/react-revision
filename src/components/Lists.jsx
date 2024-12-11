import React from 'react'

const Lists = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 'Ritik', 'Sharma', 'Dhungana'];
    return (
        <div className='bg-yellow-200 p-4'>
            <h1 className='text-2xl'>List Rendering using map</h1>
            {
                arr.map((item, index) => (
                    <h1 key={index}>{item}</h1>
                ))
            }
        </div>
    )
}

export default Lists