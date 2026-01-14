import React from "react";
import "../styles/App.css";

function Help({ onBack }) {
  return (
    <div className="help-page">
      <h2>Help</h2>
      <p>This small help page explains how to use the Weather Now app.</p>
      <ul>
        <li>Enter a city name and click "Get Weather" to fetch current conditions and a 7-day forecast.</li>
        <li>The forecast shows max/min temperatures, a brief description, UV index and average visibility per day.</li>
        <li>If a city is not found, an error message will appear below the form.</li>
      </ul>
      <button className="btn" onClick={onBack}>Back</button>
    </div>
  );
}

export default Help;
