import React from 'react'
import {Link} from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'

export const DesktopNavigation = () =>
{
    return(
        <nav>
            <ul>
                <li>
                    <Link to={{
                        pathname: RoutingPath.homeView,
                        state:{
                            toHome: true
                        }}} >Home</Link>
                    </li>
                <li>
                    <Link to={{
                        pathname: RoutingPath.aboutView,
                        state:{
                            toHome: false
                        }
                        }}>About me</Link>
                </li>
            </ul>
        </nav>
    )
}