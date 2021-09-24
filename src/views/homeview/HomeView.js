import React, { useState } from 'react'
import { useLocation } from 'react-router'
import { UserContext, UserProvider } from '../../shared/global/provider/UserProvider'

export const HomeView = () => {
    const location = useLocation()
    const [lastpage] = useState(location.state == "/" ? "/home" : location.state)

    return (
        <div>
            { lastpage }
           <h1>This is the home view.</h1>
           <h2>{}</h2>
        </div>
    )
}
