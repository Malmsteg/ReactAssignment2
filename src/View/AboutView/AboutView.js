import Axios from "axios"
import { useLocation } from "react-router"
import {useState } from "react"

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

function GetWeatherAtGBG(){
    const [serverResponse, setServerResponse] = useState(0)
    const fetchData = async () => {
        const API_URL = "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/11.9745/lat/57.7088/data.json";
        try{
            const response = await Axios.get(API_URL)
            setServerResponse(response.data.timeSeries)
        }catch(error){
            return("Det gick inte att få fram vädret i Göteborg just nu")
        }        
    }
    var temperature = 0
    // eslint-disable-next-line no-array-constructor
    var temperatures = new Array()
    for(var i = 0; i < serverResponse.length && i < 15; i++){        
        for(var j = 0; j < serverResponse[i].parameters.length; j++){
            let parameters = serverResponse[i].parameters[j]
            if(parameters.name === 't')
            {
                if(i === 0)
                {
                    temperature = parameters.values[0]
                }
                else if(i === 1)
                {
                    temperatures.push([i] + " timme är det " + parameters.values[0])
                }
                else{
                temperatures.push([i] + " timmar är det " + parameters.values[0])
                }
            }
        }
    }
    
    if(serverResponse === 0)
    {
        return[
            <main><section>            
                <button onClick={() => fetchData()}>Ta fram temperaturprognos i Göteborg</button>
            </section></main>
        ]
    }
    else{
        temperatures = temperatures.map(x => x = "Om " + x + " grader Celsius")
        document.getElementById("temperatureList").innerHTML = "<li>" + temperatures.join("</li><li>") + "</li>"
        return [
            <main><section>
                <h1>Vi fick fram denna data om temperaturen i Göteborg</h1>
                <p>Temperaturen är just nu</p>
                <p>{temperature} grader Celsius</p>                             
                <p/>
                <button onClick={() => fetchData()}>Ta fram ny väderprognos i Göteborg</button>            
            </section></main>
        ]
    }
}
export const AboutView = () => {
    return (
        [<div>
        <h1>Detta är om mig-vyn</h1>
        </div>, HomeViewClick(), GetWeatherAtGBG(),
        <div><ul id="temperatureList"></ul></div>]
        )
}