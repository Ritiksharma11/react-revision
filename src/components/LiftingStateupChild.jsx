import React from 'react'

const LiftingStateupChild = (props) => {
    const greetMsg = 'Hello World'
    return (
        <>
            <div className='bg-yellow-200 p-4'>Value from parent: {props.data}</div>
            <button className='bg-blue-600 text-white py-1 px-4' onClick={() => props.function(greetMsg)}>Click</button>
        </>
    )
}

export default LiftingStateupChild