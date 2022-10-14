import React, { useState } from 'react'




function ToggleStateHook() {
    const [istoggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!istoggle)
    }


    return [istoggle, handleToggle]
}


export default ToggleStateHook
