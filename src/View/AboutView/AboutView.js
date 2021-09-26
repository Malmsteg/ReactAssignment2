import Axios from "axios"
import { useLocation } from "react-router"
import {useState } from "react"
import {useEffect} from "react"

function HomeViewClick(){
    const location = useLocation()
    console.log(location)
    if(location.state === undefined){
        return 
    }
    const {toHome} = location.state
    return (
            "Did you click the home-link? " + toHome
        )
}

function GetWeatherAtGBG(){
    const [serverResponse, setServerResponse] = useState(0)
    const fetchData = async () => {
        const API_URL = "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/11.9745/lat/57.7088/data.json";
        try{
            console.log("here")
            const response = await Axios.get(API_URL)
            setServerResponse(response.data.timeSeries)
        }catch(error){
            console.log("not here")
            return("Det gick inte att få fram vädret i Göteborg just nu")
        }        
    }
    // console.log(Array.isArray(serverResponse))
    // console.log(serverResponse.length)
    var temperatures = new Array()
    for(var i = 0; i < serverResponse.length && i < 15; i++){        
        for(var j = 0; j < serverResponse[i].parameters.length; j++){
            let parameters = serverResponse[i].parameters[j]
            if(parameters.name === 't')
            {
                temperatures.push(parameters.values[0])
            }
        }
    }
    console.log(temperatures)
    if(serverResponse === 0)
    {
        return[
            <main><section>
                <button onClick={() => fetchData()}>Ta fram väderprognos i Göteborg</button>
            </section></main>
        ]
    }
    else{
        return [
            <main><section>
                <h1>Vi fick fram denna data om vädret i Göteborg</h1>
                <p>Temperaturen är just nu</p>
                <p>{temperatures[0]} grader Celsius</p>
                <button onClick={() => fetchData()}>Ta fram ny väderprognos i Göteborg</button>
            </section></main>
        ]
    }
}
export const AboutView = () => {
    return (
        [<div>
        <h1>Detta är om mig-vyn</h1>
        </div>, HomeViewClick(), GetWeatherAtGBG()]
        )
}