import React, { useState } from 'react'
import { useLocation } from 'react-router'

export const HomeView = () => {
    const location = useLocation()
    const [lastpage] = useState(location.state == "/" ? "/home" : location.state)

    return (
        <div>
            { lastpage }
           <h1>This is the home view.</h1>
        </div>
    )
}
