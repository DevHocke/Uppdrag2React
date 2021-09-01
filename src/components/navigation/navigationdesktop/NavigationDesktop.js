import { useHistory } from 'react-router-dom'
import RoutingPaths from '../../../routes/RoutingPaths'
import { NavButton } from '../../navbutton/NavButton'

export const NavigationDesktop = () => {
    const history = useHistory()
    return (
        <nav>
            <NavButton buttonText="Home" path={RoutingPaths.home}/>
            <NavButton buttonText="About" path={RoutingPaths.about}/>
            <NavButton buttonText="Portfolio" path={RoutingPaths.portfolio}/>
        </nav>
    )
}

export default NavigationDesktop
