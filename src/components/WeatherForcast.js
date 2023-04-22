import HourlyForcast from './HourlyForcast';

const WeatherForcast = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-10 col-sm-10 col-md-8 col-lg-6 p-0">
          <div className="WeatherForcast">
            <HourlyForcast />
            <HourlyForcast />
            <HourlyForcast />
            <HourlyForcast />
            <HourlyForcast />
            <HourlyForcast />
            <HourlyForcast />
            <HourlyForcast />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherForcast;
