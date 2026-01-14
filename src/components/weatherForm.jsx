import React from "react";
import "../styles/App.css";

function WeatherForm({ city, onCityChange, onSubmit, loading }) {
  return (
    <form onSubmit={onSubmit} className="weather-form">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
        required
        className="city-input"
      />
      <button type="submit" disabled={loading} className="btn">
        {loading ? "Loading..." : "Get Weather"}
      </button>
    </form>
  );
}

export default WeatherForm;
