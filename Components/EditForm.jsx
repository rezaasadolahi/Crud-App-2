import React from 'react'
import InputHandleHooks from './CustomHooks/InputHandleHooks'




function EditForm({ editTodo, id, task, handleToggle }) {
    const [value, handleChange, resetInput] = InputHandleHooks(task)

    const onSubmitHandler = (e) => {
        e.preventDefault()
        resetInput()
        editTodo(id, value)
        handleToggle()
    }


    return (
        <form onSubmit={onSubmitHandler}>
            <input
                type="text"
                className="form-control w-100 EditFormInput"
                placeholder="enter new text"
                value={value}
                onChange={handleChange}
            />
        </form>
    )
}




export default EditForm
