import React, { useState } from 'react'
import { useLocation } from 'react-router'

export const SignInView = () => {
    const location = useLocation()
    const [lastpage] = useState(location.state == "/" ? "/home" : location.state)
    const [username, setUsername] = useState()

    return (
        <div>
            {lastpage}
           <h1>This is the sign in view.</h1>
           <h2>{username}</h2> 
           <span>Username: </span><input onChange={event => setUsername(event.target.value)} /> <br />
           <button>Login</button>
        </div>
    )
}