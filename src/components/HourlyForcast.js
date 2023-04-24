import React from 'react';
import { KtoC, getTime } from '../Utils/helperFunctions';
import { weatherImgLink } from '../Utils/API';
const HourlyForcast = ({ temp, img, time }) => {
  return (
    <div className="hourBox">
      <p>{KtoC(temp)}°C</p>
      <img src={weatherImgLink + '/' + img + '@2x.png'} alt="img" />
      <p>{getTime(time)}</p>
    </div>
  );
};

export default HourlyForcast;
