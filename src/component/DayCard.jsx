import { Sun } from 'react-bootstrap-icons';

function DayCard ({hour, weather }) {
    return(
        <div className="day-card-container">
            <Sun/>
            <div class="card-body">
                <h5 class="card-title">Ore: {hour}</h5>
                <div className="temperature">{Math.trunc(weather.main.temp)}°</div>
                <div className="description">{weather.weather[0].description}</div>
            </div>
        </div>
    )
}
export default DayCard