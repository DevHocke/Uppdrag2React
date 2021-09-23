import RoutingPaths from './RoutingPaths'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { FourOFourView } from '../views/fourofourview/FourOFourView'
import { HomeView } from '../views/homeview/HomeView'
import { StoreView} from '../views/storeview/StoreView'
import { SignInView } from '../views/signinview/SignInView'
import { AccessoriesView } from '../views/accessoriesview/AccessoriesView'
// import LocalStorage from '../shared/storage/LocalStorage'

export const Routes = ({children}) => {
    return (
        <BrowserRouter>
        {children}
        <Switch>
            <Route exact path={RoutingPaths.home} component={HomeView} />
            <Route exact path={RoutingPaths.store} component={StoreView} />
            <Route exact path={RoutingPaths.signin} component={SignInView} />
            <Route exact path={RoutingPaths.accessories} component={AccessoriesView} />
            <Route component={FourOFourView} />
        </Switch>
        </BrowserRouter>
    )
}
