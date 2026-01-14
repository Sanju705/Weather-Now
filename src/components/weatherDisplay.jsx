import React from "react";
import "../styles/WeatherDisplay.css";

const weatherCodeMap = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depositing rime fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense drizzle",
  61: "Slight rain",
  63: "Moderate rain",
  65: "Heavy rain",
  71: "Slight snow",
  73: "Moderate snow",
  75: "Heavy snow",
  80: "Rain showers",
  81: "Moderate rain showers",
  82: "Violent rain showers",
};

function WeatherDisplay({ city, weather, units = 'metric' }) {
  const current = weather.current_weather || {};
  const daily = weather.daily || { time: [] };
  const hourly = weather.hourly || { time: [], visibility: [], uv_index: [] };

  const getDescription = (code) => weatherCodeMap[code] || "Unknown";

  // compute average visibility for a given date (YYYY-MM-DD)
  const visibilityForDate = (dateStr) => {
    const values = [];
    for (let i = 0; i < hourly.time.length; i++) {
      if (hourly.time[i].startsWith(dateStr) && typeof hourly.visibility[i] !== 'undefined') {
        values.push(Number(hourly.visibility[i]));
      }
    }
    if (values.length === 0) return null;
    const sum = values.reduce((a, b) => a + b, 0);
    return Math.round(sum / values.length);
  };

  const tempUnit = units === 'imperial' ? '°F' : '°C';
  const windUnit = units === 'imperial' ? 'mph' : 'km/h';
  const visibilityUnit = units === 'imperial' ? 'mi' : 'm';

  const formatVisibility = (m) => {
    if (m == null) return '--';
    if (units === 'imperial') {
      // meters to miles
      const mi = Number(m) / 1609.344;
      return mi.toFixed(1);
    }
    return Math.round(m);
  };

  return (
    <section className="weather-card">
      <div className="weather-top">
        <div>
          <h2 className="location">{city}</h2>
          <p className="time">Local time: {current.time || daily.time[0]}</p>
        </div>
        <div className="summary">
          <p className="desc">{getDescription(current.weathercode)}</p>
          <p className="temp">{(current.temperature ?? daily.temperature_2m_max?.[0] ?? '--')}{tempUnit}</p>
        </div>
      </div>

      <div className="weather-details">
        <p><strong>Wind Speed:</strong> {current.windspeed ?? '--'} {windUnit}</p>
        <p><strong>Wind Direction:</strong> {current.winddirection ?? '--'}°</p>
        <p><strong>Visibility (avg):</strong> {formatVisibility(visibilityForDate(daily.time[0]))} {visibilityUnit}</p>
        <p><strong>UV Index (max today):</strong> {daily.uv_index_max?.[0] ?? '--'}</p>
      </div>

      <h3 className="week-title">7-Day Forecast</h3>
      <div className="week-grid">
        {daily.time.slice(0, 7).map((d, idx) => (
          <div className="day-card" key={d}>
            <div className="day-header">{d}</div>
            <div className="day-body">
              <div className="day-temp">
                <span className="max">{daily.temperature_2m_max?.[idx]}{tempUnit}</span>
                <span className="min">{daily.temperature_2m_min?.[idx]}{tempUnit}</span>
              </div>
              <div className="day-desc">{getDescription(daily.weathercode?.[idx])}</div>
              <div className="day-extra">UV: {daily.uv_index_max?.[idx] ?? '--'}</div>
              <div className="day-extra">Visibility: {formatVisibility(visibilityForDate(d))} {visibilityUnit}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WeatherDisplay;
