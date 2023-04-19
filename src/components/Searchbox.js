import React from 'react';
import { useState } from 'react';
import { ImLocation } from 'react-icons/im';
const Searchbox = () => {
  const [location, setLocation] = useState('Wroclaw');
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-10 col-sm-10 col-md-8 col-lg-6">
          <div className="search-box">
            <input
              type="text"
              aria-label="Search"
              placeholder="Enter location"
              value={location}
            />
            <button className="location">
              <ImLocation />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbox;
