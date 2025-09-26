export async function getWeather(latitude, longitude) {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );
  const data = await response.json();
  if (data.current_weather) {
    return data.current_weather;
  }
  throw new Error("Weather data not found");
}
