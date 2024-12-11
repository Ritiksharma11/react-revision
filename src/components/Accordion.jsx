import React from 'react'
import { useState } from 'react'
import AccordionQna from './AccordionQna'

const Accordion = () => {
    const data = [
        {
            id: 1,
            question: "What is Question1?",
            answer: "This is answer1"
        },
        {
            id: 2,
            question: "What is Question2?",
            answer: "This is answer2"
        },
        {
            id: 3,
            question: "What is Question3?",
            answer: "This is answer3"
        },
        {
            id: 4,
            question: "What is Question4?",
            answer: "This is answer4"
        },
        {
            id: 5,
            question: "What is Question5?",
            answer: "This is answer5"
        },
    ]

    const [active, setActive] = useState(null)

    const toggleAccordion = (index) => {
        setActive(index === active ? null : index);
    }

    return (
        <div className='bg-slate-200 p-4'>
            <div>
                <h1>Multi Selection Accordion</h1>
                {
                    data.map((item, index) => (
                        <div key={index} className='bg-slate-700 text-white py-1 px-2 m-2 rounded-md cursor-pointer'>
                            <AccordionQna question={item.question} answer={item.answer} id={item.id} />
                        </div>
                    ))
                }
            </div>

            <div className='mt-5'>
                <h1>Single Selection Accordion</h1>
                {
                    data.map((item) => (
                        <div className='bg-gray-700 text-white m-2 py-1 px-2 rounded-md text-xl' key={item.id}>
                            <div className='cursor-pointer flex justify-between' onClick={() => toggleAccordion(item.id)}>{item.question} <span>{active === item.id ? '-' : '+'}</span></div>
                            <div>
                                {active === item.id ? <div>{item.answer}</div> : null}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Accordion