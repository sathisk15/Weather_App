import { weatherAPI, weatherAPIKey, weatherForcastAPI } from '../Utils/API';
import axios from 'axios';

export const KtoC = (d) => (d - 273.15).toFixed(0);

export async function fetchWeatherData(city, getWeatherData, getForecastData) {
  let { latitude, longitude } = city;
  let weatherData = await axios.get(
    `${weatherAPI}/weather?lat=${latitude.toFixed(4)}&lon=${longitude.toFixed(
      4
    )}&appid=${weatherAPIKey}`
  );
  let forecastData = await axios.get(
    `${weatherForcastAPI}/forecast?lat=${latitude.toFixed(
      4
    )}&lon=${longitude.toFixed(4)}&appid=${weatherAPIKey}`
  );
  getWeatherData(weatherData.data);
  getForecastData(forecastData.data.list.slice(0, 8));
}
