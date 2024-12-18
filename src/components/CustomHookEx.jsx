import React from 'react'
import useFetch from '../customHook/useFetch'

const CustomHookEx = () => {
    const data = useFetch('https://jsonplaceholder.typicode.com/users');
    return (
        <div className='bg-sky-200'>
            <h1 className='text-2xl font-bold text-center py-4'>Data Fetching using Custom Hook</h1>
            {
                data.map((item) => (
                    <div key={item.id} className='flex items-center gap-5 font-semibold text-lg py-4 mx-4 md:mx-8 lg:mx-12 xl:mx-16'>
                        <h1>{item.id}</h1>
                        <p>{item.name}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default CustomHookEx