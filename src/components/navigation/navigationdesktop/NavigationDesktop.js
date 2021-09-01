import { useHistory } from 'react-router-dom'
import RoutingPaths from '../../../routes/RoutingPaths'

export const NavigationDesktop = () => {
    const history = useHistory()
    return (
        <nav>
            <button onClick={()=>history.push(RoutingPaths.home)}>home</button>
            <button onClick={()=>history.push(RoutingPaths.about)}>about</button>
        </nav>
    )
}

export default NavigationDesktop
