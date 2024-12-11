import React from 'react'

const Propsperson = ({ name, age, salary }) => {
    
    return (
        <div className='bg-pink-400 p-4'>
            <h1 className='text-2xl'>Person name is {name} age is {age} and salary is {salary ? 'Rs.' + salary : 'not provided'}</h1>
        </div>
    )
}

export default Propsperson