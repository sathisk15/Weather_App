import React from 'react';
import { BsFillCloudLightningRainFill } from 'react-icons/bs';

const CurrentWeatherBox = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-10 col-sm-10 col-md-8 col-lg-6">
          <div className="weather-box">
            <div className="icon">
              <BsFillCloudLightningRainFill />
            </div>
            <div className="temprature">7*</div>
            <div className="climate">Partly Cloudy</div>
            <span className="temp">
              <p className="high">H:10*</p>
              <p className="low">L:4*</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherBox;
