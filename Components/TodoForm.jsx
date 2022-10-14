import React from 'react'
//*Components
import InputHandleHooks from './CustomHooks/InputHandleHooks'




function TodoForm({ addTodo }) {
    const [value, handleChange, resetInput] = InputHandleHooks()

    const submitHandler = (e) => {
        e.preventDefault()
        addTodo(value)
        resetInput()
    }


    return (
        <form onSubmit={submitHandler}>
            <input
                className="form-control w-50 m-5 mx-auto"
                placeholder="enter task"
                type="text"
                value={value}
                onChange={handleChange}
            />
        </form>
    )
}


export default TodoForm
