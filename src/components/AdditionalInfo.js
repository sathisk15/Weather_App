import React from 'react';
// import { getTime } from '../Utils/helperFunctions';
const AdditionalInfo = ({ data }) => {
  const { humidity, pressure, wind } = data;
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-item-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 p-0">
          <div className="additionalInfo">
            <div className="row w-100 justify-content-center">
            <div className="col-6 col-sm-4 col-md-3 col-lg-3 p-0" style={{border: '1px solid #FFF'}}>
              <p>Humidity</p>
              <p>{humidity} %</p>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-3 p-0" style={{border: '1px solid #FFF'}}>
              <p>Pressure</p>
              <p>{pressure} hPa</p>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-3 p-0" style={{border: '1px solid #FFF'}}>
              <p>Wind Speed</p>
              <p>{wind.speed} m/s</p>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-3 p-0" style={{border: '1px solid #FFF'}}>
              <p>Wind Direction</p>
              <p>{wind.deg} &deg;</p>
            </div>
            </div>
          </div>
          {/* <div className="additionalInfo">
            <div className="Sunrise">
              <p>Sunrise</p>
              <p>{getTime(sys.sunrise)}</p>
            </div>
            <div className="sunset">
              <p>Sunset</p>
              <p>{getTime(sys.sunset)}</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
