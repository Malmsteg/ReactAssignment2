import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import { AboutView } from '../View/AboutView/AboutView'
import {HomeView} from '../View/HomeView/HomeView'
import { Navigation } from '../navigation/Navigation/Navigation'
import RoutingPath from './RoutingPath'


export const Routes = () =>{
    return (
    <Router basename="/ReactAssignment2">
        <Navigation/>
        <Switch>
            <Route exact path={RoutingPath.aboutView} component={AboutView}/>
            <Route path={RoutingPath.homeView} component={HomeView}/>
            <Route component={"/"}/>
        </Switch>
    </Router>
    )
}