import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import { WeatherView } from '../View/WeatherView/WeatherView'
import {HomeView} from '../View/HomeView/HomeView'
import { Navigation } from '../navigation/Navigation/Navigation'
import RoutingPath from './RoutingPath'


export const Routes = () =>{
    return (
    <Router basename="/ReactAssignment2">
        <Navigation/>
        <Switch>
            <Route exact path={RoutingPath.weatherView} component={WeatherView}/>
            <Route path={RoutingPath.homeView} component={HomeView}/>
            <Route component={"/"}/>
        </Switch>
    </Router>
    )
}