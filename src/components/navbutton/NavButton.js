import React from 'react'
import { useHistory } from 'react-router-dom'
import './NavButton.css'


export const NavButton = (props) => {
    const history = useHistory()
    
    return (
        <button className="nav-btn" onClick={()=>history.push(props.path)}>{props.buttonText}</button>
    )
}
