import HourlyForcast from './HourlyForcast';

const WeatherForcast = ({ forecastData }) => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-10 col-sm-10 col-md-8 col-lg-6 p-0">
          <div className="WeatherForcast">
            {forecastData.map((d, i) => (
              <HourlyForcast
                key={i}
                temp={d.main.temp}
                img={d.weather[0].icon}
                time={d.dt}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherForcast;
