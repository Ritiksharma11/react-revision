import React from 'react'
import { useState } from 'react'

const FormHandling = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const [flag, setFlag] = useState(false)

    const handleForm = (e) => {
        e.preventDefault();
        setFlag(true);
        console.log(values)
    }

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: [e.target.value] })
    }

    return (
        <div className='bg-purple-300 p-4 flex flex-col items-center justify-center '>
            <form onSubmit={handleForm}>
                <label htmlFor="name">Name: </label><input name='name' value={values.name} onChange={(e) => handleChanges(e)} className='outline-none py-1 px-2 ml-2 rounded-sm ' type="text" placeholder='Enter your name...' /> <br /> <br />
                <label htmlFor="email">Email: </label><input name='email' value={values.email} onChange={(e) => handleChanges(e)} className='outline-none py-1 px-2 ml-2 rounded-sm ' type="email" placeholder='Enter your email...' /> <br /><br />
                <label htmlFor="phone">Phone: </label><input name='phone' value={values.phone} onChange={(e) => handleChanges(e)} className='outline-none py-1 px-2 ml-2 rounded-sm ' type="number" placeholder='Enter your phone number...' /> <br /><br />
                <button className='py-1 px-4 bg-blue-600 text-white font-semibold rounded-sm' type='submit'>Submit</button>
            </form>
            {
                flag && <h1 className='text-xl mt-4'>Your name is {values.name} and email is {values.email} and phone number is {values.phone}</h1>
            }

        </div>
    )
}

export default FormHandling