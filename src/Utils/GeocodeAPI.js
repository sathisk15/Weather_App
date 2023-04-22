const Geo_Code_options = {
  headers: {
    'X-RapidAPI-Key': '6a59f5899emshd398a6e8f7212d0p1ce0c4jsn5cbab4435813',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  },
};
const Geo_Code_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

const weatherAPI = 'https://api.openweathermap.org/data/2.5';
const weatherAPIKey = 'bbe29ed0bd009073e5e16a38cd09ade4';

const weatherForcast = `api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={API key}`
export { Geo_Code_options, Geo_Code_API_URL, weatherAPI, weatherAPIKey, weatherForcast };
