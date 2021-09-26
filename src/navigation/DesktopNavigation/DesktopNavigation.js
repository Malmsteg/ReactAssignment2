import React from 'react'
import {Link} from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'

export const DesktopNavigation = () =>
{
    return(
        <nav>
            <ul>
                <li id="Home">
                    <Link to={{
                        pathname: RoutingPath.homeView,
                        state:{
                            toHome: true
                        }}} >Home</Link>
                    </li>
                <li id="Weather">
                    <Link to={{
                        pathname: RoutingPath.weatherView,
                        state:{
                            toHome: false
                        }
                        }}>Weather</Link>
                </li>
            </ul>
        </nav>
    )
}