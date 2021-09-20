import { useHistory } from 'react-router-dom'
import RoutingPaths from '../../../routes/RoutingPaths'
import { NavButton } from '../../navbutton/NavButton'
import './NavigationDesktop.css'

export const NavigationDesktop = () => {
    const history = useHistory()
    return (
        <nav className="nav-start">
            <NavButton buttonText="Home" path={RoutingPaths.home}/>
            <NavButton buttonText="Sign in" path={RoutingPaths.signin}/>
            <NavButton buttonText="Store" path={RoutingPaths.store}/>
        </nav>
    )
}

export default NavigationDesktop
