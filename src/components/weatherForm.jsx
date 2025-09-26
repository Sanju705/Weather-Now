import React from "react";

function WeatherForm({ city, onCityChange, onSubmit, loading }) {
  return (
    <form onSubmit={onSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
        required
        style={{ padding: "0.5rem", width: "60%" }}
      /> <br /> <br />
      <button type="submit" disabled={loading} style={{ padding: "0.5rem" }}>
        {loading ? "Loading..." : "Get Weather"}
      </button>
    </form>
  );
}

export default WeatherForm;
