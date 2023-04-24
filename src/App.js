import './App.css';
import Searchbox from './components/Searchbox';
import CurrentWeatherBox from './components/CurrentWeatherBox';
import WeatherForcast from './components/WeatherForcast';
import AdditionalInfo from './components/AdditionalInfo';
import { useState } from 'react';

function App() {
  const [weatherData, setWeatherData] = useState();
  const [forecastData, setForecastData] = useState();
  const getWeatherData = (data) => {
    setWeatherData(data);
  };
  const getForecastData = (data) => {
    setForecastData(data);
  };
  return (
    <div className="App">
      <h1 className="apptitle">Weather App</h1>
      <Searchbox
        getWeatherData={getWeatherData}
        getForecastData={getForecastData}
      />
      {weatherData && (
        <CurrentWeatherBox
          weatherData={{ main: weatherData.main, weather: weatherData.weather }}
        />
      )}
      {forecastData && <WeatherForcast forecastData={forecastData} />}
      {weatherData && (
        <AdditionalInfo
          data={{
            humidity: weatherData.main.humidity,
            pressure: weatherData.main.pressure,
            wind: { speed: weatherData.wind.speed, deg: weatherData.wind.deg },
            sys: weatherData.sys,
          }}
        />
      )}
    </div>
  );
}

export default App;
