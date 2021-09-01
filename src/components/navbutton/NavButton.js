import React from 'react'
import { useHistory } from 'react-router-dom'
import RoutingPaths from '../../routes/RoutingPaths'


export const NavButton = ({buttonText}) => {
    const history = useHistory()
    return (
        <button onClick={()=>history.pushState(RoutingPaths.home)}>{buttonText}</button>
    )
}
