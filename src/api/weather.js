export async function getWeather(latitude, longitude, units = "metric") {
  // open-meteo supports temperature_unit and windspeed_unit parameters
  const params = new URLSearchParams({
    latitude,
    longitude,
    current_weather: "true",
    timezone: "auto",
    forecast_days: "7",
    daily: "weathercode,temperature_2m_max,temperature_2m_min,uv_index_max",
    hourly: "visibility,uv_index",
  });

  if (units === "imperial") {
    params.append("temperature_unit", "fahrenheit");
    params.append("windspeed_unit", "mph");
  } else {
    // defaults are metric; explicitly request metric units for consistency
    params.append("temperature_unit", "celsius");
    params.append("windspeed_unit", "kmh");
  }

  const url = `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
  const response = await fetch(url);
  const data = await response.json();
  if (data && (data.current_weather || data.daily)) {
    return {
      current_weather: data.current_weather || null,
      daily: data.daily || null,
      hourly: data.hourly || null,
    };
  }
  throw new Error("Weather data not found");
}
