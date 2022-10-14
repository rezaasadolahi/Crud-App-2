import { useState } from 'react'



function InputHandleHooks() {
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const resetInput = () => {
        setValue('')
    }


    return (
        [value, handleChange, resetInput]
    )
}


export default InputHandleHooks
