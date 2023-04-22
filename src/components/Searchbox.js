import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ImLocation } from 'react-icons/im';

import {
  weatherAPI,
  Geo_Code_options,
  Geo_Code_API_URL,
  weatherAPIKey,
  weatherForcastAPI,
} from '../Utils/API';
import SearchResults from './SearchResults';

const Searchbox = ({ getWeatherData, getForecastData }) => {
  const [location, setLocation] = useState('');
  const [cities, setCities] = useState([]);
  const [toggleResults, setToggleResults] = useState(false);
  const handleSearch = async (e) => {
    setLocation(e.target.value);
    setToggleResults(true);
  };
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (toggleResults) {
        let { data } = await axios.get(
          `${Geo_Code_API_URL}/cities?namePrefix=${location}&limit=10`,
          Geo_Code_options
        );
        setCities(data.data);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [location, toggleResults]);
  async function fetchWeatherData(city) {
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
  const clearCities = (city) => {
    setToggleResults(false);
    fetchWeatherData(city);
    setLocation(city.city);
  };
  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      fetchWeatherData({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      setLocation('Your Location');
    });
  };
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div
          className="col-10 col-sm-10 col-md-8 col-lg-6"
          style={{ position: 'relative', padding: '0' }}
        >
          <div className="search-box">
            <input
              type="text"
              aria-label="Search"
              placeholder="Enter location"
              value={location}
              onChange={handleSearch}
            />
            <div className="location" onClick={handleLocation}>
              <ImLocation />
            </div>
          </div>
          {toggleResults && (
            <SearchResults cities={cities} clearCities={clearCities} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Searchbox;
