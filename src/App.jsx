// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React, { useState } from "react";
import { getCoordinates } from "./api/geocoding";
import { getWeather } from "./api/weather";
import WeatherForm from "./components/weatherForm";
import WeatherDisplay from "./components/weatherDisplay";
import Loader from "./components/Loader";
import Error from "./components/Error";
import "./styles/App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
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
      const weatherData = await getWeather(latitude, longitude);
      setWeather(weatherData);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="App" style={{ height:850 , maxWidth: 1000, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1>Weather Now</h1>
      <WeatherForm city={city} onCityChange={handleCityChange} onSubmit={handleSearch} loading={loading} />
      {loading && <Loader />}
      {error && <Error message={error} />}
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
}

export default App;
