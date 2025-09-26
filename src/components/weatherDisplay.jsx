import React from "react";

function WeatherDisplay({ weather }) {
  return (
    <div style={{ padding: "1rem", border: "1px solid #eee", borderRadius: "8px" }}>
      <h2>Current Weather</h2>
      <p><strong>Temperature:</strong> {weather.temperature} °C</p>
      <p><strong>Wind Speed:</strong> {weather.windspeed} km/h</p>
      <p><strong>Weather Code:</strong> {weather.weathercode}</p>
    </div>
  );
}

export default WeatherDisplay;
