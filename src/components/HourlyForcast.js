import React from 'react';
import { KtoC } from '../Utils/helperFunctions';
import { weatherImgLink } from '../Utils/API';
const HourlyForcast = ({ temp, img, time }) => {
  let s = new Date(time * 1000);
  s = s.getHours();
  return (
    <div className="hourBox">
      <p>{KtoC(temp)}°C</p>
      <img src={weatherImgLink + '/' + img + '@2x.png'} alt="img" />
      <p>{`${s > 12 ? s - 12 : s} ${s > 12 ? 'PM' : 'AM'}`}</p>
    </div>
  );
};

export default HourlyForcast;
