const Geo_Code_options = {
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_GEOCODE_API_KEY,
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  },
};
const Geo_Code_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
const weatherAPI = 'https://api.openweathermap.org/data/2.5';
const weatherForcastAPI = `https://api.openweathermap.org/data/2.5`;
const weatherImgLink = `https://openweathermap.org/img/wn`;

const weatherAPIKey = process.env.REACT_APP_WEATHER_API_KEY;
export {
  Geo_Code_options,
  Geo_Code_API_URL,
  weatherAPI,
  weatherAPIKey,
  weatherForcastAPI,
  weatherImgLink,
};
