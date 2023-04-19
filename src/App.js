import './App.css';
import Searchbox from './components/Searchbox';
import CurrentWeatherBox from './components/CurrentWeatherBox';
function App() {
  return (
    <div className="App">
      <Searchbox />
      <CurrentWeatherBox />
    </div>
  );
}

export default App;
