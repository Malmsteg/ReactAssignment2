import { useLocation } from "react-router"

function HomeViewClick(){
    const location = useLocation()
    if(location.state === undefined){
        return 
    }
    const {toHome} = location.state
    return (
            "Did you click the home-link? " + toHome  
        )
}

export const HomeView = () => {
    return (
        [<div>      
        <h1>Detta är hemvyn</h1>
        </div>, HomeViewClick()]
    )
}