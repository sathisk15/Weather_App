
const CurrentWeatherBox = ({ weatherData }) => {
  const FtoC = (d) => (d - 273.15).toFixed(0);
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-10 col-sm-10 col-md-8 col-lg-6">
          {weatherData && (
            <div className="weather-box">
              <div className="icon">
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  alt=""
                />
              </div>
              <div className="temprature">
                {FtoC(weatherData.main.temp)}&deg;C
              </div>
              <div className="climate">
                {weatherData.weather[0].description}
              </div>
              <div className="FeelsLike">
                {`Feels like: ${FtoC(weatherData.main.feels_like)} `}&deg;C
              </div>
              <span className="temp">
                <p className="high">
                  {`H: ${FtoC(weatherData.main.temp_max)} `}&deg;C
                </p>
                <p className="low">
                  {`L: ${FtoC(weatherData.main.temp_min)} `}&deg;C
                </p>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherBox;
