import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ImLocation } from 'react-icons/im';
import { Geo_Code_options, Geo_Code_API_URL } from '../Utils/GeocodeAPI';
import { weatherAPI, weatherAPIKey } from '../Utils/GeocodeAPI';
import SearchResults from './SearchResults';

const Searchbox = ({getCityDetails}) => {
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
  const clearCities = (city) => {
    setToggleResults(false);
    async function fetchData() {
      if (city) {
        let { data } = await axios.get(
          `${weatherAPI}/weather?lat=${city.latitude.toFixed(
            4
          )}&lon=${city.longitude.toFixed(4)}&appid=${weatherAPIKey}`
        );
        getCityDetails(data)
        console.log("Test Weather API Call")
      }
    }
    fetchData();
    setLocation(city.city);
  };
  const handleLocation = () => {};
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
