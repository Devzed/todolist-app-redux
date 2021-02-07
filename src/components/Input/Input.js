import React, { useState } from 'react'
import './Input.css'

const Input = () => {
    const [input, setInput] = useState('')

    const addTodo = () => {

    }

    return (
        <div className='Input'>
            <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
            <button onClick={addTodo}>Add</button>
        </div>
    )
}

export default Input
