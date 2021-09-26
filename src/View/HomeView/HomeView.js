import { useLocation } from "react-router"
import { useEffect } from "react"

function HomeViewClick(){
    const location = useLocation()
    useEffect(() =>{
        document.title="Hej!"
    })

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
        [
        <div>      
            <h1>Detta är hemvyn</h1>
        </div>, HomeViewClick(),
        ]
    )
}