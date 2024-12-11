import React from 'react'
import { useState } from 'react'

const AccordionQna = ({ question, answer, id }) => {
    const [active, setActive] = useState(false)
    return (
            <div>
                <div onClick={() => setActive(!active)} className="flex justify-between items-center text-xl">
                    <h1>{question}</h1> <span>{active ? '-' : '+'}</span>
                </div>
                {active && <div>{answer}</div>}
            </div>
    )
}

export default AccordionQna