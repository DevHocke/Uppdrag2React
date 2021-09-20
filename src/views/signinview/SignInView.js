import React, { useState } from 'react'
import { useLocation } from 'react-router'

export const SignInView = () => {
    const location = useLocation()
    const [lastpage] = useState(location.state == "/" ? "/home" : location.state)

    return (
        <div>
            {lastpage}
           <h1>This is the sign in view.</h1>
        </div>
    )
}
