import './App.css';
// import day from './images/bluesky.png'
// import night from './images/darksky.png'
import { ImLocation } from 'react-icons/im';
// import { FaLocationArrow } from 'react-icons/fa';
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-10 col-sm-10 col-md-8 col-lg-6">
            <div className="search-box">
              <input
                type="text"
                aria-label="Search"
                placeholder="Enter location"
              />
              <button className="location">
                <ImLocation />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
