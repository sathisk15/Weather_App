import { weatherImgLink } from '../Utils/API';
import {KtoC} from '../Utils/helperFunctions'
const CurrentWeatherBox = ({ weatherData }) => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-10 col-sm-10 col-md-8 col-lg-6">
          {weatherData && (
            <div className="weather-box">
              <div className="icon">
                <img
                  src={`${weatherImgLink}/${weatherData.weather[0].icon}@2x.png`}
                  alt=""
                />
              </div>
              <div className="temperature">
                {KtoC(weatherData.main.temp)}&deg;C
              </div>
              <div className="climate">
                {weatherData.weather[0].description}
              </div>
              <div className="temperatureRange">
                <div className="high">
                  <p>High</p>
                  <p>{KtoC(weatherData.main.temp_max)} &deg;C</p>
                </div>
                <div className="feelslike">
                  <p>Feels like</p>
                  <p>{KtoC(weatherData.main.feels_like)} &deg;C</p>
                </div>
                <div className="low">
                  <p>Low</p>
                  <p>{KtoC(weatherData.main.temp_min)} &deg;C</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherBox;
