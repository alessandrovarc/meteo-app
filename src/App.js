
import { useEffect, useState } from 'react';
import './App.css';
import DaysCardCollections from './component/DaysCardCollections';
import InfoWeather from './component/InfoWeather';
import MeteoNav from './component/MeteoNav';
import "bootstrap/dist/css/bootstrap.min.css";
import VideoBackground from './component/VideoBakcground';


function App() {
   const[city, setCity]= useState('');
   const[weather, setWeather]=useState(null);

   useEffect(()=> {
    fetchWeather();
   },[])

  const fetchWeather = () => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + ",IT&appid=8c213aae94d24bcb33da8a0f54e3d6e1&units=metric&lang=it")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('è presente un errore nella chiamata');
        }
      })
      .then((data) => {
        
        setWeather(data)
      })
      .catch((err) => {
        console.log('errore nel recupero dei dati', err);
      });
  }


  return (
    <div className="App">
      <MeteoNav city={city} setCity={setCity} fetchWeather={fetchWeather}/>
      {weather && <div>
        <VideoBackground/>  
        <div className='weather-content'>
          <InfoWeather weather={weather}/>
          <DaysCardCollections weather={weather} />
        </div>
      </div>}
      
    </div>
  );
}

export default App;
