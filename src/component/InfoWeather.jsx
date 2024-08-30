import { useEffect } from "react";
import "../styles/InfoWeather.css";


function InfoWeather({weather}) {

    useEffect(()=> {
        console.log('console di weather',weather)
       },[weather])

    return(
        <div className="info-weather-container my-5">
            <div className="description">Venerdì 30/08/24</div>
            <div className="city">{weather.name}</div>
            <div className="temperature">{Math.trunc(weather.main.temp)}°</div>
            <div className="description">{weather.weather[0].description}</div>
            <div className="description">max temperature {weather.main.temp_max}°</div>
            <div className="description">min temperature {weather.main.temp_min}°</div>
            <div className="description">wind speed {weather.wind.speed} km\h</div>

        </div>
    )
}
export default InfoWeather