import React, { useContext, useState } from 'react'
import { useLocation } from 'react-router'
import { LoginContext } from '../../context/LoginContext'

export const HomeView = () => {
    const location = useLocation()
    const [lastpage] = useState(location.state == "/" ? "/home" : location.state)

    const {loggedIn, setloggedIn} = useContext(LoginContext)

    return (
        <div>
           { loggedIn }<br />
           <p>You last visited the { lastpage } view.</p><br />
           <h1>This is the home view.</h1>
           <button onClick={() => setloggedIn("User is logged out.")}>Logg out.</button>

        </div>
    )
}
