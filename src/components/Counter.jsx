import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        if (count >= 10) {
            setCount(count)
        } else {
            setCount(count + 1)
        }
    }
    return (
        <div className='min-h-80 flex flex-col items-center justify-center bg-blue-200'>
            <h1 className='text-2xl'>Counter App</h1>
            <h2 className='text-4xl py-4'>{count}</h2>
            <div className='flex gap-5'>
                <button onClick={increment} className='border-2 border-black px-1'>Increment</button>
                <button onClick={() => count <= 0 ? setCount(count) : setCount((prev) => prev - 1)} className='border-2 border-black px-1'>Decrement</button>
                <button onClick={() => setCount(0)} className='border-2 border-black px-1'>Reset</button>
            </div>
        </div >
    )
}

export default Counter