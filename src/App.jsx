import React, { useState } from "react";
import { getCoordinates } from "./api/geocoding";
import { getWeather } from "./api/weather";
import WeatherForm from "./components/weatherForm";
import WeatherDisplay from "./components/weatherDisplay";
import Loader from "./components/Loader";
import Error from "./components/Error";
import Help from "./components/Help";
import Settings from "./components/Settings";
import "./styles/App.css";
import Logo from "./assets/logo.svg";

function App() {
  const [page, setPage] = useState("home");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState(() => {
    try {
      return localStorage.getItem('weather_units') || 'metric';
    } catch (e) {
      return 'metric';
    }
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCityChange = (value) => setCity(value);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const { latitude, longitude } = await getCoordinates(city);
      const weatherData = await getWeather(latitude, longitude, units);
      setWeather(weatherData);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="App" >
      <nav className="top-nav">
        <div className="nav-left">
          <img src={Logo} alt="logo" className="logo" />
          <a href="#" className="brand nav-link" onClick={(e)=>{e.preventDefault(); setPage('home');}}>Weather Now</a>
        </div>
        <div className="nav-right">
          <a href="#help" onClick={(e)=>{e.preventDefault(); setPage('help');}} className={"nav-link" + (page==='help'? ' active':'')}>Help</a>
          <a href="#settings" onClick={(e)=>{e.preventDefault(); setPage('settings');}} className={"nav-link" + (page==='settings'? ' active':'')}>Settings</a>
        </div>
      </nav>

      <header className="app-header">
        <h1>Current Conditions</h1>
        <p className="subtitle">Quickly get current weather information for any city.</p>
      </header>

      <main className="app-main page-container">
        {page === 'home' && (
          <>
            <WeatherForm city={city} onCityChange={handleCityChange} onSubmit={handleSearch} loading={loading} />
            {loading && <Loader />}
            {error && <Error message={error} />}
            {weather && <WeatherDisplay city={city} weather={weather} units={units} />}
          </>
        )}

        {page === 'help' && <Help onBack={() => setPage('home')} />}
        {page === 'settings' && (
          <Settings
            onBack={() => setPage('home')}
            units={units}
            setUnits={(u) => {
              setUnits(u);
              try { localStorage.setItem('weather_units', u); } catch(e){}
            }}
          />
        )}
      </main>
    </div>
  );
}

export default App;
