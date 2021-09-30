import React, { useContext, useState} from 'react'
import { useLocation } from 'react-router'
import { LoginContext } from '../../context/LoginContext'

export const StoreView = () => {
    const location = useLocation()
    const [lastpage] = useState(location.state == "/" ? "/home" : location.state)
    const {loggedIn, setloggedIn} = useContext(LoginContext)

    return (
        <div>
           { loggedIn }<br />
           <p>You last visited the { lastpage } view.</p><br />
            <h1> This is the store view.</h1>
            <p>It is only here to make it easier to check the useHistory section of the assignment.</p>
            <button onClick={() => setloggedIn("Logged in.")}>Sign in.</button>
        </div>
    )
}


