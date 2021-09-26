import { useLocation } from "react-router"
import { useEffect, useState, createContext, useContext } from "react"

export const WindSpeedContext = createContext()

function HomeViewClick() {
    const location = useLocation()
    const [loading, setLoading] = useState(false)
    const fetchData = async () => {
        setLoading(true)
        const API_URL = "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/11.9745/lat/57.7088/data.json"
        try {
            const http = new XMLHttpRequest();
            http.open("GET", API_URL)
            http.send()
            http.onreadystatechange = (e) => {
                var weatherInfo = JSON.parse(http.responseText).timeSeries[0].parameters
                for (let i = 0; i < weatherInfo.length; i++) {
                    if (weatherInfo[i].name === "ws") {
                        // SetProvider(weatherInfo[i].values)
                        return(
                            <WindSpeedContext.Provider value={weatherInfo[i].values}>
                            <Display />
                            </WindSpeedContext.Provider>
                        )
                        break
                    }
                }
            }
            setLoading(false)
        } catch (error) {
            return ("Det gick inte att få fram hur mycket det blåser i Göteborg")
        }
    }

    useEffect(() => {
        fetchData()
        
    })
    
    if (location.state === undefined) {
        return
    }
    const { toHome } = location.state
    return (
        [<br></br>, "Did you click the home-link? " + toHome]
    )
}

// function SetProvider(value) {
//     console.log(value)
//     return (
//         <WindSpeedContext.Provider value={value}>
//                 <Display />
//         </WindSpeedContext.Provider>
//     )
// }

function Display() {
    const value = useContext(WindSpeedContext)
    return <div>Vindhastigheten i Göteborg är just nu {value} meter per sekund</div>
}

export const HomeView = () => {
    return (
        [
            <div>
                <h1>Detta är hemvyn</h1>
            </div>, HomeViewClick(),Display()
        ]
    )
}