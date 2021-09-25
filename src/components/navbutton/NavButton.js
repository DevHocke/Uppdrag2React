import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import './NavButton.css'

export const NavButton = (props) => {
    const history = useHistory()
    const location = useLocation()
    
    return (
        <button className="nav-btn" onClick={()=>history.push(props.path, location.pathname)}>{props.buttonText}</button>
    )
}