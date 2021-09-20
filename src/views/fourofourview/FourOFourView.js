import React, { useState } from 'react'
import { useLocation } from 'react-router'

export const FourOFourView = () => {
    const location = useLocation()
    const [lastpage] = useState(location.state == "/" ? "/home" : location.state)
    return (
        <div>
            { lastpage }
           <h1>404 Sidan kan ej visas.</h1>
        </div>
    )
}
