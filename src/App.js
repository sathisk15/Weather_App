import './App.css';
import Searchbox from './components/Searchbox';
import CurrentWeatherBox from './components/CurrentWeatherBox';
import WeatherForcast from './components/WeatherForcast';
import { useState } from 'react';

function App() {
  const [cityData, setCityData] = useState();
  const getCityDetails = (data) => {
    setCityData(data);
  };
  console.log(cityData);
  return (
    <div className="App">
      <h1 className='apptitle'>Weather App</h1>
      <Searchbox getCityDetails={getCityDetails} />
      {cityData && (
        <CurrentWeatherBox
          weatherData={{ main: cityData.main, weather: cityData.weather }}
        />
      )}
      <WeatherForcast />
    </div>
  );
}

export default App;
