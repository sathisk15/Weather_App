import React from 'react';

const SearchResults = ({ cities, clearCities }) => {
  return (
    <div className="search-results">
      {cities.map((city, i)=>(<div key={i} onClick={()=>{
        clearCities(city)
      }}>{city.city}</div>))}
    </div>
  );
};

export default SearchResults;
