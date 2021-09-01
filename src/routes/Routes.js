import RoutingPaths from './RoutingPaths'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { FourOFourView } from '../views/fourofourview/FourOFourView'
import { HomeView } from '../views/homeview/HomeView'
import { AboutView} from '../views/aboutview/AboutView'
import { PortfolioView } from '../views/portfolioview/PortfolioView'

export const Routes = ({children}) => {
    return (
        <BrowserRouter>
        {children}
        <Switch>
            <Route exact path={RoutingPaths.home} component={HomeView} />
            <Route exact path={RoutingPaths.about} component={AboutView} />
            <Route exact path={RoutingPaths.portfolio} component={PortfolioView} />
            <Route component={FourOFourView} />
        </Switch>
        </BrowserRouter>
    )
}
